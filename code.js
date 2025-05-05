function Fib2(n){
    function Fib2_(n,Fib,Fibold,FibNo){
        if(n<=2){
            return FibNo;
        }
        else{
           return Fib2_(n-1,Fib+Fibold,Fib,Fib+Fibold)
        }
    }
    return Fib2_(n,1,1,0)
}
