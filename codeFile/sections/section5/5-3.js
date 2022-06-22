function solution(N,M,arr){
    let cnt = 0;
    for(let i=0;i<N;i++){
        let j=0, sum=0;
        while(sum<=M){
            sum+=arr[i+j];
            if(sum===M){
                cnt++;
            }
            j++;
        }
    }
    return cnt;
}

let N=8, M=6;
let arr = [1,2,1,3,1,1,1,2];

console.log(solution(N,M,arr));