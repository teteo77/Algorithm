// 문자열이나 다른 값을 Number 타입으로 변환합니다. 
// 만약 만약 인수를 숫자로 변환할 수 없으면 NaN을 리턴합니다.

console.log(Number("123")) // 숫자 123을 반환
let a = Number("123")
console.log( typeof(a))

Number("123") === 123; // 참

Number("unicorn"); // NaN
Number(undefined); // NaN