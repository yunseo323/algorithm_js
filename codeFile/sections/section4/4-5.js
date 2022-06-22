function solution(n, k, card){
    let answer,f=1;
    let sum = new Set();
    //중복을 제거한 값들의 집합인 Set 객체를 사용하자
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                sum.add(card[i]+card[j]+card[k]);
            }
        }
    }
    //Set 객체는 .sort를 사용하지 못하기 때문에 배열로 한번 변환해 줘야함
    let cardArr = Array.from(sum).sort((a,b)=>b-a); //내림차순
    //console.log(cardArr);
    answer = cardArr[k-1];
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
