function solution(n){
    let answer=[];
    let check=Array.from({length:n+1},()=>0);
    function DFS(v){
        //if-else
        if(v===n+1){ //종착점
            let tmp="";
            for(let i=1;i<=n;i++){
                if(check[i]===1) tmp+=i+" ";
            }
            if(tmp.length>0)answer.push(tmp.trim());
        }
        else{
            check[v]=1;
            DFS(v+1);
            check[v]=0;
            DFS(v+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));
/*
부분집합 문제
        1
    O       x
  2    3
O   x

와 같이 숫자를 포함할것인지 아닌지, 트리 식으로 구성함
*/