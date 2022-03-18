function solution(s){
    let answer;
    answer = s.replace(/A/g,'#'); //replaceAll을 쓰기보다 정규표현식을 활용하자
    /*
    let answer="";
    for(let x of s){
        if(x=='A') answer+='#';
        else answer+=x;
     }
     */
    return answer;
}

let str="BANANA";
console.log(solution(str));