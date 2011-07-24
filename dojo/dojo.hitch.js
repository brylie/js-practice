var foo = {
  name : "foo",
  greet : function() {
    console.log("I'm", this.name);
  }
}

var bar = {
  name : "bar",
  greet : function() {
    console.log("I'm", this.name);
  }
}

foo.greet();
bar.greet();

bar.greet = dojo.hitch(foo, "greet");

bar.greet();
