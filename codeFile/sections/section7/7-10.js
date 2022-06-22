// 이진탐색(이분탐색): 데이터가 정렬되어 있어야 사용할 수 있음
function solution(M,arr){
    arr.sort((a,b)=>a-b); //오름차순 정렬
    let lp=0, rp=arr.length-1;
    //탐색의 범위가 절반씩으로 줄어듬
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);
        if(arr[mid]===M) return mid+1;
        else if(arr[mid]>M) rt = mid-1;
        else lt = mid+1;
    }
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));