function solution(str){
    let answer=0;
    let stack=[];
    for(let x of str){
        if(!isNaN(x)){ //isNaN:숫자로 변환 가능?
            stack.push(+x);
        }
        else{
            let r = stack.pop();
            let l = stack.pop();
            if(x==='+') stack.push(l+r);
            else if(x==='-') stack.push(l-r);
            else if(x==='*') stack.push(l*r);
            else stack.push(l/r);

        }
    }
    answer=stack[0];
    return answer;
}

let str = "352+*9-"
console.log(solution(str));