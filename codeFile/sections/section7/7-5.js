function solution(s,memory){
    let answer=Array.from({length:s},()=>0);
    let cnt=0;
   
    for(let i=0;i<memory.length;i++){
        if(answer.indexOf(memory[i])===-1) {
            answer.pop();
            answer.unshift(memory[i]);
        }
        else{ //존재한다면
            j=answer.indexOf(memory[i]);
            while(j>0){
                answer[j]=answer[j-1];
                j--;
            }
            answer[0]=memory[i];
        }
        //console.log(answer);
    };
    return(answer);
}
let s=5;
let m=[1,2,3,2,6,2,3,5,7,9,10,11,12,13];
console.log(solution(s,m));

//삽입 정렬 응용으로도 풀 수 있지만 push pop이 좀 더 편했다... 풀이 방식 이해하고 넘어감!!