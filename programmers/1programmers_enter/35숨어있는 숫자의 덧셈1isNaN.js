// 문자열 my_string이 매개변수로 주어집니다. 
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 정규식이란?
    // ㄴ 정규식은 특별한 문자열의 집합(패턴)을 표현하는 언어 입니다.



function solution(my_string) {
    let sum = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (isNaN(my_string[i]) === false) {
            sum += Number(my_string[i])
        } 
    } 
    console.log(sum)
    return sum
}

solution("12edwde43")