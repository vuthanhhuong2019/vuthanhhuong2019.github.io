// Bài 1. Viết 1 function tính bình phương của 1 số.

Tham số truyền vào là 1 số.
Kết quả là bình phương của số đó.
- Bài 2. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

Tham số truyền vào là 1 số nguyên dương.
Kết quả là thế kỷ của năm. Ví dụ 2019 => Kết quả là 21.
Gợi ý: Sử dụng các phương thức của object Math để làm tròn, bao gồm: Math.floor, Math.ceil và Math.round.
- Bài 3. Cho 1 chuỗi dài hơn 30 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.

Tham số truyền vào là 1 chuỗi dài hơn 30 ký tự.
Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.
- Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.

Tham số truyền vào là 1 chuỗi.
Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "techMaster" sẽ được convert thành "Techmaster".
- Bài 5. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.

Tham số truyền vào là 1 mảng các số.
Kết quả là số nhỏ nhất trong mảng.
Gợi ý: có thể dùng phương thức sort() hoặc object Math, chú ý khi sort số khác với chữ.
- Bài 6. Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.

Tham số truyền vào là 1 mảng gồm tên của 5 người.
Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái (tiếng Anh), mỗi người trên 1 dòng.
Gợi ý: dùng phương thức join() để biến 1 mảng thành 1 chuỗi và chèn thêm ký tự <br> để hiển thị xuống dòng trong HTML.
 

Yêu cầu

- Nộp bài tập lên http://codepen.io/​. Chú ý viết vào phần Javascript, mỗi bài là một function (chỉ cần viết function, trong một function có thể gọi đến 1 function khác).

- Cách trình bày (chú ý code rõ ràng, có format code và comment đầy đủ): 

// Bài 1: Nội dung đề bài của bài 1
function bai1(number) {
    return number;
}

// Bài 2: Nội dung đề bài của bài 2
function bai2(a, b, c) {
    // Code xử lý bài 2
}
- Với bài nào yêu cầu in ra màn hình kèm style thì dùng document.write() để in được HTML (có thể dùng inline style).

- Để trực quan hơn, phần truyền biến thay vì hard code (nhập sẵn giá trị), thì có thể cho người dùng nhập giá trị qua hộp thoại prompt (không khuyến khích vì code phức tạp).