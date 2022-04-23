function count(arr,mid){ //말 사이의 최대 거리를 기준으로 총 몇마리를 둘 수 있는지
    let cnt=1, ep=arr[0]; //endpoint(말을 놓는 자리)
    for(let i=1;i<arr.length;i++){
        if(arr[i]-ep>=mid){
            cnt++;
            ep=arr[i];
        }
    }
    return cnt;
}
function solution(N,arr){
    let answer, cnt = 0;
    arr.sort((a,b)=>a-b);//오름차순 정렬
    let lt = arr[0], rt = arr[arr.length-1];
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);// mid: 말 사이의 최대 거리
        if(count(arr,mid)>=N){
            answer=mid;
            lt=mid+1;
        }
        else rt=mid-1;
    }
    return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));
/*
결정알고리즘 꼴을 외우기
mid를 문제에서 어떻게 이해하고 놓을건지가 관건
*/