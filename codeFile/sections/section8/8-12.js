//조합의 경우수(메모이제이션)

function solution(n,r){
    let answer;
    let dy=Array.from(Array(35),()=>Array(35).fill(0)); //35행 35열 이차원 배열 0으로 초기화
    function DFS(n,r){ //시간이 훨씬 짧게 걸림
        if(dy[n][r]>0) return dy[n][r]; //이미 구해져 있는 값
        if(n===r||r===0) return 1;
        else return dy[n][r]=DFS(n-1,r-1)+DFS(n-1,r);
    }
    /*
    => 이 방법으로 하면 시간이 너무 오래걸려서 이미 계산해서 아는 값들을 메모해두는 "메모이제이션" 방법을 사용한다
    function DFS(n,r){
        if(r===0||n===r){
            return 1;
        }
        else{
            return DFS(n-1,r-1)+DFS(n-1,r);
        }
    }
    */
    answer=DFS(n,r);
    return answer;
}

console.log(solution(33,19));

/*
nCr = n-1Cr-1 + n-1Cr => 공식 사용하기

r이 0이거나 n과 r이 같은 경우에는 1
*/