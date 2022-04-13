# JS 기본 개념 메모
## 1. 반복

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

## 2. 문자열을 숫자로 변환

- 단항연산자(+, -) 사용: 피연산자를 Number 타입으로 변환함 (-는 음수 Number)

- parseInt(): 문자열을 정수로 변환한 값을 반환하고, 변환할 수 없으면 NaN 을 반환함 (부동소수점 숫자도 표현 가능한 parseFloat도 있음)

- Number(): 문자 포맷에 따라 자동적으로 정수나 부동소수점 형으로 변환됨


## 3. Set 객체

Set 객체는 중복을 제거한 값들의 집합이다.

- `.add`: 객체에 새로운 요소 추가
- `.has`: 객체에 해당 요소가 존재하는지 확인. 반환값 boolean
- `.delete`: 객체에 요소 제거
- `.clear`: 객체에 모든 요소 제거
- 정렬을 하고 싶을 때 .sort를 못쓰기 때문에 Array로 변환해서 정렬해야한다

## 4. 배열 원하는 값으로 초기화

`Array.from` 사용하기

=> 배열 arr을 원하는 length 길이만큼 0으로 모두 초기화하기
```JS
let arr=Array.from({length:length},()=>0); 
```