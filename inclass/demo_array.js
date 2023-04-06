// //  cách khai báo mảng: array

// const pets = ["dog","cat","fish","bird"];

// console.log("phần tử có index là 3",pets[3]);
// // tinh gọn
// for(const pet in pets){
//     console.log("thú cưng", pet);
// }
// // đầy đủ
// for(let i = 0; i <= pets.length; i++){
//     console.log("thú cưng của bạn",pets[i]);
// }
// for(let index = 0;index <pets.length; index +=2){
//     const element = pets[index];
//     console.log("chekck thú cưng giảm chẵn" , element);
// }

// const cars = ["KIa","BMW","HONDA","INOVA_61-91"]
// const productList = document.querySelector("#list-product")
// const contentProductList ='';
// for(const car of cars){
//     contentProductList+= `<li>${car}</li>`
// }
// productList.innerHTML = contentProductList;

// // tạo list đồ hốc
// const fruits = ['coca','pepsi','nước lọc','bia'];
// const productList = document.querySelector("#list-fruits");
// const waterProductList='';
// for (const fruit of fruits) {
// }{
//     waterProductList+= `<li>${fruits}</li>`;
// }
// productList.innerHTML = waterProductList;


// const students = ["abc"];
// // thêm dữ liệu vào array-push() --> add
// // CRUD --> create -read - update delete
//  console.log("kiểm tra chiều dài students",students.length);

//  const nemLength = students.push("Kha");

//  console.log("kiểm tra phần tử lần 2",students);
//  console.log("kiểm tra chiều dài làn 2",nemLength);

//  const elementStudent = document.querySelector("#students")

// function handleOnChange(){
//     const inputStudent = document.querySelector("#student").value
//   students.push(inputStudent)
// }
// function handleAdd(){

// }


// xây dựng bảng cửu chương
const multiplication_table =[];
for(let row=  2; row <=9; row++){
    for( let col =0; col<=9;col++){
        multiplication_table[row] [col]= [row +2,col +1];
    }
}
consTable = document.querySelector('#my-table');
let contentTable="";
for(const row of multiplication_table){
    contentTable+="<tr>";
    for( const col of multiplication_table[row]){
       contentTable+=`<td>${row}x${col}`
    }
}
console.log("kiểm tra dữ liệu bangrg cửu chương" , multiplication_table);
