function solution(arr){
    let answer=0;
    let stack=[];

    for(let i=0;i<arr.length;i++){ //전 인덱스를 확인해야 하니 i로 순회하자
        if(arr[i]==='(') stack.push(arr[i]);
        else{ //닫는 괄호이면
            if(arr[i-1]==='('){ //레이저임
                stack.pop();
                answer += stack.length; //레이저 한번마다 누적된 막대 개수만큼 조각이 추가됨
            }
            else{
                answer +=1; //막대기가 끝나면 한조각이 추가된다
                stack.pop(); //막대기의 끝나는 지점
            }
        }
    }

    return answer;
}

let arr="(((()(()()))(())()))(()())";
console.log(solution(arr));