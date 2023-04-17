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
];

function set_productele() {
  localStorage.setItem("productele", JSON.stringify(productele));
}

function Add() {
  console.log($("input[id='id']").val());
  console.log($("input[name='fname']").val());
  let id = document.getElementById("id");
  let Name = document.getElementById("name");
  console.log('name')
  let Price = document.getElementById("price");
  let Info = document.getElementById("w3review");
  let Detail = document.getElementById("detail");
  let Star = document.getElementById("star");
  let Image = document.getElementById("aImage");
  let NSX = document.getElementById("manufacturer");
  let selectNSX = NSX.options[NSX.selectedIndex];
  let Category = document.getElementById("Category");
  let selectCategory = Category.options[Category.selectedIndex];
  console.log(selectNSX.text)
  console.log(selectCategory.text);


  let newProduct = {
    id: productele.length + 1,
    name: Name.value,
    price: Price.value,
    info: Info.value,
    Detail: Detail.value,
    Star: Star.value,
    Category: selectCategory.text,
    Image: "",
    NSX: selectNSX.text,
    Edit: "",
    Delete: "",

  };
  productele.push(newProduct);
  set_productele();
  fn_productele();
  console.log("productele", productele);
  function resetForm() {
    productele.id.value = "";
    productele.name.value = "";
    productele.price.value = "";
    productele.info.value = "";
    productele.Detail.value = "";
    productele.Star.value = "";
    productele.NSX.value = "";
    productele.Category.value = "";
  }
}

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
      <button type="button" class="btn btn-warning text-light"  data-toggle="modal" data-target="#editModal" onclick='fn_edit(${JSON.stringify(
      item
    )})'>
        Edit
      </button>
      </td>
      <td>${item.Delete}
      <button id="demo" class="btn btn-danger" onclick='deleteItem(${item.id
      })'>delete</button>
      </td>
      </tr>`;
  }
  var tbody = document.querySelector("#productele tbody");

  tbody.innerHTML = html;
}

set_productele();

fn_productele();

// //xóa sản phẩm
// function deleteItem(id) {
//     productele = productele.filter((item) => {
//       return item.id !== id;
//     });
// console.log(id)
//   set_productele();
//   fn_productele();
// }

//edit sản phẩm
var objectEdit = {};
function getData() {
  var id = document.getElementById("eId");
  var name = document.getElementById("eName");
  var price = document.getElementById("ePrice");
  var info = document.getElementById("eInfo");
  var Detail = document.getElementById("eDetail");
  var Star = document.getElementById("eStar");
  var NSX = document.getElementById("eManual");
  var Category = document.getElementById("eCate");
  var image = document.getElementById("image");
  objectEdit = { id, name, price, info, Detail, Star, NSX, Category, image };
  console.log("objectEdit", objectEdit);
}
function resetDataForm() {
  objectEdit.id.value = "";
  objectEdit.name.value = "";
  objectEdit.price.value = "";
  objectEdit.info.value = "";
  objectEdit.Detail.value = "";
  objectEdit.Star.value = "";
  objectEdit.NSX.value = "";
  objectEdit.Category.value = "";
}

function fn_edit(item) {
  getData();
  console.log("objectEdit", objectEdit);
  objectEdit.id.value = item.id;
  objectEdit.name.value = item.name;
  objectEdit.price.value = item.price;
  objectEdit.info.value = item.info;
  objectEdit.Detail.value = item.Detail;
  objectEdit.Star.value = item.Star;
  objectEdit.NSX.value = item.NSX;
  objectEdit.Category.value = item.Category;
  // objectEdit.image.value = item.image;
}

// Hàm lấy tên ảnh
function getImageName(pathImage) {
  // Chuyển đường dẫn thành mảng các phần tử
  var itemArray = pathImage.split("\\");
  // Lấy phần tử cuối cùng
  var imageName = itemArray[itemArray.length - 1];

  return imageName;
}

//modal edit
edit_modal();
function edit_modal() {
  var html = `<!-- Modal edit- update -->
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Update Product</h4>
        </div>
        <div class="modal-body">
          <form action="">
            <label for="fId">id</label><br>
            <input type="text" name="fname" id="eId" disabled placeholder="input id" /><br><br>
            <label for="eName">name</label><br>
            <input type="text" name="name" id="eName" placeholder="input name" /><br><br>
            <label for="price">price</label><br>
            <input type="text" name="price" id="ePrice" placeholder="input price"><br><br>
            <label for="info">info</label><br>
            <textarea id="eInfo" name="info" rows="4" cols="50"></textarea><br><br>
            <label for="detail">Detail</label><br>
            <textarea id="eDetail" name="detail" rows="4" cols="50"></textarea><br><br>
            <label for="star">Star</label>
            <input type="text" id="eStar" name="star" placeholder="input star"> <br><br>
            <label for="file">image</label><br>
            <input type="file" id="eImage" name="choose file" />
            <label for="manual">Manufacturer</label><br>
            <select name="manu" id="eManual">
              <option value="1">SAMSUNG</option>
              <option value="2">APPLE</option>
              <option value="3">OPPO</option>
              <option value="4">XIAOMI</option>
            </select><br>
            <label for="cate">Categero</label>
            <select class="form-control" id="eCate">
                  <option value="">-- Select Category --</option>
                  <option value="1">Điện thoại</option>
                  <option value="2">Tablet</option>
                  <option value="3">Laptop</option>
             </select>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" id="btn-update" onclick="btn_update()">Update</button>
          <button  type="button" class="btn btn-warning text-light fw-semibold"> Reset</button>
        </div>
      </div>
    </div>
  </div>`;
  var tbody = document.querySelector("#load_editmodal");
  tbody.innerHTML = html;
}

// var btn_update = document.getElementById("btn-update");
/**
 * handle function of button update when click
 */

function resetUpdate() {
  document.getElementById("eId") = "";
  document.getElementById("eName") = "";
  document.getElementById("ePrice") = "";
  document.getElementById("eInfo") = "";
  document.getElementById("eDetail") = "";
  document.getElementById("eStar") = "";
  document.getElementById("eManual") = "";
  document.getElementById("eCate") = "";
  document.getElementById("image") = "";
}

function btn_update() {
  // var productele = localStorage.getItem("productele");
  var indexID = parseInt($("#eId").val());
  // console.log(indexID);
  // let arr = productele;
  var index = productele.findIndex((item) => {
    return item.id == indexID;
  });
  // console.log(index)
  productele[index].name = objectEdit.name.value;
  productele[index].price = objectEdit.price.value;
  productele[index].info = objectEdit.info.value;
  productele[index].Detail = objectEdit.Detail.value;
  productele[index].Star = objectEdit.Star.value;
  // productele[index].image = objectEdit.image.value;
  productele[index].NSX = objectEdit.NSX.value;
  productele[index].Category = objectEdit.Category.value;
  localStorage.setItem("productele", JSON.stringify(productele));
  fn_productele();
  resetDataForm();
  console.log("productele", productele);
}

function search(){
  let search = document.getElementById("searchItem").value;
  if (search != null) {
    search = search.value

    var item = document.querySelectorAll("div.DetailSection > div.SideBarSection");
    for (var i = 0; i < item.length; i++) {
         var button = item[i].getElementsByTagName("button").innerText;  
         if (button.indexOf(search.value) >= 0)
         item[i].style.display = "";
    }
  }

}

//xóa sản phẩm
function deleteItem(id) {
  let pName;
  productele.forEach(function (item) {
    if (item.id == id) {
      pName = item.name;
    }
  });
  // console.log(pName);
  let confirmDelete = confirm(`Delete it : ${pName}`);
  if (confirmDelete) {
    productele = productele.filter((item) => {
      return item.id !== id;
       /**Lưu lại productele sau khi cắt vào local */
       localStorage.setItem("productele", JSON.stringify(productele));
       fn_productele();
    });
    }
    else {
      alert("No products to delete!");
    }
console.log("productele",productele)
set_productele();
fn_productele();
};
