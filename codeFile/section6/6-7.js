function solution(n, k){
    let answer;
    let queue = Array.from({length:n},(v,i)=>i+1); //배열 초기화
    //console.log(queue); //[1,2,3,4,5,6,7,8]
    /*
    k번 전까지 꺼낸 값을 큐에 다시 푸쉬하고, k번은 shift해서 없앤다
    */
    while(queue.length){
        for(let i=0;i<k-1;i++) queue.push(queue.shift());
        queue.shift();
        if(queue.length===1) answer=queue.shift();
    }
    return answer;
}

console.log(solution(8, 3));