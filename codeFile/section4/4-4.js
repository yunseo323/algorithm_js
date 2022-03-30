function solution(m, product){
    let answer=0,flag=0;
    let total=[];
    total = product.map(v=>v.reduce((t,i)=>t+i
    ,0));
    total.sort((a,b)=>a-b);//오름차순 정렬
    for(let i=0;i<total.length;i++){
        //각 물건마다 50% 할인을 해서 계산해야함을 이해하자
        let sum = m-(product[i][1]+product[i][0]/2);
        let num = 1;

        for(let j=0;j<total.length;j++){
            if(i!==j && sum<total[j]) break;
            if(i!==j && sum>=total[j]) {
                sum -= total[j];
                num++;
            }
        }
        answer = Math.max(answer,num);
    }
    /* forEach로 해결하려 했으나 break를 사용할 수 없음
    total.forEach((v,i)=>{
        sum+=v;
        if(sum>m&&flag===0){
            flag++;
            sum-=v;
            sum+=parseInt(product[i][0]/2)+product[i][1];
            if(sum<=m) answer++;
        }
        answer++;
    })
    */
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
//미완
