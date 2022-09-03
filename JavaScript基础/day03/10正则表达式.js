var reg = /abc/;
// [] 表示范围 ^开始 $结尾 {}位数
// var r = /^[a-z0-9A-Z_]{5,8}$/;
// var r = /^\w$/ \w 字母数字下划线
// var r = /^[0-9]+$/ 等同于 var r = /^[0-9]{1，}$/
// \d 数字
// \s 空格 换行
// ? 表示范围 一位零位都可以
// . 匹配所有
// \转义
str = "testabacc";
//test返回值是布尔值，exec的返回值是匹配的内容
// var result = r.test(str);
var result = r.exec(str);
console.log(result);
