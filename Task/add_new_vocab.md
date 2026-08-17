Tôi muốn bạn thực hiện toàn bộ workflow A → Z để BỔ SUNG 5 TỪ VỰNG MỚI CHO MỖI LESSON trong các file RST tại:

`{ADD YOUR PATH HERE}`

MỤC TIÊU DUY NHẤT:
- Mỗi Lesson phải được bổ sung ĐÚNG 5 vocabulary mới.
- Mỗi vocabulary mới phải có đầy đủ:
  1. Từ
  2. Loại từ
  3. Phiên âm IPA
  4. Nghĩa tiếng Việt
  5. Câu ví dụ
  6. Dịch câu
- Vocabulary phải phù hợp với CHỦ ĐỀ CHÍNH của Lesson và mang tính hữu ích cho TOEIC.
- Phải sử dụng SUBAGENT để thực hiện.
- Sau khi subagent hoàn thành, MAIN AGENT PHẢI REVIEW TOÀN BỘ kết quả một cách độc lập và nghiêm ngặt.
- Nếu phát hiện bất kỳ lỗi nào, phải tự sửa và review lại.
- Không hỏi tôi xác nhận giữa chừng.

==================================================
1. INSPECT TOÀN BỘ PROJECT TRƯỚC KHI SỬA
==================================================

Trước tiên, hãy đọc toàn bộ các file `.rst` trong:

@docs/source/Contents/VocabToeic

KHÔNG sửa file ở bước inspect.

Với mỗi file, xác định:

- Tên file
- Dòng đầu tiên
- Tên Lesson
- Chủ đề chính của Lesson
- Format vocabulary hiện tại
- Toàn bộ vocabulary hiện có
- Tổng số vocabulary hiện có

Dòng đầu tiên của file là nguồn chính để xác định topic.

Ví dụ:

Lesson 01 - Economics
---------------------

→ Topic chính: Economics

Lesson 02 - Travel
------------------

→ Topic chính: Travel

Không được giả định tất cả Lesson có cùng chủ đề.

Phải đọc topic thực tế của từng file trước khi chọn vocabulary.

==================================================
2. HIỂU FORMAT RST TRƯỚC KHI THÊM
==================================================

Phải kiểm tra format thực tế của các file RST.

Các vocabulary mới PHẢI sử dụng đúng format đang tồn tại trong project.

Không tự tạo format mới.

Không chuyển RST sang Markdown hoặc format khác.

Không thay đổi cấu trúc hiện tại của file.

==================================================
3. CHỌN 5 VOCABULARY MỚI — TOEIC + TOPIC RELEVANCE
==================================================

Mỗi Lesson phải được bổ sung ĐÚNG 5 vocabulary mới.

Đây KHÔNG phải task chọn 5 từ bất kỳ có liên quan đến topic.

Mỗi từ được chọn phải đồng thời đáp ứng 2 tiêu chí quan trọng:

1. LIÊN QUAN CHẶT CHẼ đến chủ đề chính của Lesson.
2. CÓ GIÁ TRỊ CAO TRONG TOEIC, tức là thường xuyên hoặc rất phù hợp với các ngữ cảnh, chủ đề và dạng bài thường gặp trong TOEIC.

ƯU TIÊN:

TOEIC relevance + Topic relevance + Practical usefulness

Không ưu tiên một từ chỉ vì nó nghe "hay", "học thuật" hoặc có vẻ nâng cao.

Nếu một từ liên quan topic nhưng hiếm gặp trong TOEIC, hãy ưu tiên một từ khác có tính ứng dụng TOEIC cao hơn.

--------------------------------------------------
TIÊU CHÍ TOEIC RELEVANCE
--------------------------------------------------

Khi chọn từ, hãy tự đánh giá:

- Từ này có thường xuất hiện trong các chủ đề TOEIC không?
- Từ này có thường xuất hiện trong Part 1–7 hoặc các ngữ cảnh tương tự không?
- Từ này có thường xuất hiện trong workplace/business context không?
- Từ này có xuất hiện trong email, memo, notice, advertisement, announcement, meeting, schedule, invoice, report, application, reservation... không?
- Người học TOEIC có thực sự hưởng lợi khi biết từ này không?

Ưu tiên các từ có tính "core TOEIC vocabulary".

