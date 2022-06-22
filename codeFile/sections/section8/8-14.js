//조합 구하기

function solution(N,M){ //1~N까지 M개를 뽑는 방법의 수
    let answer=[];
    let flag=0;
    let tmp=Array.from({length:M},()=>0);
    function DFS(L,S){
        if(L===M){
            answer.push(tmp.slice());
        }
        else{
            for(let i=0;i<N;i++){
                if(L>0) i+=1;
                else{
                    tmp[L]=i+1;
                    DFS(L+1);
                }
                
            }
        }
    }
    DFS(0,0);
    return answer;
}

console.log(solution(4,2));

/*
조합에서는 순열과 다르게 순서를 무시함
(1,2) (2,1) 은 같은 것
*/