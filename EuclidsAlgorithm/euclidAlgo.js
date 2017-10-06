function Euclid(a, b){
    if(b=='0'){
        return a;
    } else if(a>b){
        a = a-b;
	return Euclid(a, b);
    } else {
        b = b-a;
	return Euclid(a, b);
    } 
};

console.log(Euclid(49, 21));  // Find gcd for 49 and 21

function EuclidWiki(a,b){
    while(b!==0){
        if (a > b){
	    a = a - b;
	} else {
	    b = b - a;
	}    
    }
    return a;
};

console.log(EuclidWiki(49,21)); // Find gcd for 49 and 21
