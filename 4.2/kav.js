const convert = function(num){
    let result;
    if (num >= 0 && num <=69) result = "F";
    else if (num >= 65 && num <=69) result ="D";
    else if (num >= 70 && num <=79) result ="D";
    else if (num >= 80 && num <=89) result ="D";
    else if (num >= 90 && num <=100) result ="D";
    return result;
    

};
 console.log(convert(69));