Không chọn từ chỉ vì nó liên quan topic một cách gián tiếp.

--------------------------------------------------
ĐỘ LIÊN QUAN VỚI TOPIC
--------------------------------------------------

Vocabulary phải liên quan CHẶT CHẼ đến chủ đề Lesson.

Ví dụ:

Topic: Economics

ƯU TIÊN:
- inflation
- revenue
- expenditure
- investment
- consumer
- economic growth
- budget
- interest rate
- income
- demand

KHÔNG ƯU TIÊN những từ chỉ liên quan rất xa như:
- laboratory
- sculpture
- wildlife

trừ khi context thực tế của Lesson chứng minh chúng thực sự thuộc topic.

Topic: Travel

ƯU TIÊN:
- itinerary
- reservation
- accommodation
- departure
- arrival
- luggage
- destination
- passenger
- boarding
- cancellation

Topic: Employment

ƯU TIÊN:
- applicant
- candidate
- recruitment
- qualification
- resume
- interview
- salary
- employee
- position
- vacancy

Topic: Marketing

ƯU TIÊN:
- advertisement
- campaign
- promotion
- customer
- consumer
- product
- brand
- sales
- target
- market research

--------------------------------------------------
KHÔNG CHỌN TỪ "HIẾM NHƯNG HAY"
--------------------------------------------------

Nếu có hai lựa chọn:

A. Rất phù hợp với topic nhưng hiếm gặp trong TOEIC.

B. Rất phù hợp với topic và thường xuyên xuất hiện trong TOEIC.

→ LUÔN ưu tiên B.

Mục tiêu là xây dựng vocabulary bank có tính ứng dụng cao cho người học TOEIC, không phải một danh sách từ vựng học thuật chung.

--------------------------------------------------
KHÔNG CHỌN TỪ QUÁ CƠ BẢN NẾU ĐÃ CÓ TỪ TỐT HƠN
--------------------------------------------------

Không ưu tiên những từ quá cơ bản mà người học TOEIC thường đã biết, nếu có một vocabulary TOEIC quan trọng hơn và phù hợp topic hơn.

Ví dụ với Travel:

Không ưu tiên:
- car
- bus
- food
- hotel

nếu vocabulary hiện tại chưa có những từ TOEIC quan trọng như:

- itinerary
- reservation
- departure
- accommodation
- passenger
- destination

Tuy nhiên, không được loại một từ chỉ vì nó "dễ"; hãy xét vocabulary hiện có trong toàn bộ folder trước.

--------------------------------------------------
ƯU TIÊN TỪ THỰC SỰ CÓ GIÁ TRỊ TRONG ĐỀ TOEIC
--------------------------------------------------

Đặc biệt ưu tiên vocabulary thường gặp trong:

- workplace
- office
- employment
- recruitment
- business
- finance
- accounting
- economics
- marketing
- sales
- customer service
- manufacturing
- production
- transportation
- travel
- hotel
- restaurant
- meetings
- conferences
- schedules
- appointments
- emails
- notices
- advertisements
- invoices
- orders
- shipping
- contracts
- reports
- training
- facilities
- technology

Các từ được chọn nên có khả năng xuất hiện tự nhiên trong những ngữ cảnh trên.

--------------------------------------------------
XẾP HẠNG CÁC ỨNG VIÊN TRƯỚC KHI CHỌN
--------------------------------------------------

Trước khi quyết định 5 từ cuối cùng cho mỗi Lesson, hãy tự tạo một danh sách ứng viên lớn hơn và đánh giá chúng theo:

1. Topic relevance
2. TOEIC frequency / likelihood of appearance
3. Practical usefulness
4. Compatibility with existing vocabulary
5. Distinctiveness

Sau đó chọn 5 từ tốt nhất.

Không cần đưa bảng đánh giá này cho tôi.

Đây là bước suy luận nội bộ để đảm bảo 5 từ cuối cùng có chất lượng cao.

--------------------------------------------------
NGUYÊN TẮC CUỐI CÙNG
--------------------------------------------------

Nếu phải lựa chọn giữa:

"một từ rất hay nhưng hiếm gặp"

và

"một từ cực kỳ hữu ích, thường gặp trong TOEIC và phù hợp topic"

