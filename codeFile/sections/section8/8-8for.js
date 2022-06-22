// 중복 순열: 다중 for문과 재귀의 차이점

function solution(N,M){
    let cnt=0;
    for(let i=1;i<=N;i++){
        for(let j=1;j<=N;j++){
            console.log(`${i} ${j}`);
            cnt++;
        }
    }
    return cnt;
}

console.log(solution(3,2));