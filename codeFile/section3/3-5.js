function solution(str){
    let answer="";
    let flag=0, cnt=1;

    for(i=1;i<str.length;i++){ 
        if(str[i-1]===str[i]){ //i랑 i+1을 생각했다면 좀 더 깔끔하겠다..
            cnt++;
        }
        else{
            flag=1;
        }
        if(flag==1){
            if(cnt>1) answer+=`${str[i-1]}${cnt}`;
            else answer+=str[i-1];
            if(i===str.length-1) answer+=str[i];
            cnt=1;
            flag=0;
        }
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));