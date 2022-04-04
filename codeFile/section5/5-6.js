function solution(str){
    let answer;
    let sH = new Map();
    for(let x of str){
        if(sH.has(x)) sH.set(x,sH.get(x)+1);
        else sH.set(x,1);
    }
    //console.log(sH); -> Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }
    let max = Number.MIN_SAFE_INTEGER;
    for(let [k,v] of sH){
        if(v>max){
            max = v;
            answer = k;
        }
    }
    return answer;
}

let N=15;
let str = "BACBACCACCBDEDE";
console.log(solution(str));