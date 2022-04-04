function solution(arr1, arr2){ 
    let answer=[];
    let n1 = arr1.length, n2 = arr2.length;
    let p1 = p2 = 0;

    //정렬하고 투 포인터 알고리즘 사용함
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    console.log(arr1,arr2);
    while(n1>p1 && n2>p2){
        if(arr1[p1]===arr2[p2]) {
            answer.push(arr1[p1]);
            p1++;
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++; //작은값을 증가시킨다
        else p2++;
    }
    /* 작은 값을 증가시키기 때문에 이후의 코드를 작성하지 않아도 된다
    while(p1<n1) {
        if(arr1[p1]===arr2[p2]) {
            answer.push(arr[p1]);
            break;
        }
        p1++;
    }
    while(p2<n2) {
        if(arr1[p1]===arr2[p2]) {
            answer.push(arr[p1]);
            break;
        }
        p2++;
    }
    */
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 4, 6, 8, 9];
console.log(solution(a, b));