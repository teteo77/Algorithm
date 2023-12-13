let arr= [1,2,3,4,5]
console.log(arr)

function solution(num_list) {
    let reverse = [];
    for(let i= num_list.length -1; i>=0; i--){
        reverse.push(num_list[i]);
    }

    var answer = reverse;
    console.log(answer);
    return answer;
}

solution(arr);

// enter14짝수홀수 개수도 push쓴다
// 같이보면 좋다.