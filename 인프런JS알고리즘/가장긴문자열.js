/**
 * 첫 줄에 자연수 N이 주어진다. (3 <= N <= 30)
 * 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 * 각 문자열의 길이는 서로 다르다.
 * 
 * 첫 줄에 가장 긴 문자열을 출력한다.
 * 
 */

function solution (arr) {
  let answer, max = Number.MIN_SAFE_INTEGER; //가장 작은 숫자. 0을 넣어도 된다.
  arr.forEach(vocab => {
    if (vocab.length > max) {
      max = vocab.length;
      answer = vocab;
    }
  })
  return answer;
}

const arrStr = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(arrStr));