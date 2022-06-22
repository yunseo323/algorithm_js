//인접리스트
function solution(n, arr){ 
    let answer=0; //총 가짓수
    let path=[];
    let graph=Array.from(Array(n+1),()=>Array()); //행은 n+1개, 빈 배열을 각 열에 넣어줌
    let check=Array.from({length:n+1},()=>0); 
    for(let [a,b] of arr) graph[a].push(b); // 인접리스트 사용하는 법
    function DFS(v){ //1~n
        if(v===n){
            answer++;
            console.log(path); //경로 출력하기
        }
        else{
            for(let i=0;i<=graph[v].length;i++){ 
                let nd = graph[v][i];
                if(check[nd]===0){
                    check[nd]=1;
                    path.push(nd);
                    DFS(nd);
                    check[nd]=0;
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
인접리스트 담기 -> 인접 행렬과 차이점 파악하기

id 0 1 2 3 4 5
   ============
 1 2 3 4
 2 1 3 5
 3 4
 4 2 5  
*/