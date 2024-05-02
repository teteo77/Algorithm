// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.



function solution(price) {
    let num=0;
    if(price >= 100000 && price < 300000){
        num = Math.floor(price * .95)
        console.log(".95: "+num)
    }else if(price >= 300000 && price < 500000){
        num = Math.floor(price * .9)
        console.log(".9: "+num)
    }else if (price >= 500000){
        num = Math.floor(price * .8)
        console.log(".8: "+num)
    }else{
        return price
    }
    var answer = num;
    return answer;
}
solution(500000)

// 2

// function solution(price) {
//     let num=0;
//     if(price>500000){
//         num =  price * .8
//     }else if (price> 300000){
//         num =  price * .9
//     }else if (price> 100000){
//         num =  price * .95
//     }
//     var answer = num;
//     return answer;
// }
// solution(500000)


// 1

// let num=0;
// function solution(price) {
//     if(price >= 100000){
//         num= price * .95
//         console.log(".95: "+num)
//     }else if(price >= 300000){
//         num= price * .9
//         console.log(".9: "+num)
//     }else if (price >= 500000){
//         num = Math.floor( price * .8)
//         console.log(".8: "+num)
//     }else{
//         return price
//     }
//     var answer = num;
//     return answer;
// }
// solution(500000)

// let num=1234124124;
// console.log(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
