//21.08.02

/*
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
첫 줄에 해당 문자의 개수를 출력한다.
*/

//방법 1
function solution (str, t) {
  let count = 0;
  str.split('').forEach(el => {
    if (el === t) count++;
  })
  return count;
}

//방법 2
//t가 구분자가 되면 t 개수를 기준으로 잘린 배열이 생기기 때문에 해당 배열의 길이를 세면 된다.
function solution (str, t) {
  let answer = str.split(t); 
  return answer - 1;
}


console.log(solution("COMPUTERPROGRAMMING", "R")) //3
console.log(solution("COMPUTERPROGRAMMING", "G")) //2