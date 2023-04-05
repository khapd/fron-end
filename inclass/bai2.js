function thang(){
    const month = Number(prompt("nhập vào tháng"));
    if ((month==1) || (month==3) || (month==5) || (month==7) || (month==8) || (month==10) || (month==12)  ) {
        document.write("có 31 ngày");
    } else if((month==4) || (month==6) || (month==9) || (month==11) ) {
        document.write("có 30 ngày");
    }
    else if(month==2)
    {
        document.write("co 28 ngay")
    }
    else {
        document.write("nhập lại")
    }}