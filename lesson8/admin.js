var productele = [
  {
    id: 1,
    name: "Samsung Galaxy S22 Ulta 5G",
    price: 30990000,
    info: "6.9 inches, chip MediaTex Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAn",
    Detail: "ProductDetail1",
    Star: 5,
    image: "image1.pjg",
    NSX: "SAMSUNG",
    Category: "Điện thoại",
    Edit: "",
    Delete: "",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ulta",
    price: 30990000,
    info: "6.9 inches, chip MediaTex Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAn",
    Detail: "ProductDetail1",
    Star: 5,
    image: "image2.pjg",
    NSX: "SAMSUNG",
    Category: "Điện thoại",
    Edit: "",
    Delete: "",
  },
];

function get_productele() {
  localStorage.setItem("productele", JSON.stringify(productele));
}
//thêm sản phẩm
function Add() {
  console.log($("input[id='id']").val());
  console.log($("input[name='fname']").val());
  var ip = document.getElementsByTagName("input");
  var newObj = {
    id: productele.length + 1,
    name: ip[0].value,
    price: ip[1].value,
    info: ip[2].value,
    Detail: ip[3].value,
    Star: ip[4].value,
    image: ip[5].value,
    NSX: ip[6].value,
    Category: ip[7].value,
  };
  // push
  productele.push(newObj);
  ip[0].value = "";
  ip[1].value = "";
  ip[2].value = "";
  ip[3].value = "";
  ip[4].value = "";
  ip[5].value = "";
  ip[6].value = "";
  ip[7].value = "";
}
//render sp ra giao diện và lưu
function fn_productele() {
  var arayData = localStorage.getItem("productele");
  arayData = JSON.parse(arayData);
  console.log("arayData", arayData);
  var html = "";
  for (const item of arayData) {
    html += `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.info}</td>
      <td>${item.Detail}</td>
      <td>${item.Star}</td>
      <td>${item.image}</td>
      <td>${item.NSX}</td>
      <td>${item.Category}</td>
      <td>${item.Edit}
      <button type="button" onclick='Edit(${JSON.stringify(
        item
      )})' data-toggle="modal" data-target="#editModal">Edit</button>
      </td>
      <td>${item.Delete}
      <button onclick='deleteItem(${item.id})'>delete</button>
      </td>
      </tr>`;
  }
  var tbody = document.querySelector("#productele tbody");

  tbody.innerHTML = html;
}

// get_productele();

fn_productele();

// xóa item
function deleteItem(id) {
  arr.splice(item - 1, 1);
  fn_productele();
}

function Edit(item) {
  console.log(item);
  var ip = document.getElementsByTagName("input");
  ip[2].setAttribute("value", id);
  var itemEdit = null;
  for (const item of productele) {
    if (item.id === id) {
      itemEdit = item;
      break;
    }
  }
  var { name, price, info, Detail, Star, image, NSX, Category } = itemEdit;
  ip[0].value = name;
  ip[1].value = price;
  ip[2].value = info;
  ip[3].value = Detail;
  ip[4].value = Star;
  ip[5].value = image;
  ip[6].value = NSX;
  ip[7].value = Category;
}

var btn_update = document.getElementById("btn-update");
/**
 * handle function of button update when click
 */
btn_update.onclick = () => {
  var allInput = document.getElementsByTagName("input");
  var indexID = parseInt($("#fId").val());
  let arr = productele;
  var index = arr.findIndex((item) => {
    return item.id == indexID;
  });

  //   arr[index].id = ip;
  arr[index].name = document.getElementById("eName").value;
  arr[index].price = allInput[1].value;
  arr[index].info = allInput[1].value;
  arr[index].Detail = allInput[1].value;
  arr[index].Star = allInput[1].value;
  arr[index].image = allInput[1].value;
  arr[index].NSX = allInput[1].value;
  arr[index].Category = allInput[1].value;
  localStorage.setItem("productele", JSON.stringify(productele));
  fn_productele(productele);
  console.log(index);

  allInput[0].value = "";
  allInput[1].value = "";
  allInput[2].value = "";
  allInput[3].value = "";
  allInput[4].value = "";
  allInput[5].value = "";
  allInput[6].value = "";
  allInput[7].value = "";
  console.log(this.id);
};
