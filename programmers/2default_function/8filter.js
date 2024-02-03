// 출처: https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-filter-%ED%95%A8%EC%88%98/
// Array.prototype.filter() 사용법
// filter() 함수는
// 배열의 요소를 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수입니다.
// 필터링된 배열을 반환합니다.

// ex 1)
// 필터링할 배열
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 개발자가 직접 작성한 콜백 함수
function isEven(value) {
    return value % 2 === 0; // 짝수인 경우 true 반환
}

// 필터링된 배열로 반환
const result = num.filter(isEven);
console.log(result); // 출력: [2, 4, 6, 8, 10]


// ex 2)
// 입력된 매개변수 값을 이용해서 filter사용
function solution(arr, height) {
    let a = arr.filter(arr => height < arr).length
    console.log(a)
    return a
}

// 매개변수에 값 입력
solution([149, 180, 192, 170],167)
