function solution(arr){
    for(let i=0;i<arr.length;i++){
        let min=arr[i];
        let minindex=i;
        for(let j=i+1;j<arr.length;j++){
            if(min>arr[j]){
                min=arr[j];
                minindex=j;
            } 
        }
        let tmp = arr[i];
        arr[i]=arr[minindex];
        arr[minindex]=tmp;
        console.log(arr);
    }
    return arr;
}

let arr=[13,5,11,7,23,15];
console.log(solution(arr));