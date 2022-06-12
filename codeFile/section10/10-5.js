//최대점수구하기(냅색알고리즘)
function solution(m, arr){ //시간, [점수, 소요시간] 배열
    let answer=0;
    let dy=Array.from({length:m+1}, ()=>0);
    for(let i=0;i<arr.length;i++){
        //센스
        let ps=arr[i][0]; //점수
        let pt=arr[i][1]; //소요시간
        for(let j=m;j>=pt;j--){
            dy[j]=Math.max(dy[j],dy[j-pt]+ps);
        }
    }
    answer=dy[m];
    return answer;
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));

/*
 dy[j] -> j 시간동안 얻을 수 있는 최대 점수

dy 배열을 <- 이 방향으로 돌면서 얻을 수 있는 점수를 채움
ps=arr[i][0];
pt=arr[i][1];

dy[j] 와 dy[j-pt]+ps 
*/