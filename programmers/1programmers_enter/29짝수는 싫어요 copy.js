// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 
// return하도록 solution 함수를 완성해주세요.
// 일단 홀수를 구하는 코드 만들기


function solution(n) {
    for(i=0; i<n.length; i++){
        // console.log(arr[i]%2 == 1)
        let aa= n[i]%2 == 1;
        console.log(aa)
    }
    var answer = [];
    return answer;
}


let arr = [1, 3, 5, 7, 9, 11, 13, 15];
solution(arr)