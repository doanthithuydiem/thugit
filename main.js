// var number = 12.3;
// var str ='';
// var isNumber = true;
// var 0bj = {};

// var arr =[]

// if(true){
//     console.log('log')
// }


// console.log('1231231')


// var a = 10;
// var b = 20;

// if(a== 20 && b !=20){
//     console.log('true')
// }
// // else{
//     console.log('fales')
// }


// switch (key){
//     case value:
//         break:
//     default:
//         break :   
// }

// var obj = {
//     name : 'name',
// }


// var student = {
//     name: 'a'
//     age: 20,
//     class:''
// }
//     console.log(student)
// muốn truy xuất các ptu dùng tên Object.key ex: console.log(student.name)
// or dùng console.log(student['name']);


// (trong 1 obj cũng có thể chứa 1 hàm)
//     study: function(){
//         console.log('test');
//     }
// student.stydy();



// var student2 = student;
// student2.name = 'student 2';
// console.log(student);


// var arr = [1,'string', true,student]
// arr[0] = 10

// để duyệt 1 arr mình dùng vòng lặp:

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     console.log(arr[index]) để lấy ptu trong arr
// tách length ra 1 biến : var = length = arr.length (sẽ tốt hơn, đỡ tốn hiệu năng vì gọi biến length quá nhiều)
// }


// function sum(){ ( tất cả khối năm trong ngoawck kép là 1 block code)
//     console.log(1+2)
// }
// sum()(gọi hàm)

// var x = function() {  (hàm k tên)
//     console.log('run')
// }
// x();

// arr.pop(); (arr là mảng,) cũng giống obj ( arr.pop xóa ptu trong mảng và trả về ptu đã xóa)
// arr.pop();
// arr.push() trả về đọ dài của mãng



// console.log(a)
// var a = 10; (khai báo)
// (sẽ ra undifined)


// sum(); (foij hàm ở trên) => không lỗi
// function sum(){ (khai báo)
//     console.log('test')
// }


// -global var a = 10
// if(true) {
//     var a = 20;
// }
// -function log(){
//     a+=1;
// }
// log();
// log();
// log();  => a = 11
// console.log(a);

// function log(){
//     var a = 10;
//     a+=1;
// }
// log();
// log();
// log(); sẽ k ra 
// console.log(a);

// DOM 
// console.log(document);
// console.dir(document); obj lớn
// console.dir(document.body) sẽ truy xuất các pty body

// document.getElementById('demo') (demo là đầu vào) (Element là đầu ra)
// var container = document.getElementById('demo') (ById ra ptu duy nhat)
// 

// container.innerText = 'test test';
// container.innerHTML = 'test'

//  var ip = null;// = document.getElementById('ip');
//  console.dir(ip.value)

//  function getlog(){
//     console.log('text')
//  }

// var ip2 = null;// = document.getElementById('ip2');
// 
// document.addEventListener("DOMContentLoaded", () => {
//     ip = document.getElementById('ip');
//     ip2 = document.getElementById('ip2');
//   }); 

// function getlog() {
//    const a = document.getElementById('a').value;
//    const b = document.getElementById('b').value;
//    const package = document.getElementById('result')
//    if (!a || !b) {
//       alert("The html not ready!!!!")
//       return;
//    }
//    package.innerHTML = Number(a) + Number(b)

// }


// var arr = [1,2,3,4,5,6,]; bài tập
// var arr = [1, 2, 3, 4, 5, 6]
// console.log(arr[2])

var arr = [
     {id:1,name:'a', class:'c1'}, 
     {id:2,name:'b', class:'c1'},
     {id:3,name:'c', class:'c1'},
     {id:4,name:'d', class:'c1'},
     {id:5,name:'e', class:'c1'},
   
]


function renderTable(){
   var html = '';
for (const item of arr){
   html=+ `<tr><td>${item.id}</td>
   <td>${item.name}</td>
   <td>${item.class}</td>
   <td>

     <buton onclick'deleteItem(${item.id})'>delete</buton>

   </td>
   </tr>`
}

var tbody = document.querySelector('table tbody');

tbody.innerHTML = html;
}

