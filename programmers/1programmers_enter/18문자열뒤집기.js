// 배열에 담아서 뒤집는게 아니라 
    // ㄴ 그냥 문자열을 뒤집는 함수를 이용해서 리턴하면 된다.
let text ="text retrun push reverse"

function solution(my_string) {
        let answer = my_string.split("").reverse().join("");
        console.log("원래 문자열: ",my_string);
        console.log("뒤집어진 문자열: ",answer);
        return answer;
    }
solution(text);
