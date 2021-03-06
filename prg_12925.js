//프로그래머스 level.1 #12925: 문자열을 정수로 바꾸기
//https://programmers.co.kr/learn/courses/30/lessons/12925

//제출 답안:
function solution(s) {
    let answer = '';
    const temp = s.split("");
    temp.map(el => {
        if (typeof el === "string") answer += el;
    });
    answer = answer * 1;
    return answer;
}

//시행착오가 많지는 않았는데, 다른 사람의 풀이를 보면서 '이렇게 쉽다고?' 싶은 생각이 들어서 가져왔다. 자바스크립트는 사칙연산을 하면서 강제타입변환이 일어난다!!! 잊지말 것!!!
function solution(str) {return +str};
function solution(str) {return str/1};
