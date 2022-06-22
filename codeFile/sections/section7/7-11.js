function count(arr, cap){ //답이 유효한지 검사하는 함수가 결정 알고리즘에서 제일 중요함
    let cnt=1,sum=0;
    for(let x of arr){
        if(sum+x>cap){
            cnt++;
            sum=x;
        }
        else sum+=x;
    }
    return cnt; //유효한 dvd 개수 리턴
}
function solution(M,arr){
    let answer;
    //순서가 그대로 유지되어야 하므로 정렬 x
    let lt = Math.max(...arr); //전개연산자를 써서 인자를 넘겨야 함
    let rt= arr.reduce((a,b)=>a+b,0);
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);
        if(count(arr,mid)<=M){
            answer=mid;
            rt=mid-1;
        }
        else lt=mid+1;
    }
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
/*
DVD 가장 짧은 용량은 가장 큰 용량의 노래이다 -> 예시에서 9
용량의 범위는 가장 큰 용량의 노래 ~ 노래들의 합
-> 이진탐색을 사용하자
dvd 용량의 중간값을 구한다
=> 이 과정을 범위를 좁혀 반복한다
*/
