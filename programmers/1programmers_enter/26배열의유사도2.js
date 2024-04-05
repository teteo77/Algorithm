let s1= ["a", "b", "c"];
let s2= ["com", "b", "d", "p", "c"];

function solution(s1, s2) {
    var answer = 0;

    for (var i = 0; i < s1.length; i++){
        // console.log(s1[i])
        for (var j = 0; j < s2.length; j++){
            // console.log(s2[i])
            if(s1[i] === s2[j]) answer++;
        }
        console.log(answer)
    }
    return answer;
}

solution(s1, s2)

// https://dogcoding.tistory.com/24
//     ㄴ 위 코드를 화살표 함수로 바꿔 보자
