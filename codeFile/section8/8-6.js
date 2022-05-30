//이진트리 DFS
function solution(C, arr){
    let answer=Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    function DFS(L,sum){
        if(sum>C) return; //크면 종료
        if(L===n){
            answer = Math.max(answer,sum); //이 표현 사용하기
            //if(answer < sum) answer = sum;
        }
        else{
            DFS(L+1,sum+arr[L]);
            DFS(L+1,sum);
        }
    }
    DFS(0,0);
    return answer;
}
let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));