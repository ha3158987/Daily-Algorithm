//프로그래머스 level.1 #42576: 완주하지 못한 선수
//https://programmers.co.kr/learn/courses/30/lessons/42576

//첫 번째 시도: forEach를 쓰는 게 너무 식상한 것 같아서 해봤지만, 선수이름이 중복되는 순간 무너진다.
function solution(participant, completion) {
    var answer;

    answer = participant.filter(e => !completion.includes(e));
    return answer[0];
}

//두 번째 시도: 테스트 케이스는 통과했는데, 시간초과가 떠서 실패.
function solution(participant, completion) {
    let answer;
    participant.forEach((e) => {
        if (completion.includes(e)){
            const i = completion.indexOf(e);
            const removed = completion.splice(i, 1);
        } else {
            answer = e;
        }
    });
    return answer;
}

//세 번째 시도: 난생 처음 map을 써보겠다고 덤벼봤으나 중복체크에서 다시 실패. 시간도 많이 지나고 김이 빠져서 다른 사람들의 풀이를 보기로 했다.
function solution(participant, completion) {
    let map = new Map();
    let answer;

    participant.forEach(e => {
        if (completion.includes(e)){
            //동명이인 체크
            if(map.get(e)){
                let count;
                map.set(e, map.get(e) + 1);
                for(let i = 0; i < completion.length; i++){
                    if (completion[i] === e) count++;
                }
                if (count !== map.get(e)) return e;
            }
            //map에 데이터 추가
            map.set(e, 1);

        } else {
            answer = e;
        }
    });
    return answer;
}

//제출 답안: 결국 블로그 후기를 참고했다. 두 배열의 정렬을 같게 하려는 생각까지는 했었는데... 왜 이걸 해볼 생각을 못했을까.
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

//총평: 처음 문제를 읽었을때 쉬운 편인것 같다는 느낌을 받았었는데 섣부른 판단이었나보다. 생각보다 예외처리나 시각복잡도 등 생각해야 할 것이 많았고, 푸는 시간도 예상을 훨씬 뛰어넘었다. 이런 유형의 문제들을 풀면서 자료구조를 어떻게 활용해야 할 지를 더 생각해봐야 할 것 같다. 그래도 Map을 써보려고 했던 시도는 좋았다고 생각된다.