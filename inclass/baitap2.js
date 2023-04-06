// tiếng anh --> việt
const E = ["hello", "bye", "listen"];
const V = ["xin chào", "tạm biệt", "nghe"];

function english() {
    const value = document.querySelector('#english').value;
  let result = "";
  for (let i = 0; i < E.length; i++) {
    if (E[i] == value) {
      result = V[i];
    }
  }
  console.log(result);
  document.getElementById("result").value = result
} 

// tiếng việt --> anh
function vietnamese() {
    const value = document.querySelector('#vietnamese').value;
  let result = "";
  for (let i = 0; i < V.length; i++) {
    if (V[i] == value) {
      result = E[i];
    }
  }
  console.log(result);
  document.getElementById("result").value = result
} 