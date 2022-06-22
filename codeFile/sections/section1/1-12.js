function solution(s){ 
    /*
    let answer="";        
    for(let x of s){
        answer+=(x.toUpperCase());
    };
    return answer;
    */
   let answer=s.toUpperCase(); //모든 문자가 대문자로 바뀜
   return answer;
}

let str="ItisTimeTostudy";
console.log(solution(str));