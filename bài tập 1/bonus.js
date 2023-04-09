

const data =[];
function add(){
    const value =document.querySelector("#head").value;
   
    data.push(value);
    console.log(data);
}

function renderProduct(data){
    const table =document.querySelector("#my-table")
    let contentTable="";
    // for( let row =0; row < data.lenght;row++){
    //     contentTable+="<tr>";
        
    //   contentTable+=`<td>${data[row]}</td>`;
    //     }
    //     contentTable+="</tr>";
        
    // 
contentTable+="<tr><td>Stt</td><td>name</td><td>action</td></tr>"
for( let row =0; row <= data.length;row++){
        contentTable+="<tr>";
        
      contentTable+=`<td>1</td>
      <td>${row +1}</td>
      <td>
      <button>delete</button>
      <button>update</button>
      </td>`;
}
        contentTable+="</tr>";
        
table.innerHTML = contentTable

}
renderProduct()

              

