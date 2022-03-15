let arr = [1,2,3,4,5];

let newArr = arr.filter((v, i)=>{
    return v%2==0;
});

console.log(newArr); 