let b = 100;

function test() {
  console.log(this.b);
}

let obj = {
  a: 20,
  func1: test,
  func2: function() {
    console.log(this.b);
  }
};

obj.func1(); // undefined
obj.func2(); // undefined

let gFunc1 = obj.func1;
gFunc1(); 