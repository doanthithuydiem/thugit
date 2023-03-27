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
    }
  ]
  function fn_productele() {
    var html = "";
    for (const item of productele) {
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
  
  fn_productele();