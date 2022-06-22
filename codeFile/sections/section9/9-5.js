//이진트리 BFS
function solution(){
    let answer="";
    let queue=[];
    queue.push(1);
    while(queue.length){
        let v = queue.shift(); //1
        answer+=v+" ";
        for(let nv of [v*2,v*2+1]){ // 2,3 ->4 5 , 6 7 => 표현 익히자
            if(nv>7) continue; //queue 길이가 0이 되면서 종료
            //console.log(nv);
            queue.push(nv);
        }
    }
    return answer;
}
console.log(solution());
