function names() {
  var fullName = prompt("Bạn hãy nhập vào tên:");
  if (fullName != null) {
    document.getElementById("demo").innerHTML = "Tên của bạn là:" + fullName;
  } else {
    document.getElementById("demo").innerHTML = "cancel"
  }
}

function age() {
  var ages = prompt("Bạn hãy nhập vào tuổi:");
  if (ages != null) {
    document.getElementById("demo").innerHTML = "Tuổi của bạn là:" + ages;
  } else {
    document.getElementById("demo1").innerHTML = "cancel"
  }
}

function sex() {
  var sex = prompt("Bạn hãy nhập vào giới tính:");
  if (sex != null) {
    document.getElementById("demo").innerHTML = "Giớ tính của bạn là:" + sex;
  } else {
    document.getElementById("demo2").innerHTML = "cancel"
  }
}

function address() {
  var address = prompt("Bạn hãy nhập vào địa chỉ:");
  if (address != null) {
    document.getElementById("demo").innerHTML = "Địa chỉ của bạn là:" + address;
  } else {
    document.getElementById("demo3").innerHTML = "cancel"
  }
}

function classes() {
  var classes = prompt("Bạn hãy nhập vào lớp:");
  if (classes != null) {
    document.getElementById("demo").innerHTML = "Lớp của bạn là:" + classes;
  } else {
    document.getElementById("demo4").innerHTML = "cancel"
  }
}

var btn = prompt("Bạn hãy nhập vào");
var input = document.querySelector("p")



var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("result");

function sum() {
  console.log('sum', Number(a.value) + Number(b.value))
  c.innerHTML = (Number(a.value) + Number(b.value))
}
console.log('step1')
