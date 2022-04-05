function solution(board, moves){
    let answer=0, len = board.length;
    let stack=[];

    for(let x of moves){
        for(i=0;i<len;i++){
            if(board[i][x-1]>0){
                stack.push(board[i][x-1]);
                board[i][x-1]=0;
                break;
            }
        }
        if(stack.length>1&&stack[stack.length-1]===stack[stack.length-2]){
            for(i=0;i<2;i++)stack.pop();
            answer+=2;
        }
    }
    //console.log(stack);
    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4]; //4 3 1 1 3 2 4
console.log(solution(a, b));