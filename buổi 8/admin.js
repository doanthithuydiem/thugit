

// function get_productele() {
//   localStorage.setItem("productele", JSON.stringify(productele));
// }


// function Add() {
//   console.log($("input[id='id']").val());
//   console.log($("input[name='fname']").val());
//   var ip = document.getElementsByTagName("input");
//   var newObj = {
//     id: productele.length + 1,
//     name: ip[0].value,
//     price: ip[1].value,
//     info: ip[2].value,
//     Detail: ip[3].value,
//     Star: ip[4].value,
//     image: ip[5].value,
//     NSX: ip[6].value,
//     Category: ip[7].value,
//   };
//   productele.push(newObj);
//   ip[0].value = "";
//   ip[1].value = "";
//   ip[2].value = "";
//   ip[3].value = "";
//   ip[4].value = "";
//   ip[5].value = "";
//   ip[6].value = "";
//   ip[7].value = "";
  
// }


// function fn_productele() {
//   var arayData = localStorage.getItem("productele");
//   arayData = JSON.parse(arayData);
//   console.log("arayData", arayData);
//   var html = "";
//   for (const item of arayData) {
//     html += `<tr>
//       <td>${item.id}</td>
//       <td>${item.name}</td>
//       <td>${item.price}</td>
//       <td>${item.info}</td>
//       <td>${item.Detail}</td>
//       <td>${item.Star}</td>
//       <td>${item.image}</td>
//       <td>${item.NSX}</td>
//       <td>${item.Category}</td>
//       <td>${item.Edit}
//       <button type="button" onclick='Edit(${JSON.stringify(
//         item
//       )})' data-toggle="modal" data-target="#editModal">Edit</button>
//       <button type="button" class="btn btn-warning text-light" onclick ="editProduct(${productList[index].id})">
//         Edit
//       </button>
//       </td>
//       <td>${item.Delete}
//       <button onclick='deleteItem(${item.id})'>delete</button>
//       </td>
//       </tr>`;
//   }
//   var tbody = document.querySelector("#productele tbody");

//   tbody.innerHTML = html;
// }

// // get_productele();

// fn_productele();

// function deleteItem(id) {
//   // var index = arr.findIndex ((item)=>{
//   //     return item.id === id
//   // })
//   arr.splice(id - 1, 1);
//   renderTable();
// }

// function Edit(item) {
//   console.log(item);
//   var ip = document.getElementsByTagName("input");
//   ip[2].setAttribute("value", id); 
//   var itemEdit = null;
//   for (const item of productele) {
//     if (item.id === id) {
//       itemEdit = item;
//       break;
//     }
//   }
//   var { name, price, info, Detail, Star, image, NSX, Category } = itemEdit;
//   ip[0].value = name;
//   ip[1].value = price;
//   ip[2].value = info;
//   ip[3].value = Detail;
//   ip[4].value = Star;
//   ip[5].value = image;
//   ip[6].value = NSX;
//   ip[7].value = Category; 
// }


// var btn_update = document.getElementById("btn-update");
// /**
//  * handle function of button update when click
//  */
//   btn_update.onclick = () => {
//   var allInput = document.getElementsByTagName("input");
//   var indexID = parseInt($('#fId').val());
//   let arr = productele;
//   var index = arr.findIndex((item) => {
//     return item.id == indexID;
//   });

//   //   arr[index].id = ip;
//   arr[index].name = document.getElementById('eName').value;
//   arr[index].price = document.getElementById('price').value;
//   arr[index].info = document.getElementById('w3review').value;
//   arr[index].Detail = document.getElementById('detail').value;
//   arr[index].Star = document.getElementById('star').value;
//   arr[index].image = document.getElementById('image').value;
//   arr[index].NSX = document.getElementById('manu').value;
//   arr[index].Category = document.getElementById('cate').value;
//   localStorage.setItem("productele", JSON.stringify(productele));
//   fn_productele(productele);
//   console.log(index)

//   document.getElementById('eName').value = "";
//   document.getElementById('price').value = "";
//   document.getElementById('w3review').value = "";
//   document.getElementById('detail').value = "";
//   document.getElementById('star').value = "";
//   document.getElementById('image').value = "";
//   document.getElementById('manu').value = "";
//   document.getElementById('cate').value = "";
//   console.log(this.id);
// }

 // Khai báo
 listProduct = [];
  
function addNewProduct() {
  let getId = document.querySelector("#id").value;
  let getName = document.querySelector("#name").value;
  let getPrice = document.querySelector("#price").value;
  let getInfo = document.querySelector("#info").value;
  let getDetail = document.querySelector("#detail").value;
  let getStar = document.querySelector("#star").value;
  let getImage = getImgName(document.querySelector("#image").value);
  let getManufacturer = document.querySelector("#manufacturer").value;
  let getCategory = document.querySelector("#category").value;
  let newProduct = {
    id: getId,
    name: getName,
    price: getPrice,
    info: getInfo,
    detail: getDetail,
    star: getStar,
    image: getImage,
    manufacturer: getManufacturer,
    category: getCategory,
  };
  // Push vao mang productList
  productList.push(newProduct);
  // console.log("listProduct", productList);
  localStorage.setItem("Product", JSON.stringify(productList));
  // console.log(localStorage.setItem("Product", JSON.stringify(productList)));
  resetForm();
  renderProduct();
}