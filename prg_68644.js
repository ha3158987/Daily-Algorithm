//프로그래머스 level.1 #68644: 두 개 뽑아서 더하기 (재도전)
//https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

//지난번 풀이
function solution(numbers) {
    var answer = [];
    //배열에서 서로 다른 두 개의 수를 뽑아 더해서 만들 수 있는
    //자기가 위치한 인덱스 바로 다음 숫자부터 loop를 돌면서 조합을 구함.
    //구한 합은 answer배열에 push함. (똑같은 숫자가 이미 들어있지 않은 경우에만)
    //cur, idx
    numbers.forEach(function (cur, idx){
        if (idx === numbers.length - 1){
            //마지막 인덱스일때는 다음 숫자가 없으므로 그냥 리턴
            return;
        }

        for(let i = idx; i < numbers.length; i++){ //자기 자신부터 그 다음에 오는 숫자들만 loop를 돎.
            console.log("cur", cur);
            console.log("numbers[i]", numbers[i]);
            if (numbers[i + 1] === undefined){
                //numbers[idx + 1]가 undefined일 경우에는?
                return;
            }

            let sum = cur + numbers[i + 1];

            if (!answer.includes(sum)){
                answer.push(sum);
            }
        }
    })
    answer.sort(function (a, b){
        return a - b;
    })

     return answer;
}



//2021.02.20 오늘의 풀이
function solution(numbers) {
    const answer = [];
    let temp;

    numbers.forEach((e, idx) => {
        for(let i = 0; i < numbers.length; i++){
            if(idx !== i){
                temp = numbers[i] + e;
                if (!answer.includes(temp)) answer.push(tmep);
            }
        }
        answers = answers.sort((a, b) => a - b );
    })

    return answer;
}


//(사실 로그인이 되어있지않은 상태로 문제를 풀어서 풀었던 문제라는 걸 뒤늦게 알았지만) 언제 푼 건지는 몰라도 이전에 풀었던 방식이 있어 비교를 해보았다. 장점은 이전에 비해 푸는 속도가 현저하게 빨라졌다는 것이고, 단점은 방법에 있어서는 크게 달라진 점이 없다는 것이다. 심지어 예전에는 마지막 인덱스 요소는 반복을 돌지 않는 예외처리까지 해준 게 보여진다....ㄷㄷ. 학습방법이 어땠었는지 돌아보게 되는 것 같다. 똑같은 문제를 다시 풀어보는 게 좋다는 크롱의 말씀이 이런 것이었을까.
