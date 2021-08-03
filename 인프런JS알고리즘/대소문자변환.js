/**
대문자는 소문자로, 소문자는 대문자로 변환해서 출력하기
 */

function solution (str) {
 let answer = '';
 for (let letter of str) {
   if (letter === letter.toUpperCase()) answer += letter.toLowerCase();
   else answer += letter.toUpperCase();
 }
 return answer;
}


console.log(solution('StuDY'));
console.log(solution('HiThisIsHyunaSPEAKING'))