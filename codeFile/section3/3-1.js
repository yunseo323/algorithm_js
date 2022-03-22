function solution(s){
    let answer;
    let flag = 0;
    s = s.toLowerCase();
    /*
    for(let i=0;i<s.length/2;i++){
        if(s[i]!==s[s.length-1-i]){
            flag=1;
            break;
        }
    }
    if(flag===0) answer = "YES";
    else answer="NO";
    */
    
    if(s.split('').reverse().join('')===s) answer="YES";
    else answer="NO";
    /*
    s = gowg
    s.split(''); // [ 'g', 'o', 'w', 'g' ]
    s.split('').reverse(); //[ 'g', 'w', 'o', 'g' ]
    s.split('').reverse().join(''); //gwog

    reverse() -> 배열을 반전시킴
    join() -> 배열의 요소를 연결해 하나의 문자열로 만듬 (구분자를 넘기면 단어들이 그 구분자로 연결됨)
    */
    return answer;
}

let str="gowG";
console.log(solution(str));
