function solution(n, arr){  
    
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));

/*
DFS 완전탐색
- 정점을 지나갈때 check 해야함
- 각 정점에서 갈 수 있는 길을 탐색함
1->2->1
    ->3
    ->5
 ->3
 ->4

- 끝까지 탐색했다면 다시 거꾸로 나오면서 check를 푼다

*/