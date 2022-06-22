function solution(N,M,arr){
    let answer=0,sum=0;
    /*
    for(let i=0;i<N-M+1;i++){
        let sum=0;
        for(let j=0;j<M;j++){
            sum+=arr[i+j];
        }
        if(answer<sum)answer=sum;
    }
    */
   for(let i=0;i<M;i++){
       sum+=arr[i];
   }
   answer=sum;
   for(let i=M;i<N;i++){
       sum+=(arr[i]-arr[i-M]); //다음 숫자를 더하고 이전 묶음의 가장 첫번째 숫자를 뺌
       answer = Math.max(answer,sum);
   }
    return answer;
}

let N=10, M=3;
let arr = [12,15,11,20,25,10,20,19,13,15];

console.log(solution(N,M,arr));