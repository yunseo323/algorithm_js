//동전교환문제(냅색알고리즘)
function solution(m, coin){  
    let answer=0;
    let dy=Array.from({length:m+1}, ()=>1000);
    dy[0]=0; //초기화
    for(let i=0;i<coin.length;i++){
        for(let j=coin[i];j<=m;j++){
            dy[j] = Math.min(dy[j],dy[j-coin[i]]+1);
        }
    }
    answer=dy[m];
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));

/*
dy 배열의 길이를 거슬러 줄 금액만큼의 큰 숫자로 초기화해준다

dy[i] -> i 금액을 거슬러 주는데에 사용된 최소 동전의 개수
 
이중for 문을 사용해 
i(0~동전개수)를 돌고
j(coin[i]~금액) 돈다
dy[j]와 dy[j-coin[i]]+1을 비교해 더 적은 값을 적용해준다 
=> coin[i]를 빼는 이유: 금액에서 coin[i]에 해당하는 동전하나를 사용했고, +1로 동전 사용 개수를 더해준다.

*/