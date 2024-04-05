let number= [1,2,3,4,5];
let num1= 1;
let num2= 3;

// console.log(number.slice(num1, num2+1))

function solution(numbers, num1, num2) {
    console.log(numbers.slice(num1,num2+1))
    var answer = numbers.slice(num1,num2+1);
    return answer;
}

solution(number,num1,num2)