const carList =[{
    id: 1,
    image: "./images/image1.png",
    name: "BMW x1 LCI",
    price: 1859000000,
    currency:"VND",
},
{
    id: 2,
    image:"./images/image2.png",
    name: "BMW 3series G20",
    price: 3559000000,
    currency: "VND"
},
{
    id: 3,
    image: "./images/image3.webp",
    name: "BMW 320i Sportline",
    price: 1359000000,
    currency:"VND",
},
{
    id: 4,
    image: "./images/images4.jpg",
    name: "BMW 430i Grancoupe",
    price: 4359000000,
    currency:"VND",
},
{
    id: 5,
    image: "./images/image5.jpg",
    name: "BMW 5 seriers",
    price: 2309000000,
    currency:"VND",
},
{
    id: 6,
    image: "./images/images6.jpg",
    name: "BMW 430i convertible",
    price: 3350000000,
    currency:"VND",
},
{
    id: 7,
    image: "./images/images7.jpg",
    name: "BMW 740Li pure Excellence",
    price: 6000000000,
    currency:"VND",
},
{
    id: 8,
    image: "./images/image8.jpg",
    name: "BMW 730Li M-sport",
    price: 4359000000,
    currency:"VND",
},
];

renderData(carList);

function renderData(data){
    
  const car = document.querySelector(".album-car");

  contentCar = "";

  data.forEach((user) => {
    contentCar +=`<div class="car">
    <img src="${user.image}" />
    <p>${user.name}</p>
    <p>
      <b><span style="color: red">Giá bán:${user.price} ${user.currency}</span></b>
    </p>
   <button onclick="handleEdit('${user.id}')">edit</button>
   <button onclick="handleDelete('${user.id}')">delete</button>
  </div>`
})
car.innerHTML = contentCar;
}
// tìm kiếm sản phẩm
function search(){
    const valueSearch = document.querySelector("#input-search").value;
    console.log("kiểm tra search", valueSearch);
    const dataSearch = [];
   carList.forEach((item) => {
    if(
    item.name.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase())
   ) {
    dataSearch.push(item);
    renderData(dataSearch)
   }
}
)
}
// xóa sản phẩm

function handleDelete(id){
    console.log(id);
    carList.forEach((user,index)=>{
        if(user.id == id){
            carList.splice(index,1);
            return
        }
    });
    renderData(carList)
}

// add sản phẩm
function handleAdd() {
   
    const image = document.querySelector("#image").value;
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");
    const currency = document.querySelector("#currency");

    const user = {
        image: "./images/" + image.slice(12),
        name: name.value,
        price: price.value,
        currency: currency.value,
      };
      carList.push(product);

      renderData(carList);
      
}

// edit sản phẩm
function handleEdit(id) {
    const nameEdit = document.querySelector('#edit-name').value;
    const imageEdit = document.querySelector('#edit-image').value;
    const priceEdit = document.querySelector('#edit-price').value;
    const currencyEdit = document.querySelector('#edit-currency').value;
    carList.forEach((product,i)=>
    {
        console.log(product);
        console.log(id);
        if(product.id == id){
            carList.splice(i,1, {...product, name:product.name,
            image:product.image,
              price:product. price,
            currency:product.currency,
        })
nameEdit.value=product.name;
imageEdit.value =product.image;
priceEdit.value =product.price;
currencyEdit.value =product.currency;
        }
    })
    // lấy đc element từng edit



}
