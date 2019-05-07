//Bài 1: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng./
function baiMot(arr){
  let newArr=[];
  newArr = arr.sort(function(a,b){
    return b-a
  });
  return newArr[1];
}

//Bài 2: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.//
function baiHai(arr){
  let newArr = [];
  newArr = arr.sort(function(a, b){return b.length - a.length});
  return newArr[0];
}

//Bài 3: Viết hàm có 2 tham số là 2 chuỗi str và target, dùng để kiểm tra chuỗi str có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.//

function baiBa(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

//Bài 4: Cho 1 mảng bất kỳ. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không.Kết quả trả về true hoặc false.//

// Bài 5: Viết hàm truyền vào 1 chuỗi là tên thẻ HTML, kiểm tra xem trong file HTML có bao nhiêu thẻ đó. Kết quả trả về là số lượng thẻ (không bao gồm thẻ đóng), nếu không có trả về 0.// 
function bai5cuabManh(tagName) {
    let nodeList = document.getElementsByTagName(tagName);
    return nodeList.length;
}
console.log("Bài 5:");
console.log(bai5("p"));
console.log(bai5("div"));