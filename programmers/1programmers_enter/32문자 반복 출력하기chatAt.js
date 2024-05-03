// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 
// 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 문자열 하나를 3번 실행 시키기
// 배열이니까 푸쉬로 넣어줘야 하나?

function solution(my_string, n) {
    let result ="";

    for(i=0; i<my_string.length; i++){
        for(j=0; j<n; j++){
            result += my_string.charAt(i)
            console.log(result)
        }
    }

    var answer = result;
    return answer;
}

let text = "hello";
let repeat = 3;
solution(text, repeat)