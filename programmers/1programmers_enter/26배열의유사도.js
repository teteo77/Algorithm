let s1= ["a", "b", "c",];
let s2= ["com", "b", "d", "p", "c"];


function solution(s1, s2) {
    let sum=0;
    for(i=0; i<s1.length; i++){
        for(j=0; j<s2.length; j++){
            if(s1[i] == s2[j]){
                sum +=1
            }
        }
        console.log(sum)
    }
    var answer = sum;
    return answer;
}

solution(s1, s2);