

function solution(my_string){
    let arr = [];
    let a = [];
    for(let i=0; i<my_string.length; i++){
        if(my_string[i] === my_string[i].toUpperCase()){
            arr.push(my_string[i].toLowerCase())
        } else {
            arr.push(my_string[i].toUpperCase())
        }
        a = arr.join('');
        console.log(a)
    } return a;
}
solution("cccCCC")

