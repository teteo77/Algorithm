let my_strin = "abcdef"
let lette = "f"

function solution(my_string, letter) {
    
    var answer = my_string.replaceAll(letter,"");
    console.log(answer)
    return answer;
}

solution(my_strin, lette)

// https://sg-coding.tistory.com/entry/%ED%8A%B9%EC%A0%95-%EB%AC%B8%EC%9E%90-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
    // ㄴ 이렇게도 해보자