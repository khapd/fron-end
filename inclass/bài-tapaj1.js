//  nối mảng color- bài 1
const myColor = ["red", "blue", "green", "black"];
console.log(myColor.join());

// bài 2
// thay đổi số-cách 1
const result_1 = document.querySelector("#result-change");
let resultString_1 = " ";
const valueNumber = document.querySelector("#number-change").value;
function handleNumber() {
  const valueNumber = document.querySelector("#number-change").value;
  for (let i = 0; i < valueNumber.lenght; i++) {
    if (valueNumber[i] % 2 == 0 && valueNumber[i + 1] % 2 == 0) {
      resultString_1 += valueNumber[i] + "-";
    } else {
      resultString_1 += valueNumber[i];
    }
  }
  //  in kết quả
  result_1.innerHTML = resultString_1;
}

const result_2 = document.querySelector("#result-change-2");
// oniput --> function được gọi khi giá trị trong input thay đổi
function handleOnInput(element) {
  console.log(element.value);
  const valueInput = element.value;
  let resultString_2 = [];
  for (let i = 0; i < valueInput.lenght; i++) {
    if (valueInput[i] % 2 == 0 && valueInput[i + 1] % 2 == 0) {
      resultString_2.push(valueInput[i] + "-");
    } else {
      resultString_2.push(valueInput[i]);
    }
  }
  //  in ra kết quả
  const arrayToString = resultString_2.join("");
  result_2.innerHTML = arrayToString;
}

//  bài tập 3 chuyển đổi chữ hoa thành thường

// cách 1

const resultConvertString = document.querySelector("#result-convert-string");
function convertString (element){
    const str = element.value;

    const UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
   
    let convertStr = '';
    let isUpper = false;
    
     for (let k = 0; k < str.length; k++){
        for(let i = 0;i< UPPER.length; i++ ){
            if(str[k] == UPPER[i]){
                isUpper = true;
               
                break;
            }
        }
        if (isUpper){
            convertStr +=str[k].toLowerCase();
        }
        else{
            convertStr += str[k].toUpperCase();
        }
        
     }
     resultConvertString.innerHTML = convertStr;
}


//  cách 2


function convertString2(element){
    const str = element.value;
    const UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let convertStr='';
    // dùng vòng lặp lập qua từng chữ đã nhận
    for(const word of str){
        //  dùng inclue() để xác định chữ cái đó có trong chuỗi in hoa hay không?
        if(UPPER.includes(word)){
            convertStr += word.toLowerCase();
        }
        else{
            convertStr += word.toUpperCase();

        }
    }
    resultConvertString.innerHTML = convertStr;
}