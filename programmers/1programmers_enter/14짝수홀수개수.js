let ven_number=[];
let odd_number=[];
let arr=[1,2,3,4,5,6,7,8,9,10,11]

function solution(num_list) {
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2 ==0){
            ven_number.push(num_list[i]);
        }else{
            odd_number.push(num_list[i]);
        }
    }
    var answer = [ven_number.length, odd_number.length];
    // console.log(answer)
    return console.log(answer);
}
solution(arr);




