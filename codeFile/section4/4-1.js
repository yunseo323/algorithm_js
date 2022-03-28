function solution(N, arr){
    let num=[];
    let save = [...arr];
    let answer=0;
    for(let i=0;i<N;i++){
        /*
        let n=0;
        while(arr[i]>0){
            n+=(arr[i]%10);
            arr[i] = parseInt(arr[i]/10); //parseInt 꼭 사용! Math.floor를 사용해도 됨
        } => 이 로직을 한 줄로 표현할 수 있음
        */
        let n = arr[i].toString().split('').reduce((a,b)=>a+Number(b),0);
        //Number로 바꿔줘야 함
        num.push(n);
    }
    let max = num[0];
    for(let i=0;i<N;i++){
        if(max<num[i]){
            max = num[i];
        }
        else if(num[i]===max){
            if(answer<save[i]) answer=save[i];
        }
    }
    return answer;
}
let N=7;
let arr=[128, 460, 603, 40, 521, 137, 821];
console.log(solution(N,arr));
