
//문제: 연필 1 다스는 12자루입니다. 학생 1인당 연필 1자루라고 할 때, N명의 학생 수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
  function solution(n){
    return Math.ceil(n / 12);
  }
  console.log(solution(25));
  console.log(solution(178));
//Math.floor()는 내림, Math.ceil()은 올림. 나머지가 있을 경우 다스 수에 +1을 해야하므로 '올림'이 된다.