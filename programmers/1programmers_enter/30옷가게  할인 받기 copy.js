let num=0;
function solution(price) {
    if (price >= 100000 && price < 300000) {
        console.log(Math.floor(price * .95))
        return Math.floor(price * .95)
    } else if (price >= 300000 && price < 500000) {
        console.log(Math.floor(price * .9))
        return Math.floor(price * .9)
    } else if (price >= 500000) {
        console.log(Math.floor(price * .8))
        return Math.floor(price * .8)
    } else {
        return price
    }
}

solution(150000)