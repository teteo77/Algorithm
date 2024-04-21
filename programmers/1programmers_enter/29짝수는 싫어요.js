// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 
// return하도록 solution 함수를 완성해주세요.
// 일단 홀수를 구하는 코드 만들기

let arr = 10;

function solution(n) {
    let answer = [];
    for(let i=1; i<=n; i++){
        if(i % 2 === 1){
            answer.push(i)
            console.log(answer)
        }
    }
    return answer;
}

solution(arr)