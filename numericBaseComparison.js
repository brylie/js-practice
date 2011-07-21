baseArray = [];
for (base=2;base <= 15; base++) {
    var subSet = [];
    for (i=1;i<=15;i++) {
        a = i.toString(base);
        subSet.push(a);
    }
    baseArray.push(subSet);
}
      
// console.log(baseArray);
dojo.forEach (baseArray, function(x) {
          console.log(x);
          });
