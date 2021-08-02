//프로그래머스 level.1 #12906: 같은 숫자는 싫어
//https://programmers.co.kr/learn/courses/30/lessons/12906

//제출 답안
function solution(arr) {
    const answer = [];
    arr.forEach((el, i) => {
      if (i === 0) answer.push(el);
      if (el !== arr[i - 1] && i !== 0) answer.push(el);
    })
    return answer;
}

/*웬일로 단박에 통과했다. 덕분에 기분좋게 다른 사람들의 풀이를 볼 시간도 있었는데 그 중에 필터를 사용해서 한 줄로 해결한 아래 풀이가 눈이 띄었다.
루프를 돌면서 현재 요소가 다음 차례에 오는 요소와 같지 않을 때만 새로운 배열에 넣어주는 방법! 그러니까 반복되는 숫자 중에 마지막에 오는 숫자들만 넣어주는 것이다. 대박. array메소드를 다양하게 사용하는 연습을 하자.*/
function solution(arr) {
    return arr.filter((el, i) => el !== arr[i + 1]);
}


