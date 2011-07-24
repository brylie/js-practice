function Foo() {
  this.talk = function() {
    console.log("I'm", this.name);
  }
}

var bar = dojo.delegate(new Foo, {name: "Bar"});

bar.talk();
