function solution(m, product){
    let answer=0, num = product.length;
    let total=[];
    for(let i=0;i<num;i++){
        total.push(product[i][0]+product[i][1]);
    }
    //오름차순 정렬
    product.sort((a,b)=>a-b);
    console.log();
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
//미완
