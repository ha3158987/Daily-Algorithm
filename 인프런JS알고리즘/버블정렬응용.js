/**
 * N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
 * 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
 * 또한 양의 정수와 음의 정수의 순서에는 변함이 없어야 한다.
 *
 * 첫 번째 줄에 정수 N(5 <= N <= 100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진다. 숫자 0은 입력되지 않는다.
 *
 * * 앞에가 양수고 뒤에가 음수면 무조건 서로 순서를 바꿔주는 것.
 * * 음수들끼리의 순서와 양수들끼리의 순서는 바뀌지 않아야 함.
 *
 */

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

const arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr)); //[-3, -2, -6, 1, 2,  3,  5, 6]
