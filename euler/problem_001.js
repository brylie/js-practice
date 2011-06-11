/* Sum all natural numbers BELOW 100 that are divisible by 5 or 3 */
var grand_total = 0;
for (var i=0;i<1000;i++) {
  if(i % 3 ==0) {
    document.write(i + " /3" + "<br />");
    grand_total += i;
  } else if (i % 5 ==0) {
    document.write(i + " /5" + "<br />");
    grand_total += i;
  };
};
document.write("Total: " + grand_total);
