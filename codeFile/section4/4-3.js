function solution(N,M,test){
    let answer=0, stu=[];
    stu.length = N;
    //각 학생마다 테스트에서 몇등했는지 배열 만들기
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            stu[arr[i][j]-1].push(j);
        }
    }
    console.log(stu);
    //비교하기
    return answer;
}
let N=4, M=3;
let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(N, M, arr));
//미완