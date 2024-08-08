module.exports = function reverse (n) {
    let result = '';
    n = Math.abs(n);
    for(let i = n.toString().length-1; i >= 0 ; --i) {
        result +=n.toString()[i];
    }
    return result;
}
