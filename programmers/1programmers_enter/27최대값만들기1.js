let number = [1,2,3,4,5];
// console.log(number)

function solution(numbers) {
    let for_i= 0;
    let for_j=0;
    let sum=0;
    for(i=0; i<numbers.length; i++){
        for(j=0; j<numbers.length; j++){
            sum= numbers[i]*numbers[j]
            console.log(sum)
        }
    }
    var answer = 0;
    return answer;
}

solution(number)