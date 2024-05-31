/**
 * @param {string} 
 * @return {number}
 */
var romanToInt = function(s) {
    var min=9999, num, array,sum=0, temp;
    array = s.split('')
    array.forEach(element => {
        num = romanKarsit(element);
        if(min >= num){
            sum += num;
        }
        else{
            sum -= (temp+temp);
            sum += num;
        }
        min = num;
        temp = num;
    })
    return sum;
};
var romanKarsit = function(num){
    var number;
    switch (num) {
        case 'M':
            number = 1000; 
            break;
        case 'D':
            number = 500; 
            break;
        case 'C':
            number = 100; 
            break;
        case 'L':
            number = 50; 
            break;
        case 'X':
            number = 10; 
            break;
        case 'V':
            number = 5; 
            break;
        case 'I':
            number = 1; 
            break;
        default:
            break;
    }
    return number;
}
