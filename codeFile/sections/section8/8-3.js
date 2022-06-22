function solution(N){ 
    function DFS(r){
        if(r>7) return;
        else{
            //console.log(r); //전위순회
            DFS(r*2);
            //console.log(r); //중위순회
            DFS(r*2+1)
            console.log(r); //후위순회
        }
    }
    return DFS(N);
}

console.log(solution(1));