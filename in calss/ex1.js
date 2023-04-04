let pointPhysical  =+prompt("nhập số điểm  môn lý vào");
let pointChemistry =+prompt("nhập số điểm môn hoá vào");
let pointBiology   =+prompt("nhập số điểm môn sinh vào");
const medium =(pointPhysical + pointChemistry + pointBiology)/3;
document.write( "trung bình là:" + medium );