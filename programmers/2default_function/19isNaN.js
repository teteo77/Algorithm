function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  
console.log(milliseconds('100F'));
// Expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// Expected output: 3140

console.log(isNaN(22))
    // ㄴ isNaN함수는 숫자를 false로 반환한다

console.log(isNaN("ㅁㄴㄹ"))
    // ㄴ 문자를 true로 반환한다