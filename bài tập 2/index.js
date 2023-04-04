//bài tập 1 fibonacci
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


  // bài tập 3
  // tam giác 1
  function tg1() {
    for( let i=1; i<=5;i++ ){
    for( let k =1; k <=i; k++){
      document.write("*");
    }
    document.write("<br>");
  }
  }
  // tam giác 2
  function tg2() {
    for( let i=1; i<=5;i++ ){
    for( let k =1; k <= 5 - i + 1; k++){
      document.write("*");
    }
    document.write("<br>");
  }
  }
// tam giác 3
  function tg3() {
    for (let i = 1; i <= 5; i++) {
      for (let h = 1; h <= 5 - i; h++) {
        document.write("&nbsp;&nbsp;");
      }
      for (let k = 1; k <= i; k++) {
        document.write("*");
      }
      document.write("<br>");
    }
  }
  // tam giác 4
  function tg4() {
    for (let i = 1; i <= 5; i++) {
      for (let h = 1; h <= i - 1; h++) {
        document.write("&nbsp;&nbsp;");
      }
      for (let k = 1; k <= 5 - i + 1; k++) {
        document.write("*");
      }
      document.write("<br>");
    }
  }

  // bài tập 4.  hình vuông
  function hcn() {
    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 25; j++) {
        if (i == 1 || i == 7) {
          document.write("*");
        } else {
          if (j != 1 && j != 25) {
            document.write("&nbsp;&nbsp;");
          } else {
            document.write("*");
          }
        }
      }
      document.write("<br>");
    }
  }