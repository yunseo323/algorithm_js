function solution(m, p){
    let queue=m.split('');
    for(let x of p){
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO";
        }
    }
    if(queue.length>0) return "NO"; //모두 shift 되지 않았다면 NO
    /*
    -> 이 방법은 배열을 다 돌아야 확인 가능한 로직
    for(let x of p){
        if(x===queue[0]) queue.shift();
    }
    if(queue.length>0) answer="NO";
    */
    return "YES";
}
let m="CBA";
let p="CBDAGE";
console.log(solution(m,p));