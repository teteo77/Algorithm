// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.


// shift: 배열의 가장 첫 번째 원소를 제거하고 제거된 요소를 반환
// unshift: 배열의 앞쪽에 데이터를 삽입하고 삽입 된 배열의 길이를 반환

// pop: 배열의 가장 마지막 원소를 제거하고 제거된 요소를 반환
// push: 배열의 뒷쪽에 데이터를 삽입하고 삽입 된 배열의 길이를 반환

// concat()

let arr = [1, 2, 3];
let arrow = "left"

function solution(numbers, direction) {
    let num = 0;
    if(direction == "right"){
        let num = numbers.pop()
        numbers.unshift(num)
        console.log(numbers)
        return numbers;
    }else{
        let num = numbers.shift()
        numbers.push(num);
        console.log(numbers)
        return numbers;
    }

    var answer = numbers;
    return answer;
}
solution(arr,arrow)