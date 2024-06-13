// 정수 배열 array가 매개변수로 주어질 때, 
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.


// let num = [9, 10, 11, 8,2,3,4];
let num = [1, 8, 3]

function solution(array) {
    let max = 0;
    let index = 0;
    
    for(i=0;i<array.length; i++){
        if(max<array[i]){
            max = array[i]
        }
    }
    var answer = [max, array.indexOf(max)];
    console.log(answer)
    return answer;
}
solution(num)