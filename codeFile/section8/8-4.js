const v = {
    a: 30,
    func: function(){
        setTimeout(()=>{
            console.log(this.a);
        },1);
    }
}

v.func();