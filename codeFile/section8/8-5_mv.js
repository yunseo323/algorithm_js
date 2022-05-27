function solution(arr){
    let answer = "YES";
    let flag;
    let l = arr.length;
    let check=Array.from({length:l},()=>0);
    function DFS(v){
        //if-else
        if(v===l){ //종착점
            let sum0=0,sum1=0;
            for(let i=0;i<l;i++){
                if(check[i]===0) sum0+=arr[i];
                else sum1+=arr[i];
            } 
            if(sum0===sum1)flag=1; //yes
        }
        else{
            check[v]=1;
            DFS(v+1);
            check[v]=0;
            DFS(v+1);
        }
    }
    DFS(0);
    if(flag===0)answer="NO";
    return answer;
}

//let arr=[1,3,5,6,7,10];
let arr=[1,2,4];
console.log(solution(arr));

//다시 풀기