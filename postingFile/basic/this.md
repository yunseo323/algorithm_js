# this 바인딩

JS에서 바인딩의 의미는 **메서드와 객체를 묶어놓는 것**이다. (`bind`라는 단어는 결속시키다, 묶다)

다른 언어와 다르게 JS의 this는 함수가 호출되는 방식에 따라 다양한 의미로 동작하는데, this의 4가지 동작 방식에 대해 살펴보자.

## 첫번째 동작 방식: 전역 객체(기본 바인딩)

this는 기본적으로 실행환경의 전역객체를 가리킨다.

브라우저에서 this는 `window 객체`, node에서는 `global 객체`를 가리킨다.

전역 스코프에서 생성한 변수는 전역 객체에 등록되는 것을 알아두자. 하지만, `use strict`를 사용하는 경우 기본 바인딩 대상에서 전역객체는 제외되고 this로 전역개체를 참조하려하면 그 값은 undefined가 된다.
## 두번째 동작 방식: 암시적 바인딩(함수 내부)

함수 내부에서의 this는 함수를 호출한 방법에 따라 달라지는데, this가 바라보는 객체를 `context 객체`라고 한다.

어떤 객체로 함수가 호출되었을 때, 그 객체가 this의 context 객체가 되는데, 코드로 이해해보자

```JS
function test() {
    console.log(this.a);
  }
  
  let obj = {
    a: 20,
    func1: test,
    func2: function() {
      console.log(this.a);
    }
  };
  
  obj.func1(); // 20
  obj.func2(); // 20
```

=> 이때 객체에 정의되어 있는 함수를 다른 함수에서 콜백으로 넘길 경우, 원래 객체의 context에서 실행되는 것이 아니기에 this에는 기본 바인딩이 적용된다. 이런 상황을 암시적 바인딩이 소실되었다고 한다.

## 세번째 동작 방식: 명시적 바인딩

함수 객체는 call, apply, bind 메소드를 가지고 있는데, 이 세 메서드를 호출해 this 바인딩을 코드에서 명시하는 것을 명시적 바인딩이라고 한다. 

이때 첫번째 인자로 넘겨주는 것이 this의 context 객체가 된다.

```JS
let obj={
    a: 30
}
  
function re(){
    console.log(this.a);
}
  
re.call(obj); //30
re.apply(obj); //30
let bound = re.bind(obj);
bound(); //30
```

## 네번째 동작 방식: new 바인딩

new 키워드를 사용해서 객체를 초기화 할 수 있는데, 이때 이 새로 생성된 객체가 생성자 함수에서의 this 키워드로 바인딩 된다.

```JS
function Value(){
    this.a = 30; 
}

const v = new Value(); // -> 새로 생성된 객체가 this로 바인딩 됨

console.log(v.a);//30 
```


## 예외) 화살표 함수에서의 this

화살표 함수 내에서 this를 사용할 경우에 this에 바인딩하는 객체는 정적으로 결정되기 때문에, call, apply, bind 메서드로 this를 변경할 수 없다.

위 4가지의 규칙이 적용되지 않고, 화살표 함수를 정의하는 시점의 context 객체가 this에 바인딩된다는 것을 이해해야 한다. 그래서 화살표 함수 내부의 this는 항상 상위 스코프의 객체를 가리키게 된다.

```JS
const v = {
    a: 30, 
    func: function(){
        setTimeout(()=>{ 
            console.log(this.a);
        },1);
    }
}

v.func(); //30 
```