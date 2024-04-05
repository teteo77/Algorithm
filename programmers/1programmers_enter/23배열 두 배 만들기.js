let num= [1,2,3,4,5]
let d_num=[];

function solution(numbers) {
    for(i=0; i<numbers.length; i++){
        d_num.push(numbers[i]*2);
    }
    var answer = d_num;
    console.log(answer)
    return answer;
}

solution(num)
