function solution(arr){  
    let answer = 0;
    let dx=[-1,0,1,0], dy=[0,1,0,-1]; // dx dy 변수 만들기 -> 존재하지 않는 arr 인덱스에 접근하지 않기위해
    let x,y;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            let flag=1;
            for(let k=0;k<4;k++){
                x = i+dx[k];
                y = j+dy[k];
                //flag 0처리 할 봉우리가 아닌 값들
                if(x>=0&&x<arr.length&&y>=0&&y<arr.length&&arr[x][y]>=arr[i][j]){
                    flag=0;
                    break;
                }
            }
            if(flag==1) answer++;
        }
        
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));

