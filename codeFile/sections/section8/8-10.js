//순열 구하기(중복 x)
function solution(M, arr){
    let N=arr.length;
    let tmp=Array.from({length:M},()=>0);
    let check=Array.from({length:N},()=>0);
    let answer=[];
    function DFS(L){
        if(L===M) answer.push(tmp.slice());
        else{
            for(let i=0;i<N;i++){
                if(check[i]===0){ //체크 시점 파악하기
                    check[i]=1;
                    tmp[L]=arr[i];
                    DFS(L+1);
                    check[i]=0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}
let arr=[3,6,9];
console.log(solution(2,arr));

/*

arr [3,6,9]
check[0,0,0] //체크 배열

tmp[0,0]
-> tmp[L]=arr[i]
*/