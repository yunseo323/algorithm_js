//버블정렬
function solution(arr){
    let tmp;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1])[arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            //console.log(arr);
        }
    }
    return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
