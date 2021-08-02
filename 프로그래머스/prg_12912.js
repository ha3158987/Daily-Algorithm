//프로그래머스 level.1 #12912: 다른 사람의 풀이
//https://programmers.co.kr/learn/courses/30/lessons/12912/solution_groups?language=javascript&type=my

//제출 답안:
function solution(a, b) {
    let arr = [];
    if (a === b) return a;
    else if (a < b) {
        for(let i = a + 1; i < b; i++) {
            arr.push(i);
        }
    } else if (b < a) {
        for(let i = b + 1; i < a; i++) {
            arr.push(i);
        }
    }
    const answer = arr.reduce((acc, el) => acc += el, a + b);
    return answer;
}

//기억에 남는 다른 분들의 답변:
function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}
//a와 b중에 최소값과 최대값이 당연히 나올테고, for문으로 누적값을 계산한 게 인상적이다. 이래서 어떤 메소드들이 있는지를 평소에 잘 알고 있는 게 중요한 것 같다. 굳!