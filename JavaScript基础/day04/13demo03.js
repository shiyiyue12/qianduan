var arr = [1,2,3,4];
// var arr = new Array(1,2,3,4);
Array.prototype.sayhello = function (){
    console.log(`我是一个长度为${this.length}的字符串`);
};
// console.log(arr);
arr.sayhello();