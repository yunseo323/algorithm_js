function solution(N,F){
    let answer;
    let dy=Array.from(Array(11),()=>Array(11).fill(0));
    let ch=Array.from({length:N+1},()=>0); //순열 체크 표시
    let tmp=Array.from({length:N},()=>0);
    let b=Array.from({length:N},()=>0); //조합 값 구해둠

    function combi(n,r){ //조합
        if(dy[n][r]>0) return dy[n][r];
        if(n===r||r===0) return 1;
        else return dy[n][r]=DFS(n-1,r-1)+DFS(n-1,r);
    }
    function DFS(L,sum){ //sum이 파이널 값
        if(L===N && sum===F){
            answer=tmp.slice();
        }
        else{
            for(let i=1;i<=N;i++){
                if(ch[i]===0){
                    ch[i]=1;
                    tmp[L]=i;
                    DFS(L+1,sum+(b[L]*tmp[L]));
                    ch[i]=0;
                }
            }
        }
    }

    for(let i=0;i<N;i++){ //조합 값
        b[i]=combi(N-1,i);
    }
    DFS(0,0);
    return answer;
}

console.log(solution(4,16));

/*
다시 해결하기
파스칼의 삼각형처럼 생각하기 -> 조합 이용하기

3 1 2 4
 4 3 6
  7 9
   16

-> 계산해 보면 3*3C0 + 1*3C1 + 2*3C2 + 4*3C3
*/