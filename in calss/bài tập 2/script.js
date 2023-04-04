function bai_1() {
  const mathMark = Nunber(prompt("Nhap diem toan"));
  const chemMark = Nunber(prompt("Nhap diem toan"));
  const physMark = Nunber(prompt("Nhap diem toan"));
  const averageMark = (mathMark + chemMark + physMark) / 3;
  // document.writeln('Tong diem 3 mon:',averageMark*3);
  // document.writeln('Diem trung binh 3 mon:',averageMark);
  console.log("Diem TB 3 mon:", averageMark);
  console.log("Tong diem 3 mon:", averageMark * 3);
}

// Baif 2- Chuyen doi tien te
console.log("Kiem tra Document", document);

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  console.log("Kiem tra amount", amount);

  const currency = document.getElementById("currency");
  console.log("Kiem tra from currency", currency.value);
  const toCurrency = document.getElementById("to-currency");

  const result = document.getElementById("result");
  if (currency.value == "USD") {
    result.value = (amount * 23000).toLocaleString("en-GB");
  } else {
    result.value = (amount / 23000).toFixed(2);
  }
  function onChange() {
    const currency = document.getElementById("currency");
    const toCurrency = document.getElementById("to-currency");
    if (currency.value == "USD") {
      toCurrency.value = "VND";
    } else {
      toCurrency.value = "USD";
    }
  }
}
