# 기본 JS 메서드 메모

### 1. 최솟값을 구할때 안전한 가장 큰 수를 넣을 수 있다
```JS
Number.MAX_SAFE_INTEGER;
```

### 2. 전개 연산자
함수를 호출하는 인자로 배열을 사용하거나 배열 리터럴 내에서 사용한다

전개 연산자를 사용해야 의도에 맞게 작동한다
```JS
min = Math.min(...arr); //함수에서 호출하는 인자 : arr배열에서의 최솟값 구하기

[...arr,1,2,3] // 배열 리터럴
```

=> Function.prototype.apply() 
위의 전개 연산자를 쓰지 않고 다음과 같이 구할 수 있다

apply()에서는 this 인자를 첫번째 인자로 받고, 두번째 인자로는 배열을 받는다
```JS
let numbers=[1,2,3,4,5];
min = Math.min.apply(null, numbers); 
```

### 3. forEach, map, filter, reduce (Array method)

위 네개의 메서드들은 고차 함수라는 공통점이 있다.

- `forEach` : 파라미터로 주어진 콜백함수를 배열 요소 각각에 대해 실행하는 메서드. 리턴값은 없다(반환값 undefined)

=> 리턴값이 없기 때문에 변수에 할당하는 식으로 사용하기 보단, 바로 호출하는 경우에 사용한다.

구문: `arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])`

콜백 함수의 파라미터는 1)요소 값, 2)요소 index, 3)순회 중인 배열(잘 사용 x) 이다. (thisArg: 옵션으로 콜백을 실행할때 this로 사용되는 값) 

```JS
let arr = [1,2,3,4,5];

let newArr = arr.forEach((v, i)=>{
    console.log(v);
    console.log(i);
});

console.log(newArr); //undefined
```

- `map` : 파라미터로 주어진 콜백함수를 배열 요소 각각에 대해 실행하고, 그에 대한 리턴값들을 기반으로 새로운 배열을 반환한다.

=> 리턴값을 모아 새로운 배열이 생성된다는 것이 앞의 forEach와 다른 점이다.

구문: `arr.map(callback(currentValue[, index[, array]])[, thisArg])`

콜백함수의 파라미터는 1)요소 값, 2)요소 index, 3)순회 중인 배열 이다. (thisArg: 옵션으로 콜백을 실행할때 this로 사용되는 값) 

```JS
let arr = [1,2,3,4,5];

let newArr = arr.map((v, i)=>{
    return v*v;
});

console.log(newArr); //[ 1, 4, 9, 16, 25 ]
```

- `filter` : 파라미터로 주어진 콜백함수에서 리턴하는 값이 true인 요소(콜백함수의 조건을 통과하는)를 모아 새로운 배열로 반환한다.

=> 어떤 요소도 테스트를 통과하지 못하면 빈 배열을 반환한다.

구문: `arr.filter(callback(element[, index[, array]])[, thisArg])`

콜백함수의 파라미터는 1)요소 값, 2)요소 index, 3)순회 중인 배열 이다. (thisArg: 옵션으로 콜백을 실행할때 this로 사용되는 값)

```JS
let arr = [1,2,3,4,5];

let newArr = arr.filter((v, i)=>{
    return v%2==0;
});

console.log(newArr); //[ 2,4 ]
```

- `reduce` : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

구문: `arr.reduce(callback[, initialValue])`
=> 배열.reduce((누적값, 요소 값, 요소 index, 순회중인배열)=>{return 결과값}, 초깃값)

=> 누적값을 다양하게 활용할 수 있다. (단순 덧셈 예제가 아닌)

```JS
let arr = [1,2,3,4,5];
let result = arr.reduce((acc,v)=>{
    return acc+v;
},0);
console.log(result); //15
```
 
### 4. slice, splice (Array method)
- `slice(start[, end])`: start부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다.

=> 원본 배열은 수정되지 않는다

- `splice(start[, deleteCount])` : start부터 deleteCount 개수만큼 배열의 기존 요소를 제거해서 배열이 내용을 변경한다. (새 요소를 추가하여 배열의 내용을 변경한다)

=> 원본 배열 자체가 수정된다

=> 전체 구문은 `splice(start[, deleteCount[, item1[, item2[, ...]]]])`, item1, item2의 배열에 추가할 요소를 지정하지 않으면 splice()는 요소 제거만 수행한다

### 5. substr, substring (String Method)

=> 두 매소드의 공통점: 원 문자열을 보존한다

- `substr(start, length)`: start 인덱스에서 length 길이 만큼의 문자열을 추출한다

- `subString(start, End)`: start 인덱스에서 End 인덱스까지의 문자열을 추출한다

### 6. split (String Method)

split은 넘겨진 구분자를 이용해 여러개의 문자열로 나눈 뒤 배열로 그 값을 반환한다.

```JS
let str="COMPUTERPROGRAMMING";
let arr = str.split('R');
console.log(arr); //[ 'COMPUTE', 'P', 'OG', 'AMMING' ]
```

### 7. indexOf (Array, String Method)

indexOf는 배열, 혹은 문자열에서 지정된 요소를 찾을 수 있는 **첫번째 인덱스를 반환**하고, 존재하지 않으면 -1을 리턴한다.