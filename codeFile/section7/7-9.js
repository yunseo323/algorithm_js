function solution(arr){
    let people=0;
    arr.sort((a,b)=>{
        if(a[0]===b[0]) return a[1]-b[1];
        else return a[0]-b[0];
    })
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        let cnt=1,j=i+1;
        while(j<arr.length){
            if(arr[i][0]<=arr[j][0]&&arr[j][0]<arr[i][1]) cnt++;
            else break;
            j++;
        }
        if(people<cnt)people=cnt;
        if(arr.length-i<people)break;
    }
    return people;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));