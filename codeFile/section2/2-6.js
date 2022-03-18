function solution(arr){  
    let max = 0, sum = 0;
    //행
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            sum +=arr[i][j];
        }
        if(max<sum)max = sum;
        sum=0;
    }

    //열
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            sum +=arr[j][i];
        }
        if(max<sum)max = sum;
        sum=0;
    }

    //대각선
    for(let i=0;i<arr.length;i++){
        sum+=arr[i][i];
    }
    if(max<sum)max = sum;
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i][arr.length-i-1];
    }
    if(max<sum)max = sum;

    return max;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));