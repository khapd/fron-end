function number(){
    let N = Number(prompt("nhập số"));
    if(N>=2 ){
       let isPrime = true;
      for(let i=2;i< N;i++){
    //   bất kì i có N chia hết cho ithif không phải là số nguyên tố
    
            if(N % i == 0){ 
                isPrime = false;
                break;     
            }
        } 
        if(isPrime){alert("là số ngyên tố")
    }
        else { alert("số này ko phải là số nguyên tố")
    }
    
    }else {alert
    ("ko phải là số nguyên tố")}
}

function printPrimes(){
    const totalPrime = Number(prompt("nhập vào chữ số cần  in"));
    let countPrime = 0;
    let N=2;
    let primeString ="";
        while(countPrime < totalPrime){
        let isPrime =true;
        for(let i=2; i< N;i++){
            if(N%i == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            countPrime++;
            primeString = primeString+" " +N;
        }
        N++;
    }
    console.log(111111,primeString);
}



// kiểm tra số nguyên tố 
function checkPrime2(){
    let N = Number(prompt("nhập số"));
    if(N>=2 ){
       let isPrime = true;
      for(let i=2;i< N;i++){
    //   bất kì i có N chia hết cho ithif không phải là số nguyên tố
    
            if(N % i == 0){ 
                isPrime = false;
                break;     
            }
        } 
        if(isPrime){alert("là số ngyên tố")
    }
        else { alert("số này ko phải là số nguyên tố")
    }
    
    }else {alert
    ("ko phải là số nguyên tố")}
}



const btn1 = document.getElementById("btn1")
console.log(btn1);
btn1.style.color="red"
