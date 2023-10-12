let arr = [1,1,2,3,4,5,6,7,8,9,10];
let same_num=1;
let sum =0;

function solution(array, n) {
    for(let i=0; i<arr.length; i++){
        if(array[i] == n)
        sum +=1;
    }
    var answer = sum;
    console.log(answer)
    return answer;
}

solution(arr, same_num)


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let same_num=1;
// let sum =0;
// // console.log(arr)

// for(let i=0; i < arr.length; i++){
//     if(arr[i] == same_num){
//         sum += 1
//         console.log(sum)
//     }
// }

