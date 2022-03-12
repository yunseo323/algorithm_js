# JS 기본 개념 메모

## 1. this 키워드

## 2. 반복

`for...of`문: 반복가능한 객체(Array, Map, Set, String, arguments 등)에 대해서 반복함
```JS
let arr=[];
 for (let x of arr){ //for...of 구문
        if(x%2===1) {
            sum+= x;
        }
     }
```
`for...in`문과 혼동하지 않기: for...in 반복문은 객체의 key값에 접근할 수 있고 value에 접근할 수는 없다. 객체의 모든 열거 가능한 속성에 대한 반복

```JS
let arr = [3,5,7];
arr.foo = "hi";

for(let k in arr){
    console.log(k); // 0,1,2,"foo"
}
for(let x of arr){
    console.log(x); // 3,5,7
}
```

