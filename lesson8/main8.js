
let products = [
  {
    image: "./image8/dai-su-thuong-hieu-cua-OPPO-Reno6-series-2.jpg",
    name: "Renno6 Z 5G",
    branch: "Hãng sản xuất OPPO",
    price: 9490000,
    
  },
  {
    image: "./image8/dai-su-thuong-hieu-cua-OPPO-Reno6-series-2.jpg",
    name: "Renno6 Z 5G",
    branch: "Hãng sản xuất OPPO",
    price: 9490000,
    
  },
  {
    image: "./image8/dai-su-thuong-hieu-cua-OPPO-Reno6-series-2.jpg",
    name: "Renno6 Z 5G",
    branch: "Hãng sản xuất OPPO",
    price: 9490000,
    
  },
  {
    image: "./image8/dai-su-thuong-hieu-cua-OPPO-Reno6-series-2.jpg",
    name: "Renno6 Z 5G",
    branch: "Hãng sản xuất OPPO",
    price: 9490000,
    
  },
];

const container1 = document.getElementById("demo");
const html = products.map(
  (item) =>
    `<div>
    <img src="${item.image}" width=200px height=200px> </img>
    <h2>${item.name}</h2>
    <p>${item.branch}</p>
    <p>${item.price}</p>
    <img src="./image8/images.png" onclick="alert('thêm vào giỏ hàng của bạn')" width=30px height=30px> </img>
  </div>`
);
container1.innerHTML = html.join();



