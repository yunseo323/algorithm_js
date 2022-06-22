//인접행렬
function solution(n, arr){ 
    let answer=0; //총 가짓수
    let path=[];
    let graph=Array.from(Array(n+1),()=>Array(n+1).fill(0));
    let check=Array.from({length:n+1},()=>0); 
    for(let [a,b] of arr) graph[a][b]=1; // 방향 그래프
    function DFS(v){ //1~n
        if(v===n){
            answer++;
            console.log(path); //경로 출력하기
        }
        else{
            for(let i=1;i<=n;i++){
                if(graph[v][i]===1&&check[i]===0){
                    check[i]=1;
                    path.push(i);
                    DFS(i);
                    check[i]=0;
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    check[1]=1; //주의: DFS 시작하기 전에 1로 체크를 해주고 시작해야함
    DFS(1);
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));

/*
DFS 완전탐색
- 정점을 지나갈때 check 해야함
- 각 정점에서 갈 수 있는 길을 탐색함
1->2->1
    ->3
    ->5
 ->3
 ->4

- 끝까지 탐색했다면 다시 거꾸로 나오면서 check를 푼다

*/