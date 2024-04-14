function solution(array) {
    // 배열 길이 중 중앙값 (중간 index) 찾기
    const mid_num = Math.floor(array.length / 2);
  
    // 오름차순으로 정렬하기 - sort() 메서드 사용
    const asc_array = array.sort((a, b) => a - b);
  
    console.log(asc_array[mid_num])
    // 오름차순된 새로운 배열 중 중간 index 반환하기
    return asc_array[mid_num];
  }

arr = [1, 2, 7, 10, 11]
solution(arr)