//계단 오르기
function solution(N){
    let answer=0;
    let dy=Array.from({length:N+1},()=>0); //dynamic
    dy[1]=1;
    dy[2]=2;

    for(i=3;i<=N;i++){
        dy[i]=dy[i-1]+dy[i-2];
    }
    answer = dy[N];
    return answer;
}

console.log(solution(7));

/*
점화식을 먼저 만들어보자.

계단 1을 올라가는 방법 => 1
2 : 1+1 =>2
3: 1+1+1 1+2 2+1 =>3
4: 1+1+1+1 1+2+1 1+1+2 2+1+1 2+2 =>5
5: 1+1+1+1+1 1+1+1+2 1+2+2 =>1+4+3 =>8 

dy[n]=dy[n-1]+dy[n-2]
*/