let arr2= [2, 1, 3, 2];
let local=2;
// priorities 우선도
function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let max_value = Math.max(...priorities);

    //위치 배열 만들기
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }

   //priorities 배열이 비어있을 때까지 반복
    while(priorities.length != 0){
        // Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.
         max_value = Math.max(...priorities);
        
        if(priorities[0] < max_value){
            // shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
            priorities.push(priorities.shift());
            // 
            arr.push(arr.shift());
        }else {
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}
console.log(solution(arr2,local))

