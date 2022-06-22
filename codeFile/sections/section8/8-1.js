function solution(N){
    function DFS(r){
        if(r===1) return 1;
        else return r+DFS(r-1);
    }
    return DFS(N);
} 

console.log(solution(3));