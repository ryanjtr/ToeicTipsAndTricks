Truy ở link này https://learn.mochidemy.com/learn/10 và cho tôi thông tin nội dung các từ vựng






Thursday 7:18 AM






Worked for 1m 6s


Mình sẽ mở trang đó trước để xem nội dung có truy cập công khai được không; nếu trang cần đăng nhập hoặc render động, mình sẽ nói rõ phần nào lấy được.




Searched the web for https://learn.mochidemy.com/learn/10



Trang công khai đang trả về danh sách bài/chủ đề của khóa “1000 từ vựng TOEIC thông dụng theo chủ đề”. Mình đang kiểm tra thêm xem trong HTML có dữ liệu từng flashcard/từ cụ thể hay chỉ có mục lục bài học.




Mình thấy dữ liệu trang có mã khóa NEW TOEIC, mô tả “Hơn 1000 từ TOEIC”, gồm 90 bài. Trang mục lục không nhúng trực tiếp toàn bộ flashcard, nhưng nó có nhắc tới gói dữ liệu khóa học, nên mình thử kiểm tra nguồn đó để xem có thể lấy danh sách từ đầy đủ không.




Gói zip không nằm ở đường dẫn ảnh hiển thị nên lần đầu trả 404. Mình chuyển sang đọc mã frontend để tìm endpoint/API thật mà trang dùng khi bấm vào từng bài học.




Searched the web for https://learn.mochidemy.com/_next/static/chunks/7167.e2cc69938d4c8040.js






Mình truy cập được link: https://learn.mochidemy.com/learn/10
Đây là khóa NEW TOEIC - 1000 từ vựng TOEIC thông dụng theo chủ đề. Trang công khai hiện chỉ hiển thị mục lục 90 bài học/chủ đề, chưa hiển thị danh sách từng từ vựng cụ thể, phiên âm, nghĩa và ví dụ nếu chưa đăng nhập. Nút từng bài học trên trang mở luồng học/đăng nhập, nên mình chưa lấy được toàn bộ flashcard từ vựng bên trong.
Nội dung khóa gồm các nhóm chủ đề chính:
Kinh tế, thương mại, kế hoạch kinh doanh
Marketing, quảng cáo, đàm phán
Hợp đồng, bán hàng, sản xuất
Tài chính, ngân hàng, đầu tư, kế toán, thuế
Hóa đơn, chi phí, tổ chức, sản phẩm
Vận hành, công nghiệp, xây dựng
Văn phòng, quản trị, hội họp, công nghệ văn phòng
Giao tiếp, thư tín, từ thông dụng, từ nhiều nghĩa
Đặt hàng, vận chuyển, mua sắm, chăm sóc khách hàng
Bảo hành, lưu kho
Tuyển dụng, đào tạo, lương thưởng, thăng tiến
Nơi làm việc, sự nghiệp, xã hội, vấn đề xã hội
Môi trường, hàng không, giao thông, khoa học, giáo dục
Nông nghiệp, an ninh, nghệ thuật, bảo tàng, phim ảnh, âm nhạc
Giải trí, sự kiện, truyền thông, du lịch, khách sạn
Hộ gia đình, nấu ăn, nhà hàng
Y tế, bệnh viện, phòng khám, hiệu thuốc, bảo hiểm
Cụm từ thông dụng và từ nối trong câu
Trang cũng mô tả khóa có flashcard kèm hình ảnh minh họa, phát âm, ví dụ cụ thể và ôn tập lặp lại ngắt quãng. Nguồn: trang MochiDemy khóa NEW TOEIC hiển thị danh sách bài học và phần mô tả cách học ().


Thursday 7:19 AM








Truy kĩ hơn đi nó phải hiển thị được nội dung flash card ở chỗ nào chứ






Thursday 7:20 AM






Đúng, khả năng cao dữ liệu flashcard nằm ở API/app bundle chứ không hiện ngay trong HTML mục lục. Mình sẽ đào theo hướng “khi bấm học bài thì frontend gọi gì” và kiểm tra cả các gói zip/static data liên quan.




Có một điểm quan trọng: trang bạn gửi là bản SEO /learn/10; trong manifest còn có route app thật /learn/[courseId] với nhiều chunk hơn. Mình đang tải đúng bundle của route đó để soi endpoint flashcard, vì route SEO chỉ gắn sự kiện “bấm bài thì hỏi đăng nhập”.




Aha, route app thật có JSON riêng _next/data/.../learn/10.json trả về pageProps. Mình vừa thấy ở đó có danh sách lesson ID, còn bây giờ đang lần theo các action Redux/API như getCourseDetail để tìm dữ liệu card theo lesson.




Kết quả xác nhận JSON công khai chỉ có lessons, không có words/cards. Phần còn lại đang nằm trong bundle lớn của app, nên mình sẽ tải các JS chunk vào thư mục tạm để rg chính xác thay vì đọc output khổng lồ trên màn hình.







Mình đã có 90 chunk cục bộ để tìm. Bây giờ mình lọc theo các chuỗi như lessonId, getLesson, learnModal, words, và domain API mochien... để tách đúng endpoint thay vì đoán.


Thursday 7:21 AM








Tiếp tục  đi






Thursday 7:24 AM






Worked for 1m 39s



Đúng rồi, nó có flashcard thật. Mình tìm ra chỗ dữ liệu nằm ở API app, không nằm trực tiếp trong HTML SEO.
Nguồn trang: https://learn.mochidemy.com/learn/10
API flashcard dùng bởi frontend: https://mochien-server-release.mochidemy.com/api/v5.0/lesson/words?lesson_id=423&course_status=0
Khóa NEW TOEIC có:
90 bài học
1012 flashcard/từ vựng
Mỗi flashcard có các trường: content, position, phonetic, trans, sentence1, vi_sentence1, picture, audio, lesson_id, course_id