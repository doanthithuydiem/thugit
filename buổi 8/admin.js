// var productele = [
//     {
//       id: 1,
//       name: "Samsung Galaxy S22 Ulta 5G",
//       price: 30990000,
//       info: "6.9 inches, chip MediaTex Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAn",
//       Detail: "ProductDetail1",
//       Star: 5,
//       image: "image1.pjg",
//       NSX: "SAMSUNG",
//       Category: "Điện thoại",
//       Edit: "",
//       Delete: "",
//     },
//     {
//       id: 1,
//       name: "Samsung Galaxy S22 Ulta 5G",
//       price: 30990000,
//       info: "6.9 inches, chip MediaTex Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAn",
//       Detail: "ProductDetail1",
//       Star: 5,
//       image: "image1.pjg",
//       NSX: "SAMSUNG",
//       Category: "Điện thoại",
//       Edit: "",
//       Delete: "",
//     }
//   ]

function fn_productele() {
  // localStorage.setItem("productele", JSON.stringify(productele)); // lệnh này chặp nữa move qua bên add product nha
  var arayData = localStorage.getItem("productele");
  arayData = JSON.parse(arayData);
  console.log("arayData ******: ", arayData);
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
      <button onclick='Edit(${item.id})'>Edit</button>
      </td>
      <td>${item.Delete}
      <button onclick='deleteItem(${item.id})'>delete</button>
      </td>
      </tr>`;
  }
  var tbody = document.querySelector("#productele tbody");

  tbody.innerHTML = html;
}
function addnew(params) {
  
}
fn_productele();
