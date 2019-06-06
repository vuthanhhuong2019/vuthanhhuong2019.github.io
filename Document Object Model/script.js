
/*Tạo 1 trang HTML với nội dung là 3 đoạn văn. Hãy viết các function có tác dụng như sau:

1.function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.*/

function changeColor() {
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
    p1.style.color = "blue";
    p2.style.color = "yellow";
    p3.style.color = "red";
}

/*2.function changeBgColor(color): Thay đổi màu nền của trang thành màu color.*/

function changeBgColor(color) {
    all.style.backgroundColor = color;
}

changeBgColor("lightblue");


/*3. function copyContent(paragraph1, paragraph2): 
Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 
(tham số truyền vào có thể là id của 2 đoạn văn).*/
function copyContent(paragraph1, paragraph2) {
    let h1 = document.getElementById(paragraph1);
    let h2 = document.getElementById(paragraph2);
    h1.innerHTML = h2.innerHTML;
}


/*4. function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).*/
function changeFontSize(x){
    let elements = document.getElementsById("h1");
 
 }
 changeFontSize(15);
 
 function changeFontSize(x) {
    document.body.style.fontSize = x;
  }
/*5. function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền 
vào có thể là id đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (
Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle)..*/
function increaseFontSize(paragraph) {
    
}

increaseFontSize("h1");

/*6. function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (paragraph, 
tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước 
giảm xuống không vượt quá 10 pixels..*/

function decreaseFontSize(paragraph) {
    let h1 = document.getElementById(paragraph);
 
}

decreaseFontSize("h2");


