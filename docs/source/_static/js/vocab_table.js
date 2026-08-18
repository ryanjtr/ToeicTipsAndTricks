/**
 * vocab_table.js
 * Tự động chuyển các đoạn văn dạng:
 *   Từ: ... Loại từ: ... Phiên âm: ... Nghĩa: ... Câu ví dụ: ... Dịch câu: ...
 * thành bảng HTML, ngay trên trình duyệt, không cần sửa file .rst gốc.
 *
 * Ngoài ra, script sẽ tự động chèn 1 đoạn disclaimer ở đầu trang
 * (chỉ 1 lần/trang, chỉ khi trang có ít nhất 1 bảng từ vựng được nhận diện).
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

  // Nội dung disclaimer, chèn 1 lần ở đầu mỗi trang có bảng từ vựng.
  // Có 2 phiên bản ngôn ngữ, người dùng chuyển qua lại bằng tab.
  var DISCLAIMER_TEXT_EN =
    "The vocabulary on this page was compiled by me based on personal " +
    "learning and exam-preparation experience, and accuracy is not " +
    "guaranteed. This site is for personal/educational use only and is " +
    "not intended for commercial purposes. I am not responsible for any " +
    "consequences arising from the use of this content.";

  var DISCLAIMER_TEXT_VI =
    "Từ vựng trên trang này được mình tự tích lũy trong quá trình học và " +
    "ôn thi, không đảm bảo chính xác tuyệt đối. Trang chỉ phục vụ mục " +
    "đích cá nhân/học tập, không dùng cho mục đích thương mại. Mình " +
    "không chịu trách nhiệm cho bất kỳ hậu quả nào phát sinh từ việc sử " +
    "dụng nội dung này.";

  var DISCLAIMER_CSS_ID = "vocab-auto-disclaimer-style";
  var DISCLAIMER_CSS =
    ".vocab-auto-disclaimer{border-radius:4px;overflow:hidden;margin:0 0 24px 0;" +
    "font-family:inherit;box-shadow:0 1px 3px rgba(0,0,0,.3);}" +
    ".vocab-auto-disclaimer .vad-header{display:flex;align-items:center;" +
    "justify-content:space-between;gap:12px;background:#a34d0a;color:#fff;" +
    "padding:10px 16px;font-weight:700;}" +
    ".vocab-auto-disclaimer .vad-title{display:flex;align-items:center;gap:8px;}" +
    ".vocab-auto-disclaimer .vad-title .vad-icon{display:inline-flex;" +
    "align-items:center;justify-content:center;width:18px;height:18px;" +
    "border-radius:50%;background:#fff;color:#a34d0a;font-size:13px;" +
    "font-weight:900;line-height:1;}" +
    ".vocab-auto-disclaimer .vad-tabs{display:flex;gap:6px;}" +
    ".vocab-auto-disclaimer .vad-tab{cursor:pointer;border:1px solid rgba(255,255,255,.6);" +
    "background:transparent;color:#fff;padding:3px 10px;border-radius:3px;" +
    "font-size:12px;font-weight:600;line-height:1.4;}" +
    ".vocab-auto-disclaimer .vad-tab.active{background:#fff;color:#a34d0a;" +
    "border-color:#fff;}" +
    ".vocab-auto-disclaimer .vad-body{background:#5c4a10;color:#f0e6cf;" +
    "padding:14px 16px;font-size:14px;line-height:1.6;}" +
    ".vocab-auto-disclaimer .vad-body p{margin:0;display:none;}" +
    ".vocab-auto-disclaimer .vad-body p.active{display:block;}";

  function ensureDisclaimerCss() {
    if (document.getElementById(DISCLAIMER_CSS_ID)) return;
    var style = document.createElement("style");
    style.id = DISCLAIMER_CSS_ID;
    style.textContent = DISCLAIMER_CSS;
    document.head.appendChild(style);
  }

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

  function makeDisclaimer() {
    ensureDisclaimerCss();

    var wrap = document.createElement("div");
    wrap.className = "vocab-auto-disclaimer";

    // Header: icon + "Disclaimer" + tabs EN / VI
    var header = document.createElement("div");
    header.className = "vad-header";

    var title = document.createElement("div");
    title.className = "vad-title";
    var icon = document.createElement("span");
    icon.className = "vad-icon";
    icon.textContent = "!";
    var titleText = document.createElement("span");
    titleText.textContent = "Disclaimer";
    title.appendChild(icon);
    title.appendChild(titleText);

    var tabs = document.createElement("div");
    tabs.className = "vad-tabs";
    var tabEn = document.createElement("button");
    tabEn.type = "button";
    tabEn.className = "vad-tab active";
    tabEn.textContent = "EN";
    tabEn.setAttribute("data-lang", "en");
    var tabVi = document.createElement("button");
    tabVi.type = "button";
    tabVi.className = "vad-tab";
    tabVi.textContent = "VI";
    tabVi.setAttribute("data-lang", "vi");
    tabs.appendChild(tabEn);
    tabs.appendChild(tabVi);

    header.appendChild(title);
    header.appendChild(tabs);

    // Body: 2 đoạn văn, chỉ hiện đoạn tương ứng ngôn ngữ đang chọn
    var body = document.createElement("div");
    body.className = "vad-body";

    var pEn = document.createElement("p");
    pEn.className = "active";
    pEn.setAttribute("data-lang", "en");
    pEn.textContent = DISCLAIMER_TEXT_EN;

    var pVi = document.createElement("p");
    pVi.setAttribute("data-lang", "vi");
    pVi.textContent = DISCLAIMER_TEXT_VI;

    body.appendChild(pEn);
    body.appendChild(pVi);

    wrap.appendChild(header);
    wrap.appendChild(body);

    function switchLang(lang) {
      [tabEn, tabVi].forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      });
      [pEn, pVi].forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-lang") === lang);
      });
    }

    tabEn.addEventListener("click", function () {
      switchLang("en");
    });
    tabVi.addEventListener("click", function () {
      switchLang("vi");
    });

    return wrap;
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

    // Chèn disclaimer 1 lần ở đầu container, chỉ khi trang có bảng từ vựng.
    // Tránh chèn trùng nếu run() được gọi lại (ví dụ do live reload).
    if (!container.querySelector(".vocab-auto-disclaimer")) {
      container.insertBefore(makeDisclaimer(), container.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();