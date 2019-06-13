/*Bài tập 1
● Viết hàm tính lập phương 1 số.*/

function tinhLapPhuong(number){
    return number*number*number;
}
tinhLapPhuong(3);

/*● Viết hàm tính hiệu 2 số.*/

function tinhHieuHaiSo(a,b){
    return a-b ;
}
tinhHieuHaiSo(90,91);

/*● Viết hàm tính tích 2 số.*/

function tinhTichHaiSo(a,b){
    return a*b ;
}
tinhTichHaiSo (8,3);

/*● Viết hàm tính thương 2 số.*/

function tinhThuongHaiSo(a,b){
    return a/b ;
}
tinhThuongHaiSo(31,3);

/*● Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F. Ví dụ:
convertToF(-30) => Kết quả trả về là -22 convertToF(-10) => Kết quả trả về là 14*/

function convertCtoF (number){
    return number*9/5+32;
}
convertCtoF (0);


/*● Viết hàm chuyển đổi nhiệt độ từ độ F sang độ C*/

function convertFtoC (number){
    return (number-32)*5/9;
}
convertFtoC(32);

/*Bài tập 2
● Viết hàm tính căn bậc 2 của 1 số.*/

function tinhCanBacHai(number){
    return Math.sqrt(number);
}
tinhCanBacHai(125);

/*● Viết hàm tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.*/

function tinhTheKyCuaMotNam (number){
    return Math.floor(number/100) +1 ;
}
tinhTheKyCuaMotNam(2019);

/*● Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm
ở cuối chuỗi. Ví dụ:shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'*/

function shortenString (string){
    let tamKyTuDau = string.substr(0,8) ;
    return tamKyTuDau + '...';
}
shortenString('Xin chao cac ban.');

/*● Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. Ví dụ:
capitalizeString('techMaster') => Kết quả trả về là 'Techmaster'*/
function capitalizeString(string){
    let chuDauTien = string.substring(0,1);
    chuDauTien = chuDauTien.toUpperCase();
    chuConLai = string.substring(1).toLowerCase();
    return chuDauTien + chuConLai;
}
capitalizeString('techMaster');

capitalizeString('dang qUaNg hUy')

/*Bài tập 3
● Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
minNumbers([2, 1, 3]) => Kết quả trả về là 1*/

function minNumber(array){
    let arr = [];
    arr = array.sort(function (a,b){
        return a-b;
    });
    return arr[0];
}
minNumber([2,1,3]);


Một số phương thức xử lý mảng hay dùng
● Thêm phần tử vào cuối mảng: .push()
Ví dụ: let arr = [1, 2, 3]; arr.push(7) sẽ làm mảng arr thay đổi thành [1, 2, 3, 7]
● Thêm phần tử vào đầu mảng: .unshift()
● Cắt bỏ phần tử ở đầu mảng: .shift()
Ví dụ: let arr = [1, 2, 3]; arr.shift() sẽ làm mảng arr thay đổi thành [2, 3]
● Cắt bỏ phần tử ở cuối mảng: .pop()

Sắp xếp mảng
● Dùng hàm .sort(), mặc định là sắp xếp chuỗi theo thứ tự bảng chữ cái. Ví dụ
let arr1 = ['Banana', 'Apple', 'Orange']; arr1.sort() sẽ làm arr1 thay đổi thành ['Apple', 'Banana', 'Orange']
let arr2 = [2, 1, 4, 13]; arr2.sort() sẽ làm arr2 thay đổi thành [1, 13, 2, 4]
● Sắp xếp mảng số:
let arr3 = [2, 1, 4, 13]; arr3.sort(function(a, b) { return a - b }); => Sắp xếp tăng dần
let arr4 = [2, 1, 4, 13]; arr4.sort(function(a, b) { return b - a }); => Sắp xếp giảm dần
● Đảo ngược mảng dùng hàm .reverse(), ví dụ:
let arr5 = ['Banana', 'Apple', 'Orange']; arr5.reverse() sẽ làm arr5 thay đổi thành ['Orange', 'Apple', 'Banana']

/*● Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3*/

function max2Numbers (array){
    let arr = [];
    arr = array.sort(function (a,b){
        return b-a;
    });
    return arr[1];
}
max2Numbers([2,1,3,4]);

/*● Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của
bảng chữ cái. Ví dụ:
sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']*/

function sortStudents(array){
    let arr = [];
    arr = arr.sort();
    return arr.sort().reverse();
}
sortStudents(['Nam', 'Hoa', 'Tuấn']);