/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/



function operacionCallBack(recibeOperacion){
 recibeOperacion('-',3,4);


}

operacionCallBack(function(operacion,num1,num2){

  if ("+" ==operacion) {
    alert(num1+num2);
  }else if ("-" ==operacion){
    alert(num1-num2);
  }else if ("x" ==operacion){
    alert(num1*num2);
  }else if ("/" ==operacion){
    alert(num1/num2);
  };
  
});