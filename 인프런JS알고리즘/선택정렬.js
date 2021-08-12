/**
 * 문제: 오름차순으로 정렬된 수열을 출력하기
 *
 * * 배열을 순회할 때 i와 j라는 두 포인터를 잡는다. i를 한칸씩 옮겨가면서 arr[i] > arr[j]를 비교한다.
 * * 이때 idx라는 변수를 선언해서 매 순회마다 현재 i값으로 idx에서 갱신하여 재할당한다.
 * * arr[i]가 arr[j]보다 크다면, idx는 j가 된다.(idx = j)
 * * 그리고 arr[i]와 arr[j]는 자리를 바꿔준다.
 * * 즉, i번째에 올 수 있는 숫자를 매 회마다 전부 탐색해서 가장 작은 숫자를 arr[i]자리로 바꿔주는 방식.
 *
 * */

function solution(arr) {
  //얕은 복사
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i; //최소값의 위치 저장
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j; //j로 최소값의 위치를 갱신
    }
    //최신 자바스크립트 문법: 이렇게 하면 서로의 자리를 바꿀 수 있음.
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
