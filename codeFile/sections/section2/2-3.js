function solution(a, b){         
    let answer = [];
    let winner;
    for(i=0;i<a.length;i++){
        if(a[i]===1&&b[i]===3){
            winner='A';
        }
        else if(a[i]===3&&b[i]===1){
            winner='B';
        }
        else if(a[i]===b[i]){
            winner='D';
        }
        else{
            winner = a[i]>b[i]? 'A':'B';
        }
        answer.push(winner);
    }

    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));