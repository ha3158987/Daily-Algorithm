/*
입력되는 모든 글자를 대문자로 바꾸어 출력한다.

기억하기!!!
아스키코드로 변환해서 97 ~ 122 사이라면 소문자!!
대문자는 아스키코드로 65 ~ 90 까지
각 대문자와 소문자는 "32"만큼 차이가 남.
*/

//방법1.
function solution (str) {
  let answer = '';
  str.split('').forEach(letter => {
    answer += letter.toUpperCase()
  })
  return answer;
}

//방법2.
function solution (str) {
  let answer = '';
  str.split('').forEach(letter => {
    let aski = letter.charCodeAt();
    if (aski >= 97 && aski <=122) answer += String.fromCharCode(aski - 32);
    else answer += letter;
  })
  return answer;
}


//방법3.
function solution (str) {
  let answer = '';
  str.split('').forEach(num => {
    if (num === num.toLowerCase()) answer += num.toUpperCase();
    else answer += num;
  })
  return answer;
}

const string = 'ItisTimeToStudy';
console.log(solution(string));
console.log(string.toUpperCase()) //사실 이렇게 한방에 하는 것도 가능.