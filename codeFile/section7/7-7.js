function solution(arr){
    arr.sort((a,b)=>{
        if(a[0]===b[0]) return a[1]-b[1]; //첫번째 원소가 같다면 두번째 원소를 기준으로 정렬
        else return a[0]-b[0];
    })

    return arr;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));