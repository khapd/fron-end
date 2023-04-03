// bài tập 1
function nhietDo(){
    let c = prompt("nhập vào độ C");
    const F = (c*9)/5 +32;
   alert("độ F là:" +F);
    
}
// bài tập 2
function feet(){
let m = prompt("nhập số mét vào");
const ft = (m * 3.2808);
alert("feet là" +ft)
}
// bài tập 3
function hv(){
    let a = prompt("cạnh hình vuông");
    const S =(a*4);
    alert("diện tích hình zuôn là:"+S)
}
// bài tập 4
function tgv(){
    let a = prompt("cạnh hình tam giác");
    let b = prompt("cạnh hình tam giác")
    const S =(a*b)/2;
    alert("diện tích hình tam giác vuông là:"+S)
}
// bài tập 5
function scn(){
    let a = prompt("chiều rộng");
    let b = prompt("chiều cao")
    const S =(a*b);
    alert("diện tích hình chữ nhật là:"+S)
}
// bài tập 6
function tuoi(){
    const a = Number(prompt("nhập số"));
    if (a < 0){
        alert(" đây ko phải là tuổi 1 người")
    }
     
    else if (a < 120){
        alert(" đây  là tuổi 1 người")
    }
    else if (a > 120){
        alert(" đây ko phải là tuổi 1 người")
    } 
     else if(a > 0){
        alert("đây là tuổi của 1 người")
    }
}
// bài tập 7
function tamGiac(){

let a = prompt("cạnh của tam giác");
let b = prompt("cạnh cảu tam giác");
let c = prompt("cạnh cảu tam giác");
if (a + b > c){
    alert("chính xác")

}
if (b + c >a){
    alert("chính xác")

}
if (c + a > b){
    alert("chính xác")

}}
// bài tạp 8
function dien(){
    const soDien = +prompt("sô điện");
    const bac1 = 1500;
    const bac2 = 1700;
    const bac3 = 2000;
    const bac4 = 2500;
    const bac5 = 2800;
    const bac6 = 3000;

if(soDien < 50){
    gia1 = soDien * bac1;
    alert("giá điện là" +gia1);
}
else if(soDien < 100){
    gia2 = (soDien - 50)* bac2;
    alert("giá điện là" +gia2);
}
else if(soDien < 200){
    gia3 = (soDien - 100)* bac3;
    alert("giá tiền là" +gia3);
}
else if(soDien < 300){
    gia4 = (soDien - 200)* bac4;
    alert("giá tiền là" +gia4);
}
else if(soDien < 400){
    gia5 = (soDien - 300)* bac5;
    alert("giá tiền là" +gia5);
}
else if(soDien > 400){
    gia6 = (soDien -400)* bac6;
    alert("giá tiền là" +gia6);
}
}

// bài tập 9
// bài tập 10
// bài tập 11
// bài tập 12