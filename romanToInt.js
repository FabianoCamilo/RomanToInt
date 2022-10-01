function value(r) {
    if(r == 'I') {
      return 1;
    }
    if(r == 'V') {
      return 5;
    }
    if(r == 'X') {
      return 10;
    }
    if(r == 'L') {
      return 50;
    }
    if(r == 'C') {
      return 100;
    } 
    if(r == 'D') {
      return 500;
    }
    if(r == 'M') {
      return 1000;
    }
    return -1;
}
  
function romanToInt(str) {
  
  
      //initialize result
    var res = 0;
  
    for(i = 0; i < str.length; i++) {
  
  
         //getting value of symbol s[i]
        var s1 = value(str.charAt(i));
         
        //getting value of symbol s[i + 1]
        if (i + 1 < str.length) {
            var s2 = value(str.charAt(i + 1))
  
            // Comparing both values
            if(s1 >= s2) {
            //Value of current symbol is greater or equal to the next symbol
            res = res + s1;
        }
        else
        {
  
            //Value of teh current symbol is less than the next symbol
            res = res + s2 - s1;
            i++;
        }    
  
    } else {
        res = res + s1
        } 
    }
    return res;
}
var s = "MCMXCIV"  
romanToInt('MCMXCIV')