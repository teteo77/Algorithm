// replace(pattern, replacement)

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"
// replace(pattern, replacement)
    //ㄴ 글씨를 바꿀 문자열과 바꿔줄 문자열 순으로 매개변수를 넣어준다

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
    // ㄴ regex에 정규식으로 값을 찾아서 문자열로 바꿔준다.

