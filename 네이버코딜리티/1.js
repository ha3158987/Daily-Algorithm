//Naver 인턴십 코딜리티 테스트

/*
1.
- A 배열에 들어가는 숫자 중 가장 많이 등장하는 횟수를 반환하기
- A 배열을 순회하면서 요소를 object의 key로, 등장횟수를 value로 저장한다.
- 1번 이상 등장한 숫자가 없으면 0을 반환
*/

function solution(A) {
  const temp = {};
  const passed = {}; //자기 자신의 크기만큼 등장한 숫자들을 [key, value]로 저장.
  let max = 0;

  A.forEach(el => {
    const key = JSON.stringify(el);
    temp[key] ? temp[key]++ : temp[key] = 1;

    console.log("temp:", temp);
  })

  for(const [key, value] of Object.entries(temp)) {
    if (Number(key) === value) {
      passed[key] = value;
    }
    console.log("passed", passed);
  }

  for(const [key, value] of Object.entries(passed)) {
    if (value > max) max = value;
  }

  return max;
}

console.log(solution([9, 7, 3, 3, 3, 1, 5]));