→ CHỌN từ thứ hai.

Nếu một từ vừa:

- liên quan chặt chẽ đến Lesson
- thường xuyên xuất hiện trong TOEIC
- hữu ích trong nhiều ngữ cảnh TOEIC
- chưa xuất hiện trong vocabulary bank

→ ưu tiên rất cao.

==================================================
4. QUY TẮC DUPLICATE — CỰC KỲ QUAN TRỌNG
==================================================

TRƯỚC KHI THÊM TỪ, phải kiểm tra vocabulary hiện có trong TOÀN BỘ folder:

@docs/source/Contents/VocabToeic

Không được thêm một từ đã tồn tại ở bất kỳ Lesson nào.

Không chỉ kiểm tra duplicate trong cùng một file.

Không được thêm:

- cùng một headword đã tồn tại
- dạng số nhiều của một từ đã có chỉ để né duplicate
- dạng chia động từ của một từ đã có chỉ để né duplicate
- dạng biến thể từ chỉ khác hình thức nhưng cùng headword
- cùng một từ với part of speech khác chỉ để tạo entry mới

Ví dụ nếu đã có:

Từ: negotiate

Không được thêm:

negotiates
negotiated
negotiating

chỉ để tạo vocabulary mới.

Nếu đã có:

Từ: negotiation

không được xem `negotiations` là từ mới.

Ưu tiên HEADWORD độc lập và thực sự mới.

==================================================
5. MỖI VOCABULARY PHẢI CÓ ĐỦ 6 FIELD
==================================================

Mỗi vocabulary mới bắt buộc phải có:

Từ: ...
Loại từ: ...
Phiên âm: ...
Nghĩa: ...
Câu ví dụ: ...
Dịch câu: ...

Ví dụ:

Từ: project
Loại từ: n
Phiên âm: /ˈprɑːdʒekt/
Nghĩa: Dự án, đề tài
Câu ví dụ: The research team launched a project to examine changes in consumer spending.
Dịch câu: Nhóm nghiên cứu đã triển khai một dự án để phân tích những thay đổi trong chi tiêu của người tiêu dùng.

==================================================
6. QUY TẮC CHỌN LOẠI TỪ
==================================================

Loại từ phải chính xác.

Sử dụng convention hiện tại của project.

Ví dụ:

n
v
adj
adv
prep
conj

Không được đoán part of speech một cách tùy tiện.

Phải đảm bảo câu ví dụ sử dụng đúng part of speech đã khai báo.

==================================================
7. QUY TẮC PHIÊN ÂM
==================================================

Cung cấp IPA chính xác.

Ưu tiên American English vì mục tiêu là TOEIC.

Không tự tạo IPA nếu không chắc chắn.

Nếu từ có nhiều cách phát âm, chọn cách phát âm phù hợp với American English và nhất quán với project.

==================================================
8. QUY TẮC NGHĨA
==================================================

Nghĩa tiếng Việt phải:

- Chính xác.
- Phù hợp với topic.
- Phù hợp với nghĩa được sử dụng trong câu ví dụ.
- Tự nhiên với người học Việt Nam.

Không liệt kê quá nhiều nghĩa không cần thiết.

==================================================
9. QUY TẮC CÂU VÍ DỤ
==================================================

Mỗi vocabulary phải có một câu ví dụ RIÊNG.

Câu phải:

- Sử dụng chính xác vocabulary.
- Sử dụng đúng part of speech.
- Sử dụng đúng nghĩa được cung cấp.
- Tự nhiên.
- Có thiên hướng TOEIC.
- Phù hợp với topic của Lesson.
- Có thể xuất hiện trong workplace/business/travel/finance/marketing/customer service/meeting/email/company... tùy chủ đề.

Không viết câu quá chung chung chỉ để chứa từ.

Không cố nhồi topic vào câu nếu làm câu mất tự nhiên.

Không dùng lại cùng một câu cho nhiều vocabulary.

Không tạo các câu chỉ thay vocabulary bằng một từ khác nhưng giữ nguyên template một cách máy móc.

Ưu tiên câu có context thực tế và hữu ích cho người học TOEIC.

==================================================
10. QUY TẮC DỊCH
==================================================

Dịch câu phải:

