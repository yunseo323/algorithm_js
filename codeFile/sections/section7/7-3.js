//스페셜 sort. push로 해결하는 것이 아니라 정렬을 해보자
function solution(){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>0&&arr[j+1]<0)[arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        }
    } 
    return arr;
}

let arr = [1,2,3,-3,-2,5,6,-6];
console.log(solution(arr));
