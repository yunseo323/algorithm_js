function solution(arr){         
    let answer = 1;
    let max = arr[0];
    for(i=1;i<arr.length;i++){
        if(max<arr[i]){
            answer++;
            max = arr[i];
        }
    }
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));