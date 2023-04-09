

// bài tập 1
function number1(element){
    const A=element.value;
    const array=A.split(',');
    let result=[];
    let count =0 
    for(i=0; i<array.length ; i++){
        if(Number(array[i])>=10){
            result.push(array[i]) 
            count++
        }
    }
    document.getElementById("result").value = count
}

// bài tập 2


function number2(element){
    const result2 = document.querySelector("#result2-bai2")
    const A=element.value;
    const array=A.split(',');
   
    let max = array[0];
    let index;
    for(let i=1; i<array.length;i++){
        if(Number(array[i])> max){
           max=(array[i]) ;
           index=i;
        }
    }
    document.getElementById("result2").value = max
    result2.innerHTML="số là"(index+1)

}
// bài tập 3

function number3(element){
    const result3 = document.querySelector("#result3-bai3")
    const A=element.value;
    const array=A.split(',');
   
    let max = array[0];
    let index;
    for(let i=1; i<array.length;i++){
        if(Number(array[i])> max){
           max=(array[i]) ;
           index=i;
        }
    }
    document.getElementById("result3").value = max
    result3.innerHTML="số là"(index+1)
   

}

// bài  tập 9
function arrayC(){
const A=["1","2","3","4","5"];
const B=["6","7","8","9","10"];
const C=A;
for(const item of B){
    C.push(item);
}
A[2]=10;
console.log("kiểm tra c",C);
}



// tổng hợp kiến thức array:
// giá trị của phần tử (element)
// vị trí của phàn tử(index)
// @create
// -array.push(item)  --> thêm mới phần tử item vào vị trí cuối mảng array và trả về chiều dài cảu mảng 
// - array.unshift(item) -->them mới item vào đầu array và trả về chiều đài cảu array
// @read
// -array[i] -->hiển thị phần tử thứ i trong array
//- dùng for of để lặp qua từng phàn tử trong array và lấy được giá trị từng phần tử đó
// - for in --> lấy được vị trí từng phần tử
// @update
// array[i] = X --> gán phần tử i trong array bằng  X
// - array.slice() là gì thì chưa biết
// @delete
// - array.pop() --> xóa phần tử cuối cảu array và trả về gía trị phần tử được xóa
// - array.shirf() -->xóa giá trị đầu cuat array và trả vè giá trị phần tử bị xóa
//  
// {một số method thông dụng}
// 
// array.map() --> lặp qua từng phần tử và trả về một mảng mới mới có chiều dài bằng chiều dài mảng ban đầu
// array.forEach() -->l ặp qua từng phàn tử trong mảng
// array.filter() --> so sánh từng phàn tử trong mảng và trả về mảng mới có phàn tử thảu điều kiện
// array.find() --> tìm phần tử thỏa điều kiện và trả về phần tử đầu tiên
// array.findIndex() --> trả về vị trí phàn tử thỏa điều kiện
// array.sort() --> sắp xếp phần tử
// array.includes() --> tìm kiếm phàn tử trong mảng thỏa điều kiện và trả về boolean


/////////////////////////////////////////
// .innerHTML : hiện ra trên web        /
// .value      :                        /
// .console.log():                      /
// document.write  :                    /
// alert()         :                    /
/////////////////////////////////////////


// demo map()
const pets=['cat','dog','fish'];
const sloganPet = pets.map((pet,i )=>{
console.log(pet);
return pet+  "cute<3" + "tại index thứ " +i;
})
console.log(sloganPet);


pets.forEach((item,index)=>{
    console.log( item + "ăn cỏ");
});


