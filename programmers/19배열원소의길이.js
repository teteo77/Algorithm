let text= ["We", "are", "the", "world!"]
let arr = [];

function solution(strlist) {
    var answer = [];
    for(var i = 0; i < strlist.length; i++){
        answer[i] = strlist[i].length; 
        console.log(answer)
    }
    return answer;
}
solution(text);



// let text= "str list";
// let arr = [];

// for(let i=0; i< text.length;i++){
//     // 만약에 스페이스 바가 나오면 스페이스바 다음 문자를 1부터 다시 세아리게 하기
//     if(text[i] == " "){
//         console.log("스페이스 바입니다.")
//     }
//     for (let i = 0; i < text.length; i++) {
//         arr.push(text[i].length);
//         console.log(arr)
//       }
// }

