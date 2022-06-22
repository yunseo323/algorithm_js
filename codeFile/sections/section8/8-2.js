function solution(N){ 
    function DFS(r){
        if(r==1) return 1;
        else return DFS(parseInt(r/2))*10+r%2; //*10이 아닌 String으로 처리해줘도 됨
    }
    return DFS(N);
}

console.log(solution(11));