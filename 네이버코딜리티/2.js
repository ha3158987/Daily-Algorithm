/*
2.
- 배열에 중복 숫자가 있으면 안됌.
- 중복 숫자를 없애는 가장 적은 이동 수? (한번에 1씩 증가하거나 뺄 수 있음)를 반환.
- 1,000,000,000 보다 숫자가 클 경우 -1을 리턴한다.
- 중복되는 숫자가 2개이상인 경우도 고려해야함.
- 중복되는 숫자에서 중복되지 않는 가장 가까운 숫자를 찾아야한다. => 함수 하나 만들기
- A를 돌면서 각 요소가 중복되지 않는 가장 가까운 숫자까지의 거리를 저장한다.
- 가장 가까운 거리를 반환한다.
*/


function solution(A) {
  A = A.sort((a, b) => a - b);
  let result = 0;
  let max = Math.max(...A);
  let min = Math.min(...A);

  //중복되는 요소들 찾기
  const duplicated = A.map(el => {
    if (A.indexOf(el) !== A.lastIndexOf(el)) return el;
  })

  let add = 0;
  let subtract = 0;

  for(let i = 0; i < duplicated.length; i++) {
    //배열에서 가장 큰 숫자이거나 가장 작은 숫자이면 바로 1을 리턴해버리면 된다.
    let cur = duplicated[i];
    if (cur === max || cur === min) return 1;
    // 중복되지 않는 가장 가까운 숫자 구하기
    // let idx = A.indexOf(cur);

    // let addGap = duplicated[idx + 1] - cur - 1;
    // if (addGap > add) add = addGap;

    // let subGap = cur - duplicated[idx - 1] - 1;
    // if (subGap > subtract)
  }

  function findClosestNotDupNum (num) {
    let gap;

    
  }



  return result === 1,000,000,000 ? -1 : result;
}


console.log(solution([1, 2, 1])) //2
console.log(solution([2, 1, 4, 4])) //1
console.log(solution([6, 2, 3, 5, 6, 3])) //4