// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
let num=0;
function solution(price) {
    if(price >= 100000){
        num= price * .95
        console.log("sdsd: "+num)
    }
    var answer = 0;
    return answer;
}


solution(150000)

// let num=1234124124;
// console.log(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
