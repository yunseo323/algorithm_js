function solution(s){
    let answer;
    s = s.toLowerCase().replace(/[^a-z]/g,''); //정규표현식 사용하기
    if(s.split('').reverse().join('')===s) answer="YES";
    else answer="NO";

    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
