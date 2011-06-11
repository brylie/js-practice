/* Sum all natural numbers BELOW 100 that are divisible by 5 or 3 */
var grand_total = 0;
for (var i=0;i<1000;i++) {
  if(i % 3 === 0) {
    grand_total += i;
  } else if (i % 5 === 0) {
    grand_total += i;
  }
}
alert("Total: " + grand_total);
