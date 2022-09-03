var list = [1, 6, 82, 8, 4, 9];
// list.sort(function(a,b){
//     return b - a;
// });
// console.log(list);


var list2  = list.filter(function (value) {
    if(value>2)
        return null;
    else return value;
})
console.log(list2);

// var list3 = ["a","b","c"];
// var str = list3.join("\t");
// console.log(str);

// var str = "banana";
// var list4 = str.split("a");
// console.log(list4);