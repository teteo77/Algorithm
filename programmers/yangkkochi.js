function solution(n, k) {
    let answer = (n*12000) + ((k-parseInt(n/10))*2000)
    console.log(answer);
    return answer;
}

solution(10,3)
// parseInt로 정수로 출력해야함