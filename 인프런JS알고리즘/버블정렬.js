/**
 * * 버블정렬 알고리즘: 이웃한 두 수끼리 비교해서 뒤에 오는 숫자가 작으면 앞의 숫자랑 바꿔주는 것.
 * * arr[j] > arr[j + 1] 일때 바꿈.
 * * i가 커질수록 j는 작아진다. 한번 loop를 전부 돌면, 가장 마지막 숫자가 제일 뒤로 가기 때문에.
 * * i < arr.length -1
 * * j < arr.length - i - 1
 *
 * * 문제: 오름차순으로 정렬된 수열을 출력하기
 *
 */

function solution(arr) {
  let answer = arr; //얕은 복사

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      //뒤에 숫자들을 돌지 않기 위해.
      if (arr[j] > arr[j + 1]) {
        //앞숫자가 뒷숫자보다 더 클때
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //자리 바꿔주기
      }
    }
  }

  return answer;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); //[5, 7, 11, 13, 15, 23]
