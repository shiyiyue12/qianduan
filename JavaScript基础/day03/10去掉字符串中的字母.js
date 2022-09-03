// var str = "123abc456def";
// // g 全局搜索
// var reg = /[a-zA-Z]/g;
// var result = str.replace(reg,"");
// console.log(result);

// 截取字符串
var str = "2020-01-21";
var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
var result = reg.exec(str);
console.log(result);