
function solution(arr){
    //min = arr[0];
    min = Number.MAX_SAFE_INTEGER; //최솟값을 구할때 안전한 가장 큰 수를 넣을 수 있다
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]) min = arr[i];
    }
    return min;
}
let arr = [5,7,1,3,2,9,11];
console.log(solution(arr))