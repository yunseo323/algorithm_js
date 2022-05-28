function solution(arr){
    let answer="NO", flag=0;
    let total=arr.reduce((a, b)=>a+b, 0);
    let n=arr.length;
    
    function DFS(L, sum){ //L->level
        if(flag===1)return;
        if(L===n){ //끝
            if(total-sum===sum){
                answer="YES";
                flag=1;
            }
        }
        else{
            DFS(L+1,sum+arr[L]); //O
            DFS(L+1,sum); //X
        }
    }
    DFS(0,0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));

/* 
DFS(index,누적값)
arr=[1, 3, 5, 6, 7, 10]

                 DFS(0,0)
        DFS(1,1)         DFS(1,0)
  DFS(2,4)    DFS(2,1)
*/