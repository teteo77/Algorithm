// indexOf(searchElement, fromIndex)
// searchElement
// 배열에서 위치를 찾을 요소입니다.

// fromIndex Optional
// 검색을 시작할 0 기반 인덱스로, 정수로 변환됩니다.

// 음수 인덱스는 배열의 끝부터 거꾸로 셉니다.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('bison'));

// 인덱스 2번부터 탐색
console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));
