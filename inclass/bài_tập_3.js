// bài 3
//  lắng nghe sự kiện khi nhập bàn phím từ textarea
// đếm số lần sự kiện oninput thực hiện
let count = 0
// chuỗi số cần hiển thị
const str ="tôi là thằng ngốc";
// két quả trả về
let result = str[count];
// function được gọi khi oninput thay đổi
function handleKey(){
    //  khi oninput thay đổi thì thay đổi giá trị của input như str đã được tạo
    element.value=result;
    // khi mà số lần nhập lớn hơn bằng str -1(số chỉ mục  -index) =chữ cuối cùng
if(count > str.length){

    // đếm lại từ đầu
count = 0;
// kết quả nhập lại từ đầu
result =str[count];
}
else{
    // nối chuỗi str thứ count tiếp
    count++
    result += str[count];
}

}
