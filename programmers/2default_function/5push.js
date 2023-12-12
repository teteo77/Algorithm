// push() 메서드는 배열에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// 11배열의 평균값

function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++){
     sum += arr[i];   // 배열의 요소들을 하나씩 더한다.
    }
    console.log(sum);
    // console.log(answer = sum / arr.length);
    return console.log(answer = sum / arr.length); // 더한 값과 배열의 길이(=요소 갯수)를 나눈다.
}

let arr=[1,2,3,4,5,6,7,8,9,10];

solution(arr)