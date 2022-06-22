//BFS
/*
queue를 이용해서 문제 풀이
: 1로 표현되어있는 블록을 0으로 만든 후에 큐에 좌표를 넣기

=>큐에 넣은 값들이 모두 사라지면 그때 카운트
*/

function solution(board){  
    let answer=0;
    let n=board.length;
    let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
    let dy=[0, 1, 1, 1, 0, -1, -1, -1];
    let queue=[];
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]===1){ //1인 블록을 찾아서
                //console.log([i,j]); //시작 지점
                board[i][j]=0; //0으로 바꿔주고
                queue.push([i,j]);
                while(queue.length){
                    let[x,y]=queue.shift();
                    for(let k=0;k<8;k++){
                        let nx=x+dx[k];
                        let ny=y+dy[k];
                        if(nx>=0&&nx<n&&ny>=0&&ny<n&&board[nx][ny]===1){
                            //console.log([nx,ny]); //1인 좌표
                            board[nx][ny]=0;
                            queue.push([nx,ny]);
                        }
                    }
                }
                //console.log("BFS end!"); //각 BFS 로직이 끝남
                answer++; //위 while 문이 끝날때마다 카운트
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