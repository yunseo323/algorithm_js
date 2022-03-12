function solution(arr){
    let answer = [];
    let sum=0, min=Number.MAX_SAFE_INTEGER;

     for (let x of arr){ //for...of 구문
        if(x%2===1) {
            sum+= x;
            if(min>x) min = x;
        }
     }
     console.log(sum);
     return min;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));