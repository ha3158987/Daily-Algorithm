//문제: 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
//예를 들어 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 86이므로 그 합은 256이 되고, 최소값은 41이 된다.

function solution (arr) {
  let answer = [];
  let sum = 0;
  let min = Infinity;
  for(let el of arr) {
    if(el % 2 === 1) {
      answer.push(el);
      sum += el;
      if(min > el) min = el;
    }
  }
  return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
//min의 초기값을 설정해줄 때:
//1. let min = Number.MAX_SAFE_INTEGER;
//2. let min = Infinity;