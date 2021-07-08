//문제: 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution (arr) {
  return Math.min(...arr);
}

console.log(solution([5, 67, 13, 2, 7, 11]))
//Math.min()은 인자로 자연수를 받는다. 따라서 arr의 경우 spread operator로 펼쳐서 인자를 전달해야 한다.