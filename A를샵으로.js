/*
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
*/

//반복문으로 사용한 방법
function solution(str) {
  let answer = "";
  for(let l of str) {
    if (l === "A") {
      answer += '#';
    } else {
      answer += l;
    }
  }

  return answer;
}

//정규표현식을 사용한 방법
function solution(str) {
  str = str.replace(/A/g, '#');
  return str;
}

let str = "BANANA";
console.log(solution(str))