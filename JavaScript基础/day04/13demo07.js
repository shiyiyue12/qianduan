// let d = new Date();
Date.prototype.dateFormate = function (){
    let year = this.getFullYear();
    let month = this.getMonth();
    let day = this.getDate();
    return `${year}年${month + 1}月${day}日`
}
let d = new Date("1991-10-1");
let result = d.dateFormate();
console.log(result);