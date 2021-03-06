# JS에서의 얕은 복사, 깊은 복사(배열 복사, 객체 복사)

## JS에서의 값(원시값, 참조값)
변수는 원시값과 참조값이라는 두 가지 타입의 데이터를 저장할 수 있다.

`원시값`은 값을 복사할 때 복사값을 다른 메모리에 할당하기 때문에, 복사된 값과 복사한 값이 서로 영향을 주고받지 않는다. (단순한 데이터이다) **변수에 저장된 실제 값을 조작하기 때문에 값으로 접근**한다는 표현을 쓴다.

이 원시값을 복사할 때는 깊은 복사가 이루어진다.

=> 원시값: Number, String, Boolean, Null, Undefined, Symbol


`참조값`은 객체 자체가 아닌, **그 객체에 대한 참조(객체의 주소를 가리킴)를 조작해 데이터를 저장하기에, 참조로 접근한다**는 표현을 쓴다. JS에서는 객체의 메모리 공간을 직접 조작하는 것이 불가능하다.

이 참조값을 복사할 때는 얕은 복사가 이루어진다.

=> 참조값: Object(Array,Function...)

**얕은 복사**: 참조 주소를 공유해 a를 복사한 b 객체의 값을 수정했을 때 a도 변경되는 경우를 얕은 복사라고 한다.
**깊은 복사**: 깊은 복사는 참조 주소를 공유하지 않고 참조 공간도 복사한다. a를 복사한 b 객체의 값을 수정해도 a에 영향이 없다.

## JS에서 배열을 복사하는 방법

여러 방법이 있지만, 1차원 배열에 대해서는 깊은 복사가 되지만 2차원 배열 이상은 깊은 복사가 되지 않는다.

다음과 같이 대입연산자를 사용하면 배열에서는 얕은 복사가 이루어진다.
```JS
arr1=arr2
```

깊은 복사를 하려면 다음 메서드를 사용한다.
1. slice()
```JS
arr2 = arr1.slice();
```

2. concat()
```JS
arr2 = [].concat(arr1);
```

3. spread 연산자
```JS
arr2 = [...arr1];
```

4. Array.from()
```JS
arr2 = Array.from(arr1);
```

## JS에서 객체를 복사하는 방법

배열과 마찬가지로 1레벨은 깊은 복사가 되지만 2레벨 이상은 깊은 복사가 되지 않는다.

1. assign()
```JS
object2 = Object.assign({},object1);
```
2. spread 연산자 
```JS
object2 = {...object1};
```
