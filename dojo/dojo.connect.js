function Foo() {
  this.greet = function(greeting) { console.log("Foo.", greeting); }
}
function Bar() {
  this.greet = function(greeting) {console.log("Bar.", greeting);}
}

foo = new Foo;
bar = new Bar;

var handle = dojo.connect(foo, "greet", bar, "greet");

foo.greet("Nice to meet you.");
dojo.disconnect(handle);
foo.greet();
