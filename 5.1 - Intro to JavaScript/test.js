class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " says hi");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name + " barks");
  }
}

sparky = new Animal("sparky");
rex = new Dog("rex");

sparky.speak();
rex.speak();
