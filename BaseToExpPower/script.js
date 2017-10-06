function power(x, y){

    var i=0;
    var result = 1;

    if(y<0){
      while(y<i){
	        result = result * (1/x);
	        i--;
      }	
    } else if(y>0){
      while(y>i){
	        result = result * x;
	        i++;
      }
    } else {	  
	        return 1;
    }
    
    return result;
}
   
console.log(power(2,-6)); //Example
