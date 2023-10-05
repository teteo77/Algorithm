let ven_number=[];
let odd_number=[];
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum= [];

for(let i=0; i<arr.length; i++){

    if(arr[i]%2 ==0){
        ven_number.push(arr[i]);
        // console.log(ven_number);
        // console.log(ven_number.length);
    }else{
        odd_number.push(arr[i]);
        // console.log(odd_number);
        // console.log(odd_number.length);
    }
    // console.log(ven_number,odd_number);
}
sum = [ven_number.length,odd_number.length];
console.log(sum);

// ================================================================
// for(let i=0; i<arr.length; i++){
//     // console.log("출력확인")
//     // 만약에 몫이 짝수가 아니면
//     if(arr[i]%2 ==0){
//             console.log("짝수입니다")
//     }else{
//         console.log("홀수입니다")
//     }
// }
// typeof(arr)



// if(8%2 ==0){
//     console.log("짝수입니다")
// }else{
//     console.log("홀수입니다")
// }



