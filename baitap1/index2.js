function temp() {
    let a;
    do{
    a = Number(prompt("nhập nhiệt độ: "))
    if( a<=20){
        alert("tăng nhiệt độ lên")
    }
    else if( a>=100){
        alert("giảm nhiệt dộ xuống")
    }
    else{
        alert("rứa là ok rồi "  );
    }
    console.log("kiểm tra nhiệt độ",a);
}while(a >=100 || a <=20);
}

// fibonacci
function fibonaci() {
    const n = Number(prompt("Nhập số Fibonaci cần in:"));
    let a = 0;
    let b = 1;
    let F = 0;
    let count = 0;
    let string = 1;
    while (count < n-1) {
      F = a + b;
      string = string + " " + F;
      a= b;
      b = F;
      count = count + 1;
    }
    console.log("Dãy số là:" + string);
  
  document.getElementById("fibonacci").innerHTML = string;}


//   FizzBuzz
// function FizzBuzz() {
//     let string = "";
   
//     let replace="";
//     for(let i=1; i < 100 ; i++){
         
//         if( i % 3 == 0){
//             replace="Fizz";
//         }
//          else if(i %  5 == 0){
//            replace="Buzz";
//         }
//         else if(i %3 && string % 5){
//             replace="FizzBuzz";
//          }
//         string = string + "" + replace;
      
//     }
//     console.log("dãy số là" +string);
// }

function into100() {
    let string100 = "";
    let i = 1;
    let replace = "";
    while (i < 100) {
      if (i % 3 == 0 && i % 5 == 0) {
        replace = "FizzBuzz";
      } else if (i % 3 == 0) {
        replace = "Fizz";
      } else if (i % 5 == 0) {
        replace = "Buzz";
      } else {
        replace = i;
      }
      string100 = string100 + " " + replace;
      i = i + 1;
    }
    console.log("Dãy 100 số đầu tiên là: " + string100);
    document.getElementById("day_100").innerHTML = string100;
  }

// bài 8:game đoán số
function choi() {
    // dãy số random từ 0 đến bé hơn hoặc bằng ranger
    const ranger =Number(prompt("nhập số của bạn đoán từ 0 đến mấy?"));
    const randomNumber = math.floor(math.random()*(ranger+1));
    console.log('check number random',randomNumber,ranger);
    do{
        const guressNumber =Number(prompt('bạn đoán số mấy?(điền chữ để kết thúc)'));
        // kiểm tra số nhập vào cso phải NaN hay không?
        if(Number.isNaN(guressNumber)){

            // return là lệnh dùng trong function,dùng để kết thúc function và trả về giá trị
            return alert("cảm ơn bn đã chơi");

        }
        if(guressNumber == randomNumber ){
           return alert("đúng");
        }
        else if(guressNumber < randomNumber ){
            alert("vui lòng nhập số lớn hơn");
        }
        else{
            alert("vui lòng nhập số nhỏ hơn");
        }
    } while(true);
}