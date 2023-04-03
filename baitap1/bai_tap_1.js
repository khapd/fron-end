// bài tập 1
function avab(){
     let N = + prompt("nhập số") ;
     let a = ('N');
     let b = ('N');
     if (N % 2 == 0){
          console.log(N + " is even.");
         } else{
          console.log(N + " is odd.");
         }
     }
     // bài tập 2
function checkOld(){
     const o= Number(prompt("tuổi"));
     if(o == 16){;
     alert("vào lớp 10")}
     else if(o == 1){
          alert("không phải")
     }
     else {
          alert(nothing)
         }
}
// bài tập 3
function checkNumber(){
     const a = Number(prompt("nhập số"));
     if (a > 0){
          alert("số này lớn hơn 0")
     }
      if (a < 0){
          alert("số  này bé hon 0")
     }
     else if(a = 0){
          alert("số này bằng 0")
     }
}
// bài tập 4
function rank(){
     let a  =+prompt("nhập số điểm  giữa kỳ");
     let b =+prompt("nhập số điểm cuối kỳ");
   
     const medium =(a + b)/2;
     alert( "học lực là:" + medium );
}
// bài tập 5
