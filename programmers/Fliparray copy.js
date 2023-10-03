// let arr= [1,2,3,4,5]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// console.log("배열의 길이: "+ arr.length)
// console.log(arr)

// for(let i=arr.length-1; i >= 0; i--) {}

// console.log(1111)
// for(let i= arr.length-1; arr.lenght>0;i--){
//     console.log(11)
//     console.log(arr[i])
// }


// for(let i = arr.length - 1; i >= 0; i--) {
//     // console.log(11);
//     console.log(arr[i]);
// }

// function solution(num_list) {
//     for(let i= arr.lenght -1; i>=0; i++){
//         num_list = arr[i]
//     }
//     var answer = num_list;
//     return answer;
// }
// solution(arr);

// function solution(num_list) {
//     let sum=[];
//     for(let i= arr.lenght -1; i>=0; i++){
//         sum = arr[i]
//     }
//     console.log(sum.reverse)
//     var answer = sum;
//     return answer;
// }
// solution(arr);

let arr= [1,2,3,4,5]
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

// let arr= [1,2,3,4,5]
// let answer;
// function solution(num_list) {
//     let reverse = [];
//     for(let i= num_list.lenght -1; i>=0; i--){
//         reverse.push(num_list[i]);
//     }
//     answer = reverse;
//     console.log(answer);
//     return answer;
// }

// solution(arr);

// function reverseArray(arr) {
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     return reversedArray;
// }

// let originalArray = [1, 2, 3, 4, 5]; // 예시 배열
// let reversedArray = reverseArray(originalArray);
// console.log(reversedArray); // [5, 4, 3, 2, 1]