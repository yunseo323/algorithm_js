function solution(arr,M){ //동전 종류, 거슬러 줄 금액
    let min=Number.MAX_SAFE_INTEGER;
    let N=arr.length;
    
    function DFS(L,sum){
        if(sum>M) return;
        if(L>=min) return; //더 세지 않아도 됨
        if(sum===M){
            min=Math.min(min,L);
        }
        else{
            for(let i=0;i<N;i++){ //DFS 안의 for 문을 이해하는 것이 핵심(왜쓰는지)
                DFS(L+1,sum+arr[i]);
            }
        }
    }
    DFS(0,0);
    return min;
}

let arr=[1,2,5];
console.log(solution(arr,15));

/*
DFS로 풀면 깊이(L)의 최소를 직관적으로 구할 수 있다 

                     DFS(0,0)
            DFS(1,1) DFS(1,2) DFS(1,5) -> 인덱스는 0,1,2(for문)
DFS(2,2)  DFS(2,3)  DFS(2,6) ...
*/