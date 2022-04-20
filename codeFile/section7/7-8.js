function solution(arr){
    let cnt=0,max=0;
    arr.sort((a,b)=>{
        if(a[0]===b[0]) return a[1]-b[1];
        else return a[0]-b[0];
    })
    //console.log(arr);
    for(let i=0;i<arr.length;i++){
        cnt = 1;
        let l=i+1,k=i;
        while(l<arr.length){
            if(arr[k][1]===arr[l][0]) {
                cnt++;
                k=l;
            }
            l++;
        }
        if(max<cnt) max = cnt;
        if(arr.length-i<=max) break;
    }
    return max;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
//let arr=[[3,3],[1,3],[2,3]];
console.log(solution(arr));