
// Multiples/ Factors , even and odd ( num 5 % 2 === 0 ) 
//Average (a+b+c)/3


  // <= , >=

  




  //Optional Paramter Function 
  function myfunc(name : string, class1: string , subject? : string)  {
    return class1;
  }
myfunc("Aimon","one" , "urdu");

//Arrow Function

//let avg = (a+b+c)/3

// how to return accurate
function addTwo (num : number) : number {
   return num +2
    //return "Hello" // this is a point of concern  , this can be avoided by adding a retuen type
}
let result = addTwo(5)

// returning more than one types, can be done by using union types
function getValue (myVal : number) : boolean | string {
    if (myVal > 5) {
        return true
        
    }
    return "200 K"
}

function handlerr (errmsg : string) : never {
    throw new Error ("this is an error")
}




