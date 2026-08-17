/**
 * vocab_table.js
 * Tự động chuyển các đoạn văn dạng:
 *   Từ: ... Loại từ: ... Phiên âm: ... Nghĩa: ... Câu ví dụ: ... Dịch câu: ...
 * thành bảng HTML, ngay trên trình duyệt, không cần sửa file .rst gốc.
 *
 * Cách dùng: xem hướng dẫn cài đặt ở cuối file (hoặc phần chat đã gửi kèm).
 */
(function () {
  "use strict";

  // Thứ tự và nhãn các field cần nhận diện.
  var FIELDS = ["Từ", "Loại từ", "Phiên âm", "Nghĩa", "Câu ví dụ", "Dịch câu"];

  // Tên hiển thị cho từng field (có thể đổi tùy ý)
  var LABELS = {
    "Từ": "Từ vựng",
    "Loại từ": "Loại từ",
    "Phiên âm": "Phiên âm",
    "Nghĩa": "Nghĩa",
    "Câu ví dụ": "Câu ví dụ",
    "Dịch câu": "Dịch câu"
  };

  function buildRegex() {
    var escaped = FIELDS.map(function (f) {
      return f.replace(/ /g, "\\s+");
    });
    // group các nhãn, theo sau bởi dấu ":" và khoảng trắng
    return new RegExp("(" + escaped.join("|") + ")\\s*:\\s*", "g");
  }

  function parseEntry(text) {
    var re = buildRegex();
    var parts = text.split(re).filter(function (s) {
      return s !== undefined && s !== "";
    });
    // parts xen kẽ: [label, value, label, value, ...]
    var data = {};
    for (var i = 0; i < parts.length; i += 2) {
      var label = parts[i];
      var value = parts[i + 1] ? parts[i + 1].trim() : "";
      if (FIELDS.indexOf(label) !== -1) {
        data[label] = value;
      }
    }
    return data;
  }

  function makeHeaderRow() {
    var tr = document.createElement("tr");
    FIELDS.forEach(function (field) {
      var th = document.createElement("th");
      th.textContent = LABELS[field] || field;
      tr.appendChild(th);
    });
    return tr;
  }

  function makeDataRow(data) {
    var tr = document.createElement("tr");
    FIELDS.forEach(function (field) {
      var td = document.createElement("td");
      td.textContent = data[field] || "";
      tr.appendChild(td);
    });
    return tr;
  }

  function run() {
    // Vùng nội dung chính của theme sphinx_rtd_theme
    var container =
      document.querySelector("div[role='main']") ||
      document.querySelector(".rst-content") ||
      document.querySelector(".document") ||
      document.body;

    var paragraphs = container.querySelectorAll("p");
    var entries = []; // {data, firstParagraph}

    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();
      if (!/^Từ\s*:/.test(text)) return;

      var data = parseEntry(text);
      if (!data["Từ"]) return; // an toàn: không parse được thì bỏ qua, giữ nguyên đoạn văn gốc

      entries.push({ data: data, node: p });
    });

    if (entries.length === 0) return;

    // Dựng 1 bảng duy nhất, chèn vào vị trí của đoạn văn đầu tiên
    var table = document.createElement("table");
    table.className = "vocab-auto-table";

    var thead = document.createElement("thead");
    thead.appendChild(makeHeaderRow());
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    entries.forEach(function (entry) {
      tbody.appendChild(makeDataRow(entry.data));
    });
    table.appendChild(tbody);

    var wrapper = document.createElement("div");
    wrapper.className = "vocab-auto-entry";
    wrapper.appendChild(table);

    entries[0].node.replaceWith(wrapper);
    // Xóa các đoạn văn gốc còn lại (đã gộp vào bảng)
    for (var i = 1; i < entries.length; i++) {
      entries[i].node.remove();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();