// https://velog.io/@jinyongp/%EC%97%B0%EC%86%8D%EB%90%9C-%EB%B0%B0%EC%97%B4%EC%9D%84-%EC%96%BB%EB%8A%94-%EB%B0%A9%EB%B2%95
    // ㄴ 연속된 값을 갖는 배열을 얻는 방법


function solution(cipher, code) {
    var answer = "";
    
    for (let i = 0; i < cipher.length; i++) {
        if ((i + 1) % code === 0) {
        answer += cipher[i];
        }
    }
    console.log(answer)
    return answer;
}

let text = "dfjardstddetckdaccccdegk"
let num = 4;
solution(text,num)