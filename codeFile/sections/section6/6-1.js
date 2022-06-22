function solution(str){
    let stack=[]; //stack
    for(let x of str){
        if(x==='(')stack.push(x);
        else{ //)
            if(stack.length===0) return "NO"; //이 코드 누락 주의: 닫는 괄호가 먼저 나온다면 바로 NO
            stack.pop();
        }
    }
    if(stack.length>0) return "NO";
    else return "YES";

}
let arr="(())()";
console.log(solution(arr));