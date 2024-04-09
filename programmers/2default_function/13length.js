function solution(numbers) {
    let max=0;
    for(i=0; i<=numbers.length; i++){
        for(j=i+1; j<=numbers.length; j++){
            if(numbers[i] * numbers[j] > max){
                max = numbers[i] * numbers[j];
            }
            console.log(max);
        }
    }
    var answer = max;
    console.log("answer: ", answer)
    return answer;
}

let number = [1,2,3,4,5];
solution(number)

// i<=numbers.length와 j<=numbers.length로 설정했기 때문입니다. 
// 이 조건은 배열의 길이만큼만 반복하지 않고 배열의 길이보다 한 번 더 반복하게 됩니다.
// 이중 반복문에서 i와 j가 배열의 길이를 초과하여 인덱스를 참조하게 되는데, 
// JavaScript 배열의 인덱스는 0부터 시작하기 때문에 존재하지 않는 인덱스를 참조하면 undefined가 반환됩니다.

// 그러므로 undefined와 숫자를 곱하면 결과는 NaN(Not a Number)이 됩니다. 
// NaN이 max보다 큰지 여부를 비교하게 되면 항상 false가 반환됩니다. 
// 따라서 max값이 초기값인 0으로 유지되어 25가 최종 결과로 출력됩니다.
//  ㄴ 문제를 보면 배열에 요소 2개를 곱하라고 하는데 
//  자신과 자신을 곱하면 요소를 하나만 쓰는거기 때문에 25는 해당이 안되는것 같다.

