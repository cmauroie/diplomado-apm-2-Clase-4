function function_Number (num1,num2) {
	//var a = num1, b= num2;
	if(num1>num2){
	alert("El número mayor es A = "+num1);
	}else{
	alert("El número mayor es B = "+num2);
}	// body...
}

function_Number(3,8);




function findMax() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

x = findMax(1, 123, 500, 115, 44, 88);
alert("mayor: "+x);