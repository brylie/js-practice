/* Solution to Project Euler #002
   LICENSE: GNU AGPL 2011 by Brylie Oxley */
for(var i=1,fibonacci=[1,2];i;i++) {
  length = fibonacci.length;
/* Calculate the next iteration. */
  next = fibonacci[length - 1] + fibonacci[length - 2];
/* Stop counting if greater than 4 million */
  if (next > 4000000) {
    break;
  }
  fibonacci.push(next);
}
/* Now lets make sure all items in the sequence are Integers */
for (var i=0,fibonacci_int=[];i < fibonacci.length;i++) {
  next_int = parseInt(fibonacci[i],10);
/*Add the Integer to fibonacci. */
  fibonacci_int.push(next_int);
}
/* Gather even numbers */
for (var p=0,fibonacci_even=[];p < fibonacci_int.length;p++) {
  if (fibonacci_int[p] % 2 === 0) {
    fibonacci_even.push(fibonacci_int[p]);
  }
}
/* Add a sum() function to array objects. */
Array.prototype.sum = function() {
  for (var i=0,sum=0;i<this.length;i++) {
    sum += this[i];
  }
  return sum;
}
total = fibonacci_even.sum();
console.log(total);
