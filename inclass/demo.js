const person1 = {
  name: "kha",
  age: 20,
  weight: 85,
  height: 1.75,
};
let height;
// cách 1 để dùng tạo 1 đối tượng bằng function
// viết hoa tên đối tượng
function person(weight, height) {
  (this.weight = weight),
    (this.height = height),
    (this.getBMI = () => this.weight / (this.height * this.height));
}

// cách 2: tạo một đối tượng bằng class
class person2 {
  constructor(weight, height) {
    (this.weight = weight), (this.height = height);
  }
  getBMI = () => this.weight / (this.wweight * this.height);
}

const kha = new person(70, 1.8);
const bmi = kha.getBMI();
console.log(bmi, kha);
const people = [new person()];

const car = {
  brand: "BMW",
  speed: 300,
  model: "x3",
  price: 90000,
  priceUnit: "USD",
};
const car2 = car;
car2.brand = "dép";

const car3 = { ...car, brand: "lexus" };

const car4 = {};
car4.brand = car.brand;
car4.brand = "toyota";

console.log("kiểm tra brand", car);
console.log("kiểm tra car3", car);
console.log("kiểm tra car4", car4);

// đặt biến để lấy gái trị thuộc tính
const cat= {
    color: "black",
    width: 3
,}
let key = "color"
cat[key] = "while";
console.log(cat);
// thông thường chỉ láy được giá trị của key tỏng object,chứ ko lấy được 
// for in lặp qua từng phần tử trong objact và trả về key
for (const key in car){
    console.log("kiểm tra key của car",key);
}