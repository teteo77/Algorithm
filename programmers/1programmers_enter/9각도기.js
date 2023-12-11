function solution(angle) {
    if(angle<90){
        return console.log(1);
    }else if(angle == 90){
        return console.log(2);
    }else if(angle < 180){
      return console.log(3)
    }else if(angle == 180){
      return console.log(4)
    }
  }
  solution(125)