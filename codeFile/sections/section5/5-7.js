function solution(s1,s2){
    let answer = "YES";
    let h1=new Map();

    for(let x of s1){
        if(h1.has(x)) h1.set(x,h1.get(x)+1);
        else h1.set(x,1);
    }
    for(let x of s2){
        if(!h1.has(x) || h1.get(x)===0) answer="NO";
        h1.set(x,h1.get(x)-1); //s2 문자열을 돌면서 있는 문자는 h1에서 개수를 줄인다
    }

    return answer;
}


let str1 = "AbaAeCe", str2 = "baeeACA";
console.log(solution(str1,str2)); //길이가 같은 문자열이 문제의 조건이었음