function solution(s){  
    answer = ""
    let max=0;
    for(let x of s){
        if(x.length>max) {
            max = x.length;
            answer = x;
        }
    };
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));