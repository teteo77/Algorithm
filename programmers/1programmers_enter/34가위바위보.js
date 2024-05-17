
function solution(rsp){
    var answer ='';
    for(var i=0; i<rsp.length; i++){
        if(rsp[i]== 2){
            answer +=0
        }else if(rsp[i]== 0){
            answer +=5;
        }else if(rsp[i]== 5){
            answer +=2
        }
    }console.log(answer)
    return answer;
}

let sum =[2,0,5]
solution(sum)