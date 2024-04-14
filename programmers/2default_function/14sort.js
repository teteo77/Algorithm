// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 
// 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 
// 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]


// 문자열 대신 숫자를 비교하기 위해 compare 함수는 
// a에서 b를 뺄 수 있습니다. 다음 함수는 배열을 오름차순으로 정렬합니다 (Infinity 및 NaN이 포함되어 있지 않은 경우).
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

//화살표 함수
var numbers2 = [4, 2, 5, 1, 3];

numbers2.sort((a, b) => a - b);
console.log(numbers2);