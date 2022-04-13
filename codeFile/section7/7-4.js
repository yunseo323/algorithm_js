//삽입정렬
function solution(arr){
    for(let i=1;i<arr.length;i++){
        let tmp=arr[i];
        let j=i-1;
        while(tmp<arr[j]){ //j는 i 앞부분을 순회한다
            if(j<0) break;
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=tmp;
        //console.log(arr);
    }
    return arr;
}

let arr = [11,7,5,6,10,9];
console.log(solution(arr));
