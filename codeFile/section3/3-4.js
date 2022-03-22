function solution(str,word){
    let answer=[], index=[];
    answer = str.split('');
    for(let i=0;i<answer.length;i++){
        if(answer[i]===word) index.push(i);
    }
    for(let i=0;i<answer.length;i++){
        
    }
    console.log(index);
}

let str="teachermode";
let word = "e";
console.log(solution(str,word));

