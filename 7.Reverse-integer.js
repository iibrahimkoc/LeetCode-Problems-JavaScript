/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a = Math.sign(x);
    let num = Math.abs(x).toString().split('').reverse().join('') * a;
    if(x < Math.pow(-2,31) || x > Math.pow(2,31)-1)
        return 0;
    return num;
};
