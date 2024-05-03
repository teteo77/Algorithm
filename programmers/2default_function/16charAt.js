// charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`${"베리에이블: "+index} is ${"문자열 index값 반환: "+sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"