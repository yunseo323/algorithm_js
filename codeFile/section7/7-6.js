function solution(arr){
    let answer=[];
    let sarr = [...arr];
    sarr.sort((a,b)=>a-b);
    sarr.forEach((v,i)=>{
        if(v!==arr[i]) answer.push(i+1);
    })
    return answer;
}

let arr=[120,125,152,130,135,135,143,127,160];
console.log(solution(arr));