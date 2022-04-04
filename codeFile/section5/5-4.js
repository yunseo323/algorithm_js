function solution(N,M,arr){
    let answer=0;
    for(let i=0;i<N;i++){
        let cnt = 0, sum = 0;
        for(let j=0;j<N;j++){//부분수열 개수
            sum += arr[i+j];
            if(sum<=M){
                cnt++;
            }
            else break;
        }
        answer+=cnt;
    }
    return answer;
    /*
    비슷하지만 lt, rt 투포인터를 이용해서 표현하는 방법도 있다
    M보다 작거나 같을때까지 rt를 증가시키면서 누적 합을 구하고(카운팅함),
    M보다 크게되면, lt 위치의 값은 빼주고 lt값을 증가시킨다
    => 두개의 포인터를 이동하면서 문제를 해결한다
    
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<N; rt++){
        sum+=arr[rt];
        while(sum>M){
            sum-=arr[lt++];
        }
        answer+=(rt-lt+1);
    }               
    return answer;
    */
}

let N=5, M=5;
let arr = [1,3,1,2,3];

console.log(solution(N,M,arr));