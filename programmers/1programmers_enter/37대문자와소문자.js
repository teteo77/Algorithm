// https://blacklobster.tistory.com/15
    // ㄴ 각 문자열 false인지 true인지 확인하고 대문자면 
    // 소문자로 소문자면 대문자로 바꿔보자


// https://summermong.tistory.com/124
function solution(my_string) {
    let arr = [];
    let a=[];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            arr.push(my_string[i].toLowerCase())
        } else {
            arr.push(my_string[i].toUpperCase())
        }
        a =arr.join('')
        console.log(a)
    } return a;
}

solution("cccCCC")