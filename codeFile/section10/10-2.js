//돌다리 건너기
function solution(N){
    let answer;
    let dy=Array.from({length:N+2},()=>0); //건너서 땅까지 와야하기 때문에 n+1개가 도착지점
    dy[1]=1;
    dy[2]=2;

    for(i=3;i<=N+1;i++){
        dy[i]=dy[i-1]+dy[i-2];
    }
    answer = dy[N+1]; 
    return answer;
}

console.log(solution(7));

/*
돌 1 => 1
2 : 1 1, 2 => 2
3 : 

dy[n] = dy[n-1] + dy[n-2]
*/
