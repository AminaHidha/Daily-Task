var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let convert=x.toString();
    let change=convert.split("").reverse().join("");
    return convert===change;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));

