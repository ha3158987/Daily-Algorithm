//회문 문자열

/*문제:

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다. 문자열이 입력되면 해당 문자열이 회문 문자열이면 'YES', 회문 문자열이 아니면 'NO'를 출력하는 프로그램을 작성하세요. 단, 회문을 검사할 때 대소문자를 구분하지 않습니다.

첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
*/

/*
풀이방법:
만약 길이가 5라고 하면 인덱스 0과 4, 1과 3을 비교해서 같은지를 확인한다.
즉, '길이 / 2'(몫) 만큼만 돌면 된다. Math.floor() => 내림
가운데 인덱스에 해당하는 숫자는 비교할 필요가 없음.
같을 경우 회문문자열.

*/
//Solution 1.
function solution (s) {
  let answer = 'YES';
  let len = s.length;
  s = s.toLowerCase();

  for(let i = 0; i < Math.floor(len / 2); i++) {
    if(s[i] !== s[len - i - 1]) return 'NO';
  }
  return answer;
}


//Solution 2.
function solution (s) {
  let answer = 'YES';
  s = s.toLowerCase();
  if (s !== s.split('').reverse().join('')) return 'NO';
  
  return answer;
}

console.log(solution('goooG'));
