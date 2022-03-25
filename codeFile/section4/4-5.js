function solution(n, k, card){
    let answer, sum=[],f=1;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                sum.push(card[i]+card[j]+card[k]);
            }
        }
    }
    sum.sort((a,b)=>b-a); //내림차순
    for(let i=0;i<n-1;i++){
        if(sum[i]!=sum[i+1]) f++;
        if(f===k){
            answer=sum[i+1];
            break;
        }
    }
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
