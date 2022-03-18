function solution(arr){         
    let answer=0, f=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0) f=0;
        else f++;
        answer+=f;  
    }
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));