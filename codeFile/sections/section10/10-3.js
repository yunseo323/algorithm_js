//최대 부분 증가 수열

function solution(arr){
    let n = arr.length;
    let dy=Array.from({length:n},()=>0);
    let max=0; //answer
    dy[0]=1;
    for(let i=1;i<n;i++){
        let m=0;
        for(let j=i;j>=0;j--){
            if(arr[i]>arr[j]&&dy[j]>m) m=dy[j];
        }
        dy[i]=m+1;
        //max=Math.max(max, dy[i]); => 이 방법이 아니라 밑에껄로 쓰는게 더 편함(내방법)
    }
    max=Math.max(...dy);
    return max;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

/*
점화식을 어떻게 구성할까?

dy[i] => i 인덱스 숫자가 마지막으로 끝나는 경우의 길이
이때 배열을 바라보는 방향은 <- , 현재 보고 있는 i 위치에서 앞에 올 수 있는 인덱스가 몇개인지 세기

ex) dy[4]를 기준으로 바라볼때 arr 인덱스 0~3까지를 돌며 가장 큰 dy값을 찾는다
dy[4] = dy[i]+1이 됨을 이해하자. 
그 수까지 도달할 수 있는 값들이 dy[i]에 저장되어 있다.

*/