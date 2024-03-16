/*alert("Hello world!");
let thongbao= confirm("Are you sure you want to open");
if(thongbao==true){
    window.location="./accessors.html";
}*/
//lay ra mot phan tu HTML t
document.getElementById("hello").innerHTML = "Hello world!";
//bien
let x='hh';
let y='hhhh';
let k=x;
x=y;
y=k;
console.log(typeof x);
let chuoi= String(9);
console.log(typeof chuoi);
let so = Number('mychang');
let tr =Boolean(so);
console.log(typeof tr);

/*
const name = prompt("tieu de:", "Gia tri ten mac dinh");
alert(name);// nhan gia tri vua nhap
const messag =prompt("hihi","mychang");
if(messag==="mychang1"){
    alert(messag+" is my favorite.");
}else{
    window.location="./accessors.html";
}*/
/*Sử dụng hàm prompt, hiển thị nội dung yêu cầu người dùng nhập vào một số nguyên dương chẵn.

Nếu người dùng nhập vào đúng số chẵn thì hiển thị Bạn đã nhập đúng!. Ngược lại, hiển thị Bạn đã nhập sai!.

Giả sử, người dùng luôn nhập vào số nguyên dương
let nhapSo = prompt('Nhap so nguyen duong chan');
nhapSo = Number(nhapSo);
console.log(typeof nhapSo );

    if(nhapSo % 2 === 0 && nhapSo > 0 && typeof nhapSo === "number") {
        alert('Ban da nhap dung');
    }else{
        alert('Ban da nhap sai');
    
    }*/
/*Sử dụng console.log để in ra hình tam giác như sau:
#
##
###
####
#####
######
#######
let kq='';
var soLuong=7;
for(let i=0; i< soLuong; i++){
    kq +='*';
    console.log(kq);
}
*/ 

/*Sử dụng prompt để yêu cầu người dùng nhập vào một số.

Nếu người dùng nhập vào không phải là số thì hiển thị ra thông báo: "Bạn nhập vào không phải là số".
Nếu người dùng nhập vào là số thì hiển thị ra thông báo: "Số bạn nhập vào quá nhỏ" khi số đó nhỏ hơn 10, ngược lại thì dừng thông báo. */
/*
while (true) { //dong lap se thuc hien mai mai cho den khi dk dung thoa
    const input = prompt("Enter a number:");
    const number = Number(input);
  
    if (isNaN(number)) {
      alert("It's not a number.");
    } else if (number < 10) {
      alert("It's too small.");
    } else {
      break;
    }
  }*/
/*Sử dụng console.log để in ra hình bàn cờ vua kích thước (8 x 8) như sau: 
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_# 
for (let i = 0; i < 8; i++) { // Duyệt qua từng hàng
    let row = ''; // Chuỗi để lưu trữ mỗi hàng
    for (let j = 0; j < 8; j++) { // Duyệt qua từng ô trong hàng
      if ((i + j) % 2 === 0) { // Nếu tổng của chỉ số hàng và chỉ số cột là chẵn
        row += '#'; // Thêm ký tự '#' vào chuỗi hàng
      } else {
        row += '_'; // Thêm ký tự '_' vào chuỗi hàng
      }
    }
  
    console.log(row); // In ra mỗi hàng
  }
*/
/* 
h=3;
* * * * *
* * * * *
* * * * *
 
const h = 3;
let rectangle = '';

for (let i = 0; i < h; i++) {
    for (let j = 0; j < 5; j++) {
        rectangle += '* ';
    }
    rectangle += '\n'; // Thêm dấu xuống dòng sau mỗi hàng
}

console.log(rectangle);
/*
/*Yêu cầu người dùng nhập vào một số.

Nếu người dùng nhập vào một số dương thì hiển thị ra thông báo xem số đó có phải số nguyên tố hay không.

checkNuyenTo = (a) =>{
    if(a < 2){
        return false;
    }else{
        for(let i = 2; i <= Math.sqrt(a); i++){
            if(a % i === 0){
                return false;
            }
        }
        return true;
    }
}


let nhapDi = prompt('Nhap vo so');
nhapDi = parseInt(nhapDi);
console.log(typeof nhapDi)

if(checkNuyenTo(nhapDi)){
    console.log("la so nguyen to")
}else{
    console.log("khong la nguyen to")
} */
function ktNguyenTo(nhapSo) {
    var check = true;
    if (nhapSo < 2) {
        check = false;
    } else if (nhapSo % 2 == 0) {
        check = false;
    } else if (nhapSo == 2) {
        check = true;
    } else {
        for (let i = 3; i < Math.sqrt(nhapSo); i += 2) {
            if (nhapSo % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (ktNguyenTo(i)) {
        sum += i;
    }
}

console.log("Tổng các số nguyên tố từ 1 đến 100 là: " + sum);


