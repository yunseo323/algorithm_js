function solution(arr){ 
    let answer = arr;
    let sum = arr.reduce((acc,v)=>acc+v,0);
    let gap = sum-100;
    for(let i=0;i<8;i++){
        for(let j=i+1;j<9;j++){
            if(gap===answer[i]+answer[j]){
                answer.splice(j,1); //i 먼저 삭제하면 오류가 생김
                answer.splice(i,1);
                break;
            } 
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
/*
splice 함수로 원소를 삭제할 때 인덱스가 변경되므로 순서에 주의하자
 */