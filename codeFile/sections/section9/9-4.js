//미로탐색
function solution(board){  
    let answer=0;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    //=>각 노드마다 네 방향으로 뻗어나갈 수 있음을 이해하자
    function DFS(x,y){ // x,y 좌표
        if(x===6 && y===6) answer++; //도착지점
        else{
            for(let k=0;k<4;k++){
                let nx=x+dx[k];
                let ny=y+dy[k];
                if(nx>=0&&nx<=6&&ny>=0&&ny<=6&&board[nx][ny]===0){
                    //통로따라 이동할 수 있는 조건: 좌표가 0~6이고, 통로값 0인 경우
                    board[nx][ny]=1;
                    DFS(nx,ny);
                    board[nx][ny]=0; //지나가고 나면 체크 풀기
                }
            }
        }
    }
    board[0][0]=1 //시작 초깃값
    DFS(0, 0);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));
/*
간 길을 1로 체크해놔야 되돌아가지 않는다.
*/