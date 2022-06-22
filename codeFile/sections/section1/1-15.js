function solution(s){  
    let answer="";
    let len = Math.floor(s.length/2); //소수점 없도록 내림하기
    if (s.length%2===0){  
        answer = s.substr(len-1,2);
    }
    else{
        answer = s.substr(len,1);
    }
    return answer;
}
console.log(solution("good"));