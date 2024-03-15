
//es6
class User {
    constructor(username, password, email) 
    {
       this.user = username;
       this.pass = password;
       this.mail = email;
    }
    get user_email(){
        return this.mail;
    }
  
}
const person = new User('John', '123456','join@gmail.com');
console.log(person.pass); 


// ES5
function Person(name) {
  this.name = name;
}

//Template literals:
// ES6 
`Hello ${name}!`

// ES5
"Hello " + name + "!"
//Promise
// ES6
// asyncFunction()
//   .then(...)
//   .catch(...)

// ES5 
// Callback hell

// Defining the function:
function sum(num1, num2) {
    return num1 + num2;
  }
console.log(sum(2,3));  
//es6
const es6 = (a,b)=>{
    return a +b;
}
console.log(es6(4,7));
const es62 = (a,b)=>a+b;
console.log(es62(4,7));

//function
function mychang(so1,so2){
    console.log(1,2);
}
mychang();
//ham dat ten 
//ham an danh
//function() { return 'BOOM!'; } là một hàm ẩn danh (anonymous function) (không có tên) và nó được gán cho biến rocketToMars.
const rocketToMars = function() {
    return 'BOOM!';
  }
  console.log(rocketToMars()); // BOOM!
//truyền hàm ẩn danh này làm đối số cho một hàm khác
// function() { return 'BOOM!'; } là một hàm ẩn danh và nó được truyền làm đối số cho hàm executeFunction. 
//Bên trong hàm executeFunction, hàm ẩn danh được gọi bằng cách sử dụng fn() và kết quả được in ra console.
  /*Hàm ẩn danh function() { return 'BOOM!'; } được truyền vào làm đối số cho hàm executeFunction.
Bên trong executeFunction, biến fn được gán bằng hàm ẩn danh đó.
Câu lệnh console.log(fn()); gọi hàm ẩn danh (fn) và in kết quả ra console.
Hàm ẩn danh trả về chuỗi 'BOOM!'.
Chuỗi 'BOOM!' được in ra console bởi console.log.
*/
function executeFunction(fn) {
    console.log(fn());
  }
  
  executeFunction(function() {
    return 'BOOM!';
  });
  // Output: 'BOOM!'

  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  console.log(sayHello('Trang'));
  /*tham số (parameters) là tên biến được khai báo trong định nghĩa hàm để nhận giá trị từ đối số (arguments) khi hàm được gọi. 
  Tham số được sử dụng như biến bên trong thân hàm. 
  Một hàm có thể không có tham số, nhưng khi gọi hàm, bạn vẫn có thể truyền đối số vào (mặc dù chúng sẽ không được sử dụng trong hàm đó)*/

const troi= (a,b)=> (a*b);
console.log(troi(3,5));
  

//FUNCTION HELPER
/*Số 15 ban đầu là giá trị nhiệt độ bằng độ C
Nó được truyền vào hàm getFahrenheit() với vai trò tham số celsius
Sau đó truyền tiếp sang hàm khác dưới dạng tham số number để thực hiện phép tính*/
function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};
  
  getFahrenheit(15); // Returns 59

  console.log(Math.random()); //Điều tuyệt vời về các đối tượng là chúng có các phương thức! Hãy gọi phương thức .random() từ đối tượng Math có sẵn
  //Math.random() tạo ra một số ngẫu nhiên trong khoảng từ 0 đến 1

  /*

  let cauhoi = prompt("Hãy nhập câu hỏi của bạn:"); // Yêu cầu người dùng nhập câu hỏi

if (cauhoi && cauhoi.trim() !== '') { // Kiểm tra xem câu hỏi có được nhập không
  let vanmay = Math.floor(Math.random() * 3) + 1; // Tạo số ngẫu nhiên từ 1 đến 3

  switch (vanmay) {
    case 1:
      console.log('Vận may tốt đẹp đang chờ đợi bạn!');
      break;
    case 2:
      console.log('Một thời cơ mới đang chờ đón bạn ở phía trước.');
      break;
    case 3:
      console.log('Hãy kiên trì và bạn sẽ gặt hái được thành công.');
      break;
  }
} else {
  console.log('Bạn chưa nhập câu hỏi nào!');
}
*/

//
let cauhoi='';
let vanmay= Math.floor(Math.random() * 3) + 1;
if(cauhoi!==''){
  switch (vanmay){
  case 1:
    console.log('giai thuong 1');
    break;
  case 2:
    console.log('giai thuong 2');
    break;
   case 3:
    console.log('giai thuong 3');
    break; 
}
}else{
  console.log('chua nhap cau hoi');
 
}

let userName='';
if(userName=='Jane'){
  document.write(`Hello, ${userName}!`);
}else{
  document.write('Hello!');
}
//chay dua
let raceNumber = Math.floor(Math.random() * 1000);
let dkSom=true;
let tuoi=19;
if(tuoi>18){
  raceNumber +=1000;
    if(dkSom){ 
    console.log(`Chay luc 9h30 voi ${raceNumber}`);
    }
    else
    {
    console.log(`Chay luc 11h sang voi ${raceNumber}`);
    }
}else if(tuoi<18){
  console.log('Thanh niên đăng ký chạy lúc 12h30 voi' +' '+ raceNumber);
}else{
  console.log('Moi xem bang dang ky');
}

//. Khối là mã được tìm thấy bên trong một tập hợp dấu ngoặc nhọn {}.

