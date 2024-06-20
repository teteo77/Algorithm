// Math.max() 정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환하거나, 매개변수가 없을 경우 -Infinity를 반환합니다.

console.log(Math.max(1, 9, 4, 7));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3