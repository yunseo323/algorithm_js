//이진트리 DFS
function solution(m, ps, pt){         
    let answer=Number.MIN_SAFE_INTEGER;
    let n=ps.length;

    function DFS(L,score,time){
        if(time>m) return;
        if(L===n){
            answer=Math.max(answer,score);
        }
        else{
            DFS(L+1,score+ps[L],time+pt[L]);
            DFS(L+1,score,time);
        }
    }
    DFS(0, 0, 0);
    return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));