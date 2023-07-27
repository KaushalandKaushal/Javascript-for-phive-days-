const accountId = 144554
let accountEmail = "kaushalkrap@google.com"
var accountCity = "kota"
accountPassword = 123789
 /*we can declare variables in javascript without 
 using any keyword but we should not */

 let accountState;
 /*here we have declared a variable but 
 assigned any value to it now if we print this
 then we will get undefined*/

//accountId = 2 //not allowed
/* means const variable cant be initiated again,it can only be defined once
we can initiate var and let again,
in modern days we mostly use let to define variables*/

accountEmail = "kr@kr.com"
accountPassword = "21312131"
accountCity = "Bengaluru"

console.log(accountId)
//now for printing all this initiated variables we can write console.log again and again but there's another way if we want all this data in a tabular form 
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])
/*prefer not to use var because of issue
 in block scope and functional scope*/