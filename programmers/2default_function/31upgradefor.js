// for in문
// array 위치에는 항상 배열이 위치
// index 이름은 index가 아니어도 괜찮다.
// for in문은 배열에 길이만큼 실행되며 배열에 번호를 순차적으로 index변수에 담는다.
const array = ["문동은", "손명오", "박재준", "이사라", "최혜정"];
for (let index in array) {
    console.log("array: "+index);
}

// for of문
// array 위치에는 항상 배열이 위치
// value 이름은 value가 아니어도 괜찮다.
// for of문은 배열에 길이만큼 실행되며 배열안에 값들을 순차적으로 value변수에 담는다.

const array2 = ["문동은", "손명오", "박재준", "이사라", "최혜정"];
  for (let value of array2) {
    console.log("array2: "+value);
  }