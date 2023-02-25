// // var fruits, text, flen, i ;

// // fruits = ["Banana" , "Orange" , "Apple" , "Mango"] ;
// // flen = fruits.length;
// // text = "<ul>";
// // for (i = 0; i < flen; i++) {
// //     text += "<li>" + fruits[i] + "</li>";
// }

// var a = document.getElementById("a");
// var b = document.getElementById("b");
// var c = document.getElementById("result");

// function getlog(){
// //alert(Number(a.value) + Number( b.value))
// c.innerHTML = Number(a.value) + Number( b.value)
// }

// var arr = [1,2,3,4,5,6];
// let alen = arr.length;

// var text = '<ul>';

// for (let i = 0; i < alen; i++) {
//    text += '<li>' + arr[i] + '</li>';

// }
// text +='</ul>';

// document.getElementById('list').innerHTML = text;

// function myFunction(value) {
//     text += "<li>" + value + "</li>";
//   }

var arr = [
  { id: 1, name: "test1", classItem: "a1" },
  { id: 2, name: "test2", classItem: "a1" },
  { id: 3, name: "test3", classItem: "a1" },
  { id: 4, name: "test4", classItem: "a1" },
];

// var html = '';
// for (let index = 0; index < arrsaeay.length; index++) {
//     html += +
//     '<tr>' +
//      '<td>' + arr[i].id + '</td>';
//      '<td>' + arr[i].name + '</td>';
//      '<td>' + arr[i].class + '</td>';
//     '</tr>'

// }

// document.getElementById('data').innerHTML = html

function renderTable() {
  var html = "";
  for (const item of arr) {
    html += `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.classItem}</td>
    <td>
    <button onclick='deleteItem(${item.id})'>delete</button>
    <button onclick='Edit(${item.id})'>Edit</button>
    </td>
    </tr>`;
  }
  var tbody = document.querySelector("table tbody");

  tbody.innerHTML = html;
}

renderTable();

function deleteItem(id) {
  // var index = arr.findIndex ((item)=>{
  //     return item.id === id
  // })
  arr.splice(id - 1, 1);
  renderTable();
}

function addnew() {
  var ip = document.getElementsByTagName("input");
  var newObj = {
    id: arr.length + 1,
    name: ip[0].value,
    classItem: ip[1].value,
  };
  arr.push(newObj);
  ip[0].value = "";
  ip[1].value = "";
  renderTable();
}
/**
 * Edit value of
 * @param {*} id
 */
function Edit(id) {
  var ip = document.getElementsByTagName("input");
  ip[2].setAttribute("value", id);  //truyền value của input hidden vào
  var itemEdit = null;
  for (const item of arr) {
    if (item.id === id) {
      itemEdit = item;
      break;
    }
  }
  var { name, classItem } = itemEdit;
  ip[0].value = name;
  ip[1].value = classItem;
}

var btn_update = document.getElementById("btn-update");
/**
 * handle function of button update when click
 */
btn_update.onclick = function () {
  var allInput = document.getElementsByTagName("input");
  var indexID = allInput[2].value;

  var index = arr.findIndex((item) => {
    return item.id == indexID;
  });

  //   arr[index].id = ip;
  arr[index].name = allInput[0].value;
  arr[index].classItem = allInput[1].value;
  localStorage.setItem("data", JSON.stringify(arr));
  renderTable(arr);

  allInput[0].value = "";
  allInput[1].value = "";
  console.log(this.id);
};

// function upd(id){
//     var z = id;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].id === id) {
//             ip[0].value = namees ;
//             ip[1].value = classItem;
//         }

//     }
//     console.log(z)
// }

// function update() {
//     ip[z-1].value = namees ;
//     ip[z-1].value = classItem;

// }

// function getName(param, callback){
//   let name = `Hello ${param}`
//    return callback(name);  //callback = logName 
// }

// function logName(name){
//   console.log(name)
// }

// getName('Diem', logName);



// function sum(x){
//   return function (y){
//     return x+y
//   }
// }
// let result = sum(10);
// console.log(result(10))
// console.log(result(30))

//giam gia 20%
// function discount(price, percent){
//   return price - price * percent 
// }

// console.log(discount(10000, 0.2))

// function discount(price){
//   return function (percent) {
//     return price - price * percent 
//   }
   
// }
//  let productPrice = discount(10000);

//  console.log(productPrice(0.2))

//đầu vào 2 tham số 1 mạng và 1hàm,callback, for each lạc qua các phần tử
const arr3 = [1,2,3,4,5,6];


function myFunction(arr, callback){
  for (let index = 0; index < arr3.length; index++) {
    callback (arr3[index]);
    
  } 
}
 
myFunction (arr3, function(item1){
  console.log(item1 * 2)
})


function map(arr3, callback){
  const newArr = [];
  for (let index = 0; index < arr3.length; index++) {
    
    newArr.push(callback (arr3[index], index, arr))
  }
  return newArr;
}

let result = map (arr3, function (item, index, arr){
  console.log(item, index, arr)
  return item * 2
}) 

  
console.log(result);