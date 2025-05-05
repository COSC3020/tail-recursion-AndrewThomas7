export function Fib2(n){
    function Fib2_(n,Fib=1,Fibold=1,FibNo=1){
        if(n==0){
            return 0
        }
        if(n<=2){
            return FibNo;
        }
        else{
           return Fib2_(n-1,Fib+Fibold,Fib,Fib+Fibold)
        }
    }
    return Fib2_(n)
}
