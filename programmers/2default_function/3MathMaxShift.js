// Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.

console.log("1Math.max: ",Math.max(1, 3, 2));
// Expected output: 3
console.log("2Math.max: ",Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];
console.log("3Math.max: ",Math.max(...array1));
// Expected output: 3

// ===============================================================================

// shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
const array2 = [1, 2, 3];
const firstElement = array1.shift();

console.log("4Math.shift: ", array1);
// Expected output: Array [2, 3]
console.log("5Math.shift: ",firstElement);
// Expected output: 1
