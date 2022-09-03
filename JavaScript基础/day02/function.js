function func(x, y) {
    console.log(typeof x);
    let result = 3 * x + 4 * y;
    return result;
}
// 不写return默认返回undefined
func(1,4);