/*
21.08.02
첫 줄에 문자여링 입력된다. 문자열의 길이는 100을 넘지 않는다.
첫 줄에 대문자의 개수를 출력한다.
*/

//방법 1.
function solution (str) {
  let answer = 0;
  str.split('').forEach(el => {
    if (el.toUpperCase() === el) {
      answer++;
    }
  })
  return answer;
}

//대문자는 아스키코드로 65 ~ 90 까지
//방법 2.
function solution (str) {
  let answer = 0;
  str.split('').forEach(el => {
    const num = el.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  })
  return answer;
}

console.log(solution('KoreaTimeIsGooD'));//4