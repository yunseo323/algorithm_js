function solution(arr){  
    let answer=[], cnt = 0;
    //answer 배열을 다 1로 초기화하기: let answer = Array.from({length:arr.length},()=>1)
    for(let x of arr){
        for(let i=0;i<arr.length;i++){
            if(x<arr[i])cnt++;
        }
        answer.push(cnt+1);
        cnt = 0;
    }
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));

/*
기존에 생각하던 로직이 아닌,
해당 숫자보다 큰 값의 개수+1 로 생각하자
*/