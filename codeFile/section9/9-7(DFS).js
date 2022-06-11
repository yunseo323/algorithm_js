//DFS
/*
섬 개수: 이중 for문을 돌면서 재귀가 몇번 호출되는지를 카운트하면 된다

기존의 DFS 문제와 다르게 if-else로 재귀 종료 지점(다시 back)을 표시하는 문제가 아니다
이해할때 주의하자
*/
function solution(board){  
    let answer=0; //정답 카운트
    let n=board.length;
    //상하좌우&대각선 8방향 모두 체크
    let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
    let dy=[0, 1, 1, 1, 0, -1, -1, -1];
    
    function DFS(x,y){//밑의 for문에서 찾은 1 블록을 0으로 바꿔줌
        board[x][y]=0; //1로 되어있는 블록 0으로 바꾸기
        for(let k=0;k<8;k++){
            let nx=x+dx[k];
            let ny=y+dy[k];
            if(nx>=0&&nx<n&&ny>=0&&ny<n&&board[nx][ny]===1){
                //console.log(nx,ny); //좌표 확인
                DFS(nx,ny);
            }
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]===1){
                answer++; //DFS가 몇번 호출되는가
                DFS(i,j);
                //console.log("DFS end"); //각 DFS 종료 지점
            }
        }
    }

    return answer;
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));