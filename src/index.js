module.exports = function reverse (n) {
    str = String(Math.abs(n));
    strReverse = '';
    
    for(let i = str.length -1; i >= 0; i--) {
        strReverse += str[i];
    }
      
    return +strReverse;
}
