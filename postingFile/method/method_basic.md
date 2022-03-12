# 기본 JS 메서드 메모

1. 최솟값을 구할때 안전한 가장 큰 수를 넣을 수 있다
```JS
Number.MAX_SAFE_INTEGER;
```

2. 전개 연산자
함수를 호출하는 인자로 배열을 사용하거나 배열 리터럴 내에서 사용한다

전개 연산자를 사용해야 의
```JS
min = Math.min(...arr); //함수에서 호출하는 인자

[...arr,1,2,3] // 배열 리터럴
```

3. Function.prototype.apply() 메서드
위의 전개 연산자를 쓰지 않고 다음과 같이 구할 수 있다

apply()에서는 this 인자를 첫번째 인자로 받고, 두번째 인자로는 배열을 받는다
```JS
min = Math.min.apply(null, numbers); 
```

4. forEach, map, filter, reduce

위 네개의 메서드들은 고차 함수라는 공통점이 있다.

`forEach`
`map`
`filter`
`reduce`

