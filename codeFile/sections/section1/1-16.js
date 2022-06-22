function solution(s){  
    let answer="";
    for(let i=0;i<s.length;i++){
        if(i===s.indexOf(s[i])) answer+=s[i];
    }
    return answer;
}
console.log(solution("ksekkset"));
/*
indexOf 메서드 활용
indexOf를 사용하면 첫번째 인덱스가 반환되므로,
자신의 index와 indexOf를 사용한 값이 같으면 중복이 되지 않은 문자고,
다르면 중복된 문자임을 알 수 있다.
*/