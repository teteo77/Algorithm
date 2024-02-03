let arr=[149, 180, 192, 170];
let h=167;

function solution(array, height) {
    let h_count=0;

    for(i=0; i<array.length; i++){
        if(array[i]>height){
            h_count +=1;
        }
    }
    
    var answer = h_count;
    console.log(answer)
    return answer;
}

solution(arr,h);
