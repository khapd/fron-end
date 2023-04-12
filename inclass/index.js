const drinkList = [
  {
    id: 1,
    image: "./images/tải xuống (1).jpg",
    name: "nước chanh",
    prince: 25000,
  },

  {
    id: 2,
    image: "./images/tải xuống (2).jpg",
    name: "coca",
    prince: 15000,
  },
  {
    id: 3,
    image: "./images/tải xuống (3).jpg",
    name: "pepsi",
    prince: 20000,
  },
  {
    id: 4,
    image: "./images/tải xuống (4).jpg",
    name: "trà sữa",
    prince: 35000,
  },
];
// function render có nhiệm vụ là render lại sản phẩm

function renderProduct(data) {
  // b1 lấy element cần thayd dổi
  const tbody = document.querySelector("tbody");
  // b2 khai báo 1 content để chứa nội dung thay đổi
  let contentTbody = "";
  data.forEach((product, index) => {
    contentTbody += `<tr>
        <td class="stt">${index + 1}</td>
        <td class="image"><img src="${product.image}"></td>
        <td class="name">${product.name}</td>
        <td class="gia">${product.prince}</td>
        <td class="action"> 
            <button onclick="handleEdit('${product.id}')" style="border: 1px solid blue;">Edit</button>
            <button onclick="handleDelete('${product.id}')" style="border: 1px solid red;">del</button>
        </td></tr>`;
  });
  tbody.innerHTML = contentTbody;
}
renderProduct(drinkList);

// tìm kiếm sản phẩm
function handleSearch() {
  const valueSearch = document.querySelector("#input-search").value;
  console.log("kiểm tra search", valueSearch);
  const dataSearch = [];

  drinkList.forEach((item) => {
    if (
      item.name.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase())
    ) {
      dataSearch.push(item);
      renderProduct(dataSearch);
    }
  });
}
function handleDelete(id) {
  drinkList.forEach((product, index) => {
    if (product.id == id) {
      drinkList.splice(index,1);
    }
  });
  renderProduct(drinkList);
}

// thêm sản phẩm
function handleAdd() {
  const addImage = document.querySelector("#product-image").value;
  const name = document.querySelector("#product-name");
  const prince = document.querySelector("#price-product");
  const user = {
    image: "./images/" + addImage.slice(12),
    name: name.value,
    prince: prince.value,
  };
  drinkList.push(user);
  renderProduct(drinkList);

  console.log("a", addImage);
}

// edit sản phẩm
function handleEdit(id) {
  let productEdit = {};
  drinkList.forEach((product) =>{
console.log("a",id);

    if(product.id == id){
      productEdit = product;
      return;
    }
  });

  const imageEdit = document.querySelector("#iimage");
  const nameEdit = document.querySelector("#pproduct-name");
  const princeEdit = document.querySelector("#pprice-product");

  // imageEdit.value =  productEdit.image;
  nameEdit.value =  productEdit.name;
  princeEdit.value =  productEdit.prince;

}
