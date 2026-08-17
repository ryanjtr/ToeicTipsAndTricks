# Prompt Template: Crawl từ vựng khóa học → File .rst

Dùng lại prompt này mỗi lần cần lấy từ vựng từ 1 link khóa học mới. Chỉ cần thay `{LINK}` và `{TÊN_KHÓA_HỌC}`  va `{THU_MUC_LUU_TU_VUNG}`(và điều chỉnh đường dẫn nếu cần).

---

## PROMPT

```
Truy cập link khóa học: {LINK}

YÊU CẦU:
1. Trang công khai (SEO page) thường chỉ hiển thị mục lục bài học, KHÔNG hiển thị
   nội dung flashcard/từ vựng nếu chưa đăng nhập. Đừng dừng lại ở đó — hãy đào sâu:
   - Tìm route app thật (VD: /learn/[courseId]) thay vì chỉ route SEO.
   - Tìm file JSON dạng _next/data/.../{id}.json để lấy danh sách lesson_id.
   - Tải các JS chunk của app (nếu cần, lưu ra thư mục tạm rồi rg/grep) để tìm
     endpoint API thật sự trả về nội dung flashcard (tìm các từ khóa như:
     lessonId, getLesson, words, learnModal, tên domain API riêng của server).
   - Endpoint flashcard thường dạng: {domain-api}/api/.../lesson/words?lesson_id=...
   - Với mỗi lesson_id, gọi API để lấy toàn bộ flashcard.

2. Mỗi flashcard cần lấy đủ các trường: từ (content), loại từ (position),
   phiên âm (phonetic), nghĩa (trans), câu ví dụ (sentence1), dịch câu ví dụ
   (vi_sentence1). KHÔNG cần lấy audio, không cần lấy ảnh minh họa.

3. Lấy hết toàn bộ chủ đề / bài học của khóa (liệt kê rõ số bài, số từ mỗi bài,
   tổng số từ toàn khóa để tôi đối chiếu).

4. Lưu kết quả vào folder: docs/source/Contents/VocabToeic/
   (nếu là khóa khác, đổi tên folder phù hợp, VD: VocabTOEIC_{TÊN_KHÓA_HỌC}/)

5. Mỗi chủ đề/bài học lưu thành 1 file .rst riêng, đặt tên dạng:
   {số_thứ_tự}_{tên_chủ_đề_không_dấu_viết_thường}.rst
   (VD: 01_economics.rst, 02_commerce_p1.rst)

6. Format mỗi từ vựng trong file .rst theo đúng cấu trúc sau (không thay đổi
   thứ tự, không thêm/bớt trường, không có audio):

   Từ: project
   Loại từ: n
   Phiên âm: /ˈprɑːdʒekt/
   Nghĩa: Dự án, đề tài
   Câu ví dụ: She presented her research project at the science fair.
   Dịch câu: Cô ấy đã trình bày đề tài nghiên cứu của mình tại hội chợ khoa học.

7. Sau khi xong, báo cáo lại: tổng số file đã tạo, tổng số từ đã lưu, xác nhận
   không có trường audio nào bị lưu sót, và đường dẫn thư mục kết quả.
```

Format file .rst co the tham khao o file "E:\ProjectAI\WEB\ToeicTipsAndTricks\docs\source\Contents\Toeic\VocabWeb\01_economics.rst"
---

## Checklist Requirement (để tự kiểm tra kết quả)

- [ ] Đã tìm ra API endpoint thật (không chỉ dừng ở trang SEO)
- [ ] Lấy đủ tất cả bài học / chủ đề của khóa
- [ ] Mỗi bài học = 1 file `.rst` riêng, đặt đúng thư mục
- [ ] Đúng 6 trường: Từ, Loại từ, Phiên âm, Nghĩa, Câu ví dụ, Dịch câu
- [ ] Không có audio, không có ảnh
- [ ] Có báo cáo tổng kết: số file, tổng số từ

## Ghi chú
- Nếu trang dùng framework khác (không phải Next.js `_next/data`), yêu cầu 
  tự tìm cơ chế tương đương (network tab / bundle JS / GraphQL endpoint...).
- Có thể đổi định dạng đầu ra (.rst → .md) bằng cách sửa dòng số 5 và 6 trong prompt.