function solution(N,arr){
    let answer=[];
    for(let i=0;i<N;i++){
        let num=0;
        while(arr[i]>0){
            num*=10;
            num+=arr[i]%10;
            arr[i]=parseInt(arr[i]/10);
        }
        if(isPrime(num)) answer.push(num);
    }
    return answer;
}
function isPrime(n){
    if(n<=1) return 0;
    for(let i=2;i<n;i++){
        if(n%i===0) return 0;
    }
    return 1;
}
let N = 9;
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(N,arr));
