//function faktoryel(sayi)
// { 
//     return (sayi == 0) ? 1 : sayi*faktoryel(sayi-1); 
//   }


var sayi=5;
 
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log("Sayı :"+sayi+ "Faktöriyeli: "+ factorial(sayi));

