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
/*
다른 풀이:
배열을 돌면서 [14,'s'],[18,'e'] 라고 start 시간, end 시간을 새로운 배열에 저장한 다음, 시간순으로 정렬한다.
다음 s인 경우에 cnt++, e인 경우에는 --를 하면서 최댓값을 구해낸다.
*/