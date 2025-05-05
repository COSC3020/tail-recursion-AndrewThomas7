const {Fib2} = pkg;
import pkg from 'tail-recursion-AndrewThomas7/code.js';
import jsc from 'jsverify';
var MaxNumiter=100;
var VaraibleSize=50;
var Testcount=0;

function Fib(n){
    if(n<=2){
        return 1;
    }
    else{
        return Fib(n-2)+Fib(n-1)
    }
}

for(var x=0; x<MaxNumiter; x++){
    var RandomTestNumber= Math.floor(Math.random(0,VaraibleSize))

    var RealFib=Fib(RandomTestNumber);
    var TestFib=Fib2(RandomTestNumber)
 
    if(TestFib!=RealFib){
        console.assert(RealFib==TestFib,"Counter Example: ",RandomTestNumber)
        throw "Numbers did not match"+ "Test's Passed: "+Testcount
    }
    Testcount++
}
console.assert("Test's Passed:",Testcount)
console.assert(true, 'tests passed')
