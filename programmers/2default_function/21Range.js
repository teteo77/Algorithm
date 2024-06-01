// javascript의 내장 함수가 아니여서 만들어서 써줘야 한다.

// 시작과 끝 출력
function range (start, end) {
    let array=[];
    for(let i=start; i<end; i++){
        array.push(i);
    }
    return array;
}
console.log(range(1,10))

function range(start, count){
    let array = [];
    while(count--) {
        array.push(start++);
    }
    return array;
}

function range(start, end, step=1){
    let array = [];
    for (let i= start; i<end; ++i){
        if(!(i % step)){
            array.push(i);
        }
    }
    return array;
}
console.log(range(0, 5));
console.log(range(0, 20, 5));
