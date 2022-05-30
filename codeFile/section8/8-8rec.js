// 중복 순열: 다중 for문과 재귀의 차이점
function solution(N,M){
    let answer=[]; //정답을 배열로 리턴할 예정, 때마다 출력 x
    let tmp=Array.from({length:M},()=>0);
    function DFS(L){
        if(L===M){ //깊이가 M이라면!!
            answer.push(tmp.slice());
        }
        else{
            for(let i=1;i<=N;i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }
    }
    DFS(0);
    return answer;
}
console.log(solution(3,2));

/*
                 DFS(0)
            tmp[0]=1
            DFS(1)
        tmp[1]=1 , 2 ->1,2
        DFS(2) -> 1,1

*/
/*
function solution(N,M){
    let cnt=0;
    function DFS(L,c){
        if(L>N) return; //종료
        else{
            if(c>N){
                L+=1;
                c=1;
            }
            console.log(L,c);
            DFS(L,c+1);
            cnt++;
        }
    }
    DFS(1,1);
    return cnt;
}
*/