function solution(s, t){
    /*
    let answer=0;
    for(let x of s){
        if(x===t) answer++;
    }
    */
   //split으로 개수를 셀 수 있다
   //s.split(t) -> [ 'COMPUTE', 'P', 'OG', 'AMMING' ]
   let answer = s.split(t).length;
    return answer-1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));