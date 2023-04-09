
      
const a=[];
function add(){
    const value = document.querySelector("#number1").value;
    // dữ liệu đang là string
       
    
// method split() chuyển đổi string thành array
const array = value.split(' ');
console.log(array);
// thêm dữ liệu vào array data
a.push(array) 
renderData(a)   
}
const newArr= [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
    ];
renderData(newArr); 
function view(data){
    const mytable =document.querySelector("#my-table")
    let contentTable="";
    for( let row =0; row < a;row++){
        contentTable+="<tr>";
        for(let col =0;col < data[0].length;col++){
            contentTable+=`<td>${data[row][col]}</td>`;
        }
        contentTable+="</tr>";
    }
    mytable.innerHTML   = contentTable;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

}
 
  

