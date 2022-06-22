// 송아지 찾기

function solution(S,E){
    let level=0;
    let check=Array.from({length:10001},()=>0);//체크
    let dis=Array.from({length:10001},()=>0);//거리
    let queue=[];
    check[S]=1;//첫 노드 체크
    queue.push(S); //첫 노드 큐에 넣음
    dis[S]=0; //첫 노드 레벨은 0

    while(queue.length){
        let v=queue.shift(); //인접한 노드가 없다면 큐에서 노드를 꺼낸다
        for(let nv of [v-1,v+1,v+5]){
            if(nv===E) return dis[v]+1;// 종료(큐에 넣기 전에 값 확인)
            if(nv>0&&nv<=10000&&check[nv]===0){ //nv 값이 범위 안에 있고 처음 방문할 때
                check[nv]=1;
                queue.push(nv);
                dis[nv]=dis[v]+1;
            }
        }
    }
    return level;
}


console.log(solution(5,14));

/*
            5
    -1(4)  +1(6)   +5(10)     
  3 5(x) 8  

=> 이미 큐에 들어갔던 값은 다시 바운하지 않는다 : check 배열 만든다

dis 레벨(거리) 배열을 만들어 준다.
=> dis[nv]=dis[v]+1
*/