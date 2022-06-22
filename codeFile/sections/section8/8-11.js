function solution(N){
    function DFS(k){
        if(k===1) return 1;
        else{
            return k*DFS(k-1);
        }
    }
    return DFS(N);
}

/* -> 내풀이
function solution(N){
    let answer=1;
    function DFS(k){
        if(k===1) return;
        else{
            answer*=k;
            DFS(k-1);
        }
    }
    DFS(N);
    return answer;
}
*/
console.log(solution(6));