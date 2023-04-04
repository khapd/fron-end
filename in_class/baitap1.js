// demo vòng lặp0

// lập 10 lần
 
for(let i=1;i<=10; i=i+1){
    console.log("lặp lần thứ :",i)
    
}
for(let i = 1; j = 1 , i<=10; i++ ,j=j+3){
    console.log("i",i);
    console.log("j",j);

}
let i=0;
let sum=0


while(sum < 100){
    i++;
    sum = sum + i;
    console.log("checki và sum",i,sum);
}
do{
j++;
console.log("check lần lập thứ J",j)
}while(j <=0)

// demo break và continue
for(let i = 0; i < 10; i++){
    if(i % 2 == 0 && i >= 6){
        console.log("kiểm tra số chẵn bé hơn hoặc bằng 6",i);
        break;
    }
}

for(let i = 0; i <= 10; i++){
    if( i >= 6){
        console.log("kiểm tra số chẵn bé hơn hoặc bằng 6",i);
        continue;
    }
}
// vòng lập lồng nhau
for(let i = 0; i < 10; i++){
for (let j = 0; j<10; j++);{
console.log("a",i,j)
}}

//  nhập vào dãy số N và tìm số lớn nhất

// chuỗi số: a1,a2,a3,a4....

// let max = a1
// for(let i = 0; i<=navigator; i= i+1){
// if( ai >= a1){
//     max = ai
// }


// }
// console.log('sô lớn nhất trong chuỗi: ', max);


function check_songuyento() {
    const sokiemtra = Number(
      prompt("Nhập số cần kiểm tra là nguyên tố hay ko")
    );
    let ktra_ngto = true;
    for (let i = 2; i < sokiemtra; i++) {
      if (sokiemtra % i == 0) {
        ktra_ngto = false;
        break;
      }
    }
    if (ktra_ngto == true) {
      alert("Là số nguyên tố");
    } else alert("Không phải là số nguyên tố");
  }







  // ước của số
  function uoc() {
    const N = Number(prompt("Nhập vào số cần kiểm tra ước số"));
    let dsUoc = " ";
  
    for (let i = 1; i <= N; i++) {
      if (N % i == 0) {
        dsUoc = dsUoc + " " + i + ",";
      }
    }
    console.log("Ước số là" + dsUoc)}

// số hoàn hảo

  function soHoanHao() {
    const N = Number(prompt("Nhập vào số cần kiểm tra:"));
    let total = 0;
    for (let i = 1; i < N; i++) {
      if (N % i == 0) {
        total = total + i;
      }
    }
    if (N == total) {
      alert("Là số hoàn hảo");
    } else {
      alert("Không phải Là số hoàn hảo");
    }
  } 
// tổng các số chia hết cho 7
  function chia7(){
    let count =0;
    let N=7;
    let sum=0;
   while (count<30) {
    
      count= count +1;
      sum =sum+N;
      N=N+7
      }    
  alert("Tổng là: " + sum)}
 
  