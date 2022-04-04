function compareMaps(m1,m2){ //두개의 맵 키-값 쌍이 동일하게 있는지 확인
    if(m1.size!==m2.size) return false; //크기 다르면 다름
    for(let [key,value] of m1){
        if(!m2.has(key)) return false; //m2에 m1의 키가 없음
        if(m2.get(key)!==value) false; //m2의 값이 m1과 다름
    }
    return true;
}

function solution(s1,s2){
    let answer = 0;
    let h1 = new Map(), h2 =  new Map();

    for(let x of s2){
        if(h2.has(x)) h2.set(x,h2.get(x)+1);
        else h2.set(x,1);
    }
    let len=s2.length-1; //개수 하나 적개 슬라이싱 해서 h1 맵에 저장한다
    for(let i=0;i<len;i++){
        if(h1.has(s1[i])) h1.set(s1[i],h1.get(s1[i])+1);
        else h1.set(s1[i],1);
    }
    //투 포인터 알고리즘 활용
    let lt=0;
    for(let rt=len; rt<s1.length;rt++){
        //rt h1맵에 넣기
        if(h1.has(s1[rt])) h1.set(s1[rt], h1.get(s1[rt])+1);
        else h1.set(s1[rt],1);
        if(compareMaps(h1,h2)) answer++; //맵이 동일한지 비교
        h1.set(s1[lt],h1.get(s1[lt])-1); //lt의 값을 -1한다
        if(h1.get(s1[lt])===0) h1.delete(s1[lt]); //-1 한 값이 0이되면 없어졌으므로 맵에서 삭제
        lt++; //lt 증가
    } 
    return answer;
}


let str1 = "bacaAacba", str2 = "abc";
console.log(solution(str1,str2)); //길이가 같은 문자열이 문제의 조건이었음