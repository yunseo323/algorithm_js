function solution(N,M,arr){
    let answer=0, stu = new Array(N);
    for(let i=0;i<N;i++){
        stu[i] = new Array(M);
    }
    //각 학생마다 테스트에서 몇등했는지 배열 만들기
    for(let i=0;i<M;i++){
        for(let j=0;j<N;j++){
            let n = arr[i][j];
            stu[n-1][i] = j;
        }
    }
    console.log(stu);
    //비교하기
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(i===j)continue;
            let flag = 0;
            for(let k=0;k<M;k++){
                if(stu[i][k]>=stu[j][k])flag++
            }
            if(flag===0){
                answer++;
            } 
        }
       
    }
    return answer;
}
let N=4, M=3;
let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(N, M, arr));
//미완