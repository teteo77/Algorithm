// while 문은 조건문이 참인 동안 while 문에 속한 문장들이 반복해서 수행된다.
// ‘열 번 찍어 안 넘어가는 나무 없다’라는 속담을 파이썬 프로그램으로 만들면 다음과 같다.

let treeHit = 0;
while (treeHit < 10)
	treeHit += treeHit +1
	console.log("나무를 " + treeHit +"번 찍었습니다.")
if(treeHit == 10)
    console.log("나무 넘어갑니다.")