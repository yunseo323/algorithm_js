function solution(s){         
    let answer=0;
    for(let x of s){
        if(x===x.toUpperCase()) answer++; //대문자 찾기 
        //아스키코드로 찾는 방법도 있음
    };

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));