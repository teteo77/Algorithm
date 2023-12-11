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

// num_list.length을 lenght로 줘서 오타나서 값을 못 읽어 오는 거 였다
// num_list.legnth를 arr.length로 선언하고
// reverse.push(num_list[i]); 로 써준것도 틀린것 같다