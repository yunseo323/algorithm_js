function solution(s){  
    /* 16번과 동일한 방법
    let answer=[];
    for(i=0;i<s.length;i++){
        if(i===s.indexOf(s[i])) answer.push(s[i]);
    }
    return answer;
    */
   //배열을 반환해주는 filter 메소드를 활용해보자
   let answer;
   answer = s.filter((v,i)=>{
       return i===s.indexOf(v);
       //if(i===s.indexOf(v)) return true;
   })

   return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));