//선택정렬
function solution(arr){
    for(let i=0;i<arr.length;i++){
        let minindex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[minindex]>arr[j]) minindex=j;
        }
        /*
        let tmp = arr[i];
        arr[i]=arr[minindex];
        arr[minindex]=tmp;
        => 대신에 최근 문법 사용하기
        */
       [arr[i],arr[minindex]]=[arr[minindex],arr[i]]; // 두값 교환됨
    }
    return arr;
}

let arr=[13,5,11,7,23,15];
console.log(solution(arr));