- Tự nhiên bằng tiếng Việt.
- Đúng ngữ cảnh.
- Đúng nghĩa của vocabulary.
- Khớp chính xác với câu tiếng Anh.

Không dịch word-by-word nếu làm tiếng Việt không tự nhiên.

==================================================
11. BẢO TOÀN DỮ LIỆU CŨ
==================================================

TUYỆT ĐỐI KHÔNG:

- sửa vocabulary cũ
- sửa part of speech cũ
- sửa pronunciation cũ
- sửa meaning cũ
- sửa example sentence cũ
- sửa translation cũ
- xóa entry cũ
- thay đổi thứ tự entry cũ
- đổi tên file
- đổi tên folder
- thay đổi cấu trúc folder
- thay đổi format RST hiện tại

CHỈ ĐƯỢC PHÉP THÊM 5 ENTRY MỚI CHO MỖI LESSON.

==================================================
12. SUBAGENT WORKFLOW — BẮT BUỘC
==================================================

BẮT BUỘC sử dụng subagent.

Sau khi Main Agent inspect toàn bộ folder, hãy chia các Lesson thành các nhóm cân bằng.

Không cần tạo một subagent cho mỗi file.

Số lượng subagent phải được tự quyết định dựa trên số lượng file thực tế để cân bằng:

- tốc độ
- token cost
- khả năng review
- tránh conflict

Mỗi subagent chỉ được phép sửa các file được giao.

Không để hai subagent cùng sửa một file.

--------------------------------------------------
NHIỆM VỤ CỦA MỖI SUBAGENT
--------------------------------------------------

Với mỗi file được giao:

1. Đọc dòng đầu tiên để xác định topic.
2. Đọc toàn bộ vocabulary hiện có trong file.
3. Kiểm tra vocabulary đó không tồn tại trong toàn bộ folder.
4. Chọn đúng 5 vocabulary mới.
5. Kiểm tra:
   - topic relevance
   - TOEIC relevance
   - part of speech
   - IPA
   - meaning
6. Viết:
   - Từ
   - Loại từ
   - Phiên âm
   - Nghĩa
   - Câu ví dụ
   - Dịch câu
7. Thêm đúng 5 entry vào file.
8. Không sửa bất kỳ entry cũ nào.
9. Không sửa file ngoài phạm vi.

SUBAGENT KHÔNG ĐƯỢC coi "tôi đã thêm 5 từ" là đủ.

Phải tự kiểm tra 5 entry trước khi báo hoàn thành.

==================================================
13. MAIN AGENT REVIEW — BẮT BUỘC VÀ NGHIÊM NGẶT
==================================================

SAU KHI TẤT CẢ SUBAGENT HOÀN THÀNH:

MAIN AGENT PHẢI TỰ ĐỌC LẠI TOÀN BỘ FOLDER.

Không được chỉ dựa vào báo cáo của subagent.

Không được chỉ kiểm tra số lượng file.

Phải thực hiện một REVIEW ĐỘC LẬP.

==================================================
14. REVIEW #1 — STRUCTURE & COUNT
==================================================

Kiểm tra từng Lesson:

- Có đúng 5 entry mới không?
- Có Lesson nào có 4 entry không?
- Có Lesson nào có 6 entry không?
- Tổng số vocabulary mới có đúng bằng:

SỐ LESSON × 5

không?

Nếu sai → tự sửa.

==================================================
15. REVIEW #2 — DUPLICATE
==================================================

Quét TOÀN BỘ vocabulary trong folder.

Kiểm tra:

- duplicate exact word
- duplicate headword
- singular/plural duplicate
- verb form duplicate
- derivative duplicate rõ ràng
- từ đã tồn tại trước khi task chạy nhưng bị thêm lại

Nếu phát hiện duplicate:

- xác định entry mới gây duplicate
- thay entry đó bằng một vocabulary mới phù hợp
- đảm bảo vẫn đủ đúng 5 từ mới cho Lesson
- review lại duplicate toàn folder

==================================================
16. REVIEW #3 — 4 THÔNG TIN BẮT BUỘC
==================================================

Mỗi entry mới phải có đầy đủ:

1. Từ
2. Loại từ
3. Phiên âm
4. Nghĩa

Không được thiếu bất kỳ field nào.

==================================================
17. REVIEW #4 — VOCABULARY QUALITY
==================================================

Với từng từ mới, kiểm tra:

- Có thực sự là vocabulary mới không?
- Có phù hợp topic không?
- Có hữu ích cho TOEIC không?
- Có đúng headword không?
- Có đúng part of speech không?
- IPA có chính xác không?
- Nghĩa có chính xác không?

Nếu từ quá chung chung, quá cơ bản, không liên quan topic hoặc không có giá trị TOEIC → thay bằng từ tốt hơn.

==================================================
18. REVIEW #5 — EXAMPLE SENTENCE
==================================================

Kiểm tra TỪNG câu ví dụ mới:

- Có chứa đúng vocabulary không?
- Có dùng đúng part of speech không?
- Có dùng đúng nghĩa không?
- Có tự nhiên không?
- Có thiên hướng TOEIC không?
- Có phù hợp với topic không?
- Có bị lặp với câu khác không?
- Có quá giống template của câu khác không?
- Có phải câu người bản ngữ thực sự có thể nói/viết không?

Nếu không đạt → tự viết lại.

==================================================
19. REVIEW #6 — VIETNAMESE TRANSLATION
==================================================

Kiểm tra TỪNG bản dịch:

- Có đúng câu tiếng Anh không?
- Có đúng nghĩa vocabulary không?
- Có tự nhiên với người Việt không?
- Có bị dịch word-by-word không?
- Có bỏ sót ý không?

Nếu không đạt → tự sửa.

==================================================
20. REVIEW #7 — FILE INTEGRITY
==================================================

Kiểm tra:

- Không có entry cũ nào bị thay đổi.
- Không có entry cũ nào bị xóa.
- Không có entry mới nào nằm sai format.
- RST syntax vẫn hợp lệ.
- Cấu trúc file vẫn giữ nguyên.
- Chỉ có đúng 5 entry mới được thêm vào mỗi Lesson.

==================================================
21. REVIEW #8 — FINAL FULL AUDIT
==================================================

Sau khi sửa mọi lỗi được phát hiện ở các bước review trên:

Hãy quét lại TOÀN BỘ folder MỘT LẦN CUỐI.

Không được kết thúc ngay sau khi sửa lỗi.

Phải xác nhận lại:

- đúng số Lesson
- đúng 5 từ mới/Lesson
- không duplicate
- đủ 6 field/entry
- đúng topic
- đúng TOEIC context
- example sentence tự nhiên
- translation tự nhiên
- không thay đổi dữ liệu cũ
- RST không bị hỏng

Chỉ kết thúc khi tất cả các kiểm tra đều PASS.

==================================================
22. QUY TẮC TỰ ĐỘNG HOÀN TẤT
==================================================

Không hỏi tôi xác nhận giữa chừng.

Không dừng lại sau khi lập kế hoạch.

Không chỉ đưa ra danh sách vocabulary.

Không chỉ báo cáo những gì cần sửa.

Hãy THỰC SỰ chỉnh sửa các file và hoàn thành toàn bộ workflow từ A → Z.

Nếu gặp một Lesson có format bất thường, tự đọc context và xử lý phù hợp.

Nếu gặp vocabulary không chắc chắn, tự chọn một vocabulary khác rõ ràng hơn thay vì để entry thiếu hoặc sai.

Nếu subagent mắc lỗi, Main Agent phải tự phát hiện và sửa.

Không coi báo cáo "done" của subagent là bằng chứng rằng task đã hoàn thành.

CHỈ kết thúc sau khi MAIN AGENT đã hoàn thành FINAL FULL AUDIT.

==================================================
23. FINAL REPORT
==================================================

Sau khi hoàn tất, chỉ báo cáo ngắn gọn:

- Số file đã xử lý
- Tổng số Lesson đã xử lý
- Tổng số vocabulary mới đã thêm
- Số vocabulary mới trung bình mỗi Lesson
- Số subagent đã sử dụng
- Các Lesson đã xử lý
- Số duplicate phát hiện và đã xử lý
- Số entry phải sửa lại sau review
- Các lỗi/bất thường còn lại
- Kết quả Final Full Audit
add_new_vocab.md
Nếu không còn lỗi, ghi rõ:

FINAL AUDIT: PASS