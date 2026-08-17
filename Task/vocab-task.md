Tôi muốn cập nhật **Câu ví dụ** và **Dịch câu** cho TOÀN BỘ từ vựng trong các file RST tại:

`{ADD YOUR PATH HERE}`

## Mục tiêu

Với mỗi từ vựng, hãy tự tư duy và viết **1 câu ví dụ mới**.

Câu ví dụ phải đồng thời đáp ứng 2 yêu cầu:

1. Có ngữ cảnh tự nhiên, mang thiên hướng **TOEIC**.
2. Phù hợp với **chủ đề chính của Lesson chứa từ đó**.

### Xác định chủ đề của từng file

Các file là file `.rst`.

**Dòng đầu tiên của mỗi file là tên/chủ đề của Lesson.**

Ví dụ:

```rst
Lesson 01 - Economics
---------------------
...
```

Trong trường hợp này, chủ đề chính của file là:

`Economics`

Hãy đọc dòng đầu tiên của **từng file** để xác định chủ đề trước khi viết câu.

Ví dụ:

- `Lesson 01 - Economics` → ưu tiên economics, business, finance, markets...
- `Lesson 02 - Travel` → ưu tiên travel, airport, hotel, transportation...
- `Lesson 03 - Employment` → ưu tiên hiring, recruitment, interviews, employees...
- `Lesson 04 - Marketing` → ưu tiên advertising, products, customers, sales...

Không được giả định tất cả các file có cùng chủ đề.

## Ví dụ

Nếu file bắt đầu bằng:

`Lesson 01 - Economics`

và có từ:

Từ: project
Loại từ: n
Phiên âm: /ˈprɑːdʒekt/
Nghĩa: Dự án, đề tài

Không chỉ viết một câu TOEIC chung chung như:

> She presented her project at the meeting.

Mà nên ưu tiên một câu vừa có tính TOEIC vừa liên quan đến chủ đề Economics, ví dụ:

> The research team launched a project to examine changes in consumer spending.

Dịch:

> Nhóm nghiên cứu đã triển khai một dự án để phân tích những thay đổi trong chi tiêu của người tiêu dùng.

## Quy tắc viết câu

- Chỉ sửa 2 field:
  - `Câu ví dụ`
  - `Dịch câu`

- Không thay đổi:
  - từ vựng
  - loại từ
  - phiên âm
  - nghĩa
  - thứ tự dữ liệu
  - cấu trúc file
  - format RST hiện tại

- Mỗi từ phải có **1 câu ví dụ riêng**.
- Không dùng lại cùng một câu cho nhiều từ.
- Câu phải sử dụng đúng từ vựng và đúng từ loại.
- Câu phải tự nhiên, giống ngữ cảnh có thể xuất hiện trong TOEIC.
- **Chủ đề của Lesson là context chính**, không phải chỉ là một từ khóa bắt buộc phải nhét vào câu.
- Ưu tiên các ngữ cảnh TOEIC phù hợp với chủ đề, chẳng hạn:
  - workplace
  - office
  - company
  - meeting
  - email
  - business
  - customer service
  - travel
  - transportation
  - hotel
  - schedule
  - hiring
  - finance
  - sales
  - marketing
  - manufacturing
  - training
  - conference

- Nếu chủ đề Lesson cụ thể hơn, hãy ưu tiên vocabulary/context của chủ đề đó.
- Không cố nhồi chủ đề vào câu nếu làm câu mất tự nhiên.
- Không cần tất cả các câu trong cùng Lesson phải có cùng một bối cảnh hoặc cùng một nhân vật. Chỉ cần chúng **cùng xoay quanh chủ đề chính của Lesson**.
- Câu không cần quá dài hoặc quá phức tạp. Ưu tiên câu rõ nghĩa, tự nhiên và hữu ích cho người học TOEIC.
- Không viết câu quá “sách vở” hoặc thiếu tự nhiên chỉ để chứa từ vựng.
- Bản dịch tiếng Việt phải tự nhiên, đúng ngữ cảnh và đúng ý câu tiếng Anh.
- Không dịch word-by-word nếu cách dịch đó khiến câu tiếng Việt không tự nhiên.

## Quy trình thực hiện

### Bước 1 – Inspect

Trước tiên, đọc **toàn bộ các file `.rst`** trong:

`@docs/source/Contents/VocabToeic`

Không sửa file ở bước này.

Xác định:

- tổng số file
- tên Lesson/chủ đề của từng file dựa trên dòng đầu tiên
- format vocabulary của từng file
- tổng số vocabulary entries cần xử lý

Nếu format giữa các file có khác nhau, phải hiểu format thực tế trước khi sửa.

### Bước 2 – Phân chia công việc

Sau khi hiểu cấu trúc toàn bộ folder, chia workload thành các nhóm hợp lý.

Có thể sử dụng subagent để xử lý song song nếu số lượng file đủ lớn để việc đó có lợi.

Không cần tạo một subagent cho mỗi file.

Ưu tiên chia thành một số nhóm file cân bằng, ví dụ:

```text
Main Agent
├── Subagent 1 → nhóm file 1
├── Subagent 2 → nhóm file 2
├── Subagent 3 → nhóm file 3
└── Subagent 4 → nhóm file 4
```

Mỗi subagent phải:

1. Đọc dòng đầu tiên của từng file được giao.
2. Xác định chủ đề Lesson.
3. Đọc vocabulary trong file.
4. Viết câu ví dụ dựa trên cả:
   - từ vựng
   - nghĩa/từ loại
   - chủ đề Lesson
   - ngữ cảnh TOEIC

5. Viết bản dịch tiếng Việt tự nhiên.
6. Chỉ sửa `Câu ví dụ` và `Dịch câu`.
7. Không sửa file ngoài phạm vi được giao.

### Bước 3 – Main Agent review

Sau khi tất cả subagent hoàn thành, Main Agent phải đọc lại và kiểm tra **toàn bộ folder**.

Kiểm tra ít nhất:

- Có file nào chưa được xử lý không?
- Có vocabulary entry nào chưa được cập nhật không?
- Câu ví dụ có đúng từ loại không?
- Câu có sử dụng đúng nghĩa của từ không?
- Câu có liên quan đến chủ đề Lesson không?
- Câu có mang thiên hướng TOEIC không?
- Các câu có bị lặp hoặc quá giống nhau không?
- Bản dịch có tự nhiên không?
- Bản dịch có đúng với câu tiếng Anh không?
- Có vô tình sửa vocabulary / meaning / pronunciation / part of speech không?
- RST có còn đúng format không?

Nếu phát hiện lỗi, tự sửa luôn.

## Quy tắc bảo toàn file

**Tuyệt đối không:**

- đổi tên file
- đổi tên thư mục
- đổi cấu trúc thư mục
- chuyển RST sang format khác
- thay đổi vocabulary
- thay đổi part of speech
- thay đổi pronunciation
- thay đổi meaning
- thay đổi thứ tự các entry
- xóa entry
- thêm entry mới

Chỉ được thay đổi:

- `Câu ví dụ`
- `Dịch câu`

## Quy tắc tự động hoàn tất

Không hỏi tôi xác nhận giữa chừng.

Không dừng lại sau khi lập kế hoạch.

Không chỉ đưa ra danh sách câu cần sửa.

Hãy **thực sự chỉnh sửa các file** và hoàn thành toàn bộ workflow từ A → Z.

Nếu gặp một entry bất thường, hãy tự xử lý dựa trên context của file và chỉ báo cáo những trường hợp thực sự không thể xác định.

Sau khi hoàn tất, báo cáo ngắn gọn:

- Số file đã xử lý
- Tổng số vocabulary entries đã xử lý
- Số subagent đã sử dụng
- Các Lesson đã xử lý
- Các lỗi/bất thường còn lại (nếu có)
- Kết quả kiểm tra cuối cùng
