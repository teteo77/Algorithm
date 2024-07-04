// Array.map() 메소드는 콜백 함수를 이용해 
// 각각의 요소에 호출해서 그 값을 변환할 수 있게 해줍니다. 
// 다시 말하자면 콜백 함수는 배열의 각 요소에 실행됩니다.

// 예를 들어 다음과 같은 배열 요소가 있다고 가정해 봅시다

let arr = [3, 4, 5, 6];

// 이제 배열의 각 요소에 3을 곱해야 한다고 상4상해 봅시다. 
// 다음과 같이 for 루프 사용을 고려할 지도 모릅니다:

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}
console.log(arr); // [9, 12, 15, 18]

// 그러나 사실 Array.map() 메소드를 사용한다면 이런 동일한 결과를 얻을 수 있습니다. 다음은 그에 대한 예시입니다:

let modifiedArr = arr.map(function(element){
    return element *3;
});
console.log(modifiedArr); // [9, 12, 15, 18]

// 일반적으로 Array.map() 메소드는 위의 코드에서와 같이 특정 숫자를 곱하거나, 
// 애플리케이션에 필요한 다른 작업을 수행하는 등 요소에 어떤 변경 사항을 적용하는 데 사용됩니다.


// 객체 배열에서 map()을 사용하는 방법
// 예를 들어, 당신의 친구들의 firstName 및 lastName의 값을 저장하는 객체 배열이 있습니다:

// 다음과 같이 map() 메소드를 사용하여 배열을 순환하며 처리해서 firstName 및 lastName 값을 결합할 수 있습니다:

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]


// 출저:https://www.freecodecamp.org/korean/news/javascript-map-method/