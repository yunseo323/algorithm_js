function solution(arr){
    let answer=[];
    let check=Array.from({length:arr.length+1},()=>0);
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

let arr=[1,3,5,6,7,10];
console.log(solution(arr));