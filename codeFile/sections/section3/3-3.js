function solution(str){
    let answer="";
    for(let x of str){
        if(!isNaN(x)) answer+=x;
    }  
    console.log(answer);
    return parseInt(answer); //parseInt : 문자를 정수로 변환하기
}

let str="g0en2T0s8eSoft";
console.log(solution(str));