// var html = '';
// for (const item of arr){
//    html=+ `<tr><td>${item.id}</td>
//    <td>${item.name}</td>
//    <td>${item.class}</td>
//    <td>

//      <buton onclick'deleteItem(${item.id})'>delete</buton>

//    </td>
//    </tr>`
// }

// var tbody = document.querySelector('table tbody');

// tbody.innerHTML = html;

renderTable();

function deleteItem(id){
   arr.splice(id-1,1);
   renderTable();
}


function addnew(){
   var ip = document.getElementsByTagName('input');
   var newObj = {
      id:arr.length + 1,
      name: ip[0].value,
      class:ip[1].value
   }

   arr.push(newObj);

   ip[0].value = '';
   ip[1].value = '';

   renderTable();
}


function edit(id){
   var ip = document.getElementsByTagName('input');
   
}









 

function sentence() {
    content = document.getElementById("content")
   content.value = content.value.charAt(0).toUpperCase() + content.value.slice(1)
}

function download() {
    content = document.getElementById("content")

    element = document.createElement('a');

   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content.value));
   element.setAttribute('download', 'convertcase.txt');
   element.style.display = 'none';
   document.body.appendChild(element);
   element.click();
   document.body.removeChild(element);
}


function lower() {
    content = document.getElementById("content")
   content.value = content.value.toLowerCase()

}

function upper() {
  content = document.getElementById("content")
   content.value = content.value.toUpperCase()
}

function Capitalized() {
   content = document.getElementById("content")
   content.value = content.value.charAt(0).toUpperCase() + content.value.slice(1);

}


function titleStr() {
   let textElement = document.getElementById("content");
   let content = textElement.value;
   let needUperCase = true;
   let nStr = "";
   for ( var i = 0; i < content.length; i++){
      let c = String.fromCharCode(content.charCodeAt(i));
      if (isLetter(c)) {
         nStr += needUperCase ? c.toUpperCase() : c;
         needUperCase = false;
      } else {
         nStr += c;

         if (c === ' ' || c === '.') {
            needUperCase = true;
         }
      }
   }

   textElement.value = nStr;
   
}




// function alternating() {
//    content = document.getElementById("content").value;
//    for ( var i=0; i<content.length; i+2)
//       alternating = content.concat(String.fromCharCode(content.charCodeAt(i).toUpperCase()));
// }
  


function copy() {
   var copyText = document.getElementById("content");
 
   copyText.select();
   copyText.setSelectionRange(0, 99999); 
 
   navigator.clipboard.writeText(copyText.value);
   
 }



// //  function isLetter(c) {
// //    return c.toLowerCase() != c.toUpperCase();
// //  }

// //  function setCharAt(str, index, chr) {
// //    if(index > str.length - 1) return str;
// //    return str.substring(0, index) + chr + str.substring(index + 1);
// }

 function alternating() {
   let textElement = document.getElementById("content");
   let content = textElement.value;
   let needUperCase = false;
   let nStr = "";
   for ( var i = 0; i < content.length; i++){
      let c = String.fromCharCode(content.charCodeAt(i));
      if (isLetter(c)) {
         nStr += needUperCase ? c.toUpperCase() : c;
         needUperCase = !needUperCase;
      } else {
         nStr += c;
         needUperCase = false;
      }
   }

   textElement.value = nStr;
}



function invertCase(string) {
   return string
 };




 
function invertCase() {
   let textElement = document.getElementById("content");
   let content = textElement.value;
   let needUperCase = false;
   let nStr = "";
   for ( var i = 0; i < content.length; i++){
      let c = String.fromCharCode(content.charCodeAt(i));
      if (isLetter(c)) {
         nStr += needUperCase ? c.toUpperCase() : c;
         needUperCase = !needUperCase;
      } else {
         nStr += c;
         needUperCase = false;
      }
   }

   textElement.value = nStr;
}
