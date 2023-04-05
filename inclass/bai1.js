function health(){
    const weight =+prompt("nhập số cân nặng")
    switch( true ){
        case weight <= 18.5:
            
            alert("gầy");
             break;
             case weight <= 25:
            
            alert("bình thường");
             break;
             case  29.5 <= weight >= 25:
             alert("thừa cân");
             break;
             case weight <= 29.9:
            
            alert("tiền béo phì");
             break;
             case weight <= 34.9:
            
            alert("béo phì độ I");
             break;
             case weight <= 39.9:
            
            alert("béo phì độ II");
             break;
             case weight >= 40:
            
            alert("béo phì độ III");
             break;

}
}