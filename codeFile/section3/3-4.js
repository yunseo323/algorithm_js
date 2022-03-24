function solution(str,word){
    /*  매 문자마다 왼쪽 오른쪽 거리 비교로 구현함..
    let s=[], index=[];
    const len = str.length;
    s = str.split('');
    for(i=0;i<len;i++){
        let j=0,m=0,flag=0;
        while(i+j>=0&&i+j<len){
            if(s[i+j]===word){
                flag=1; //같은걸 찾음
                cnt=j;
                break;
            }
            j++;
        }
        j=0;
        while(i+j>=0&&i+j<len){
            j--;
            if(s[i+j]===word){
                flag=1; //같은걸 찾음
                if(cnt>-j) cnt = -j;
                break;
            }
        }
        index.push(cnt);
    }
    return(index);
    */

    //배열을 총 두번 도는 것으로 끝낼 수 있음
    let answer=[],s=[];
    const len = str.length;
    s = str.split('');
    let cnt = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<len;i++){ //오른쪽으로 이동하면서 왼쪽 단어와의 거리 계산
        
        if(s[i]===word)cnt=0;
        else cnt++;
        answer.push(cnt);
    }
    cnt = Number.MAX_SAFE_INTEGER;
    for(let i=len-1;i>=0;i--){ //왼쪽으로 이동하면서 오른쪽 단어와의 거리 계산
        if(s[i]===word)cnt=0;
        else cnt++;
        if(answer[i]>cnt) answer[i]=cnt; //기존 answer 배열과 비교해 더 작으면 바꿈
        //-> answer[i] = Math.min(answer[i],cnt) 와 같이 표현 가능
    }
    return(answer);

}

let str="teachermode";
let word = "e";
console.log(solution(str,word));

