// 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 
// 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
// 50보다 작은 홀수라면 2를 곱합니다. 
// 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

// https://velog.io/@mumukim/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A1%B0%EA%B1%B4%EC%97%90-%EB%A7%9E%EA%B2%8C-%EC%88%98%EC%97%B4-%EB%B3%80%ED%99%98%ED%95%98%EA%B8%B0-1
// 향상된 for문 먼저 공부하고 풀이하기


let arr = [1, 2, 3, 100, 99, 98];

function solution(arr) {
    let answer = [];
    for(const value of arr) {
        if (50 <= value && value % 2 === 0) {
          answer.push(value / 2)
        } else if (50 > value && value % 2 === 1) {
            answer.push(value * 2)
        } else {
            answer.push(value)
        }
    }
    return answer;
}