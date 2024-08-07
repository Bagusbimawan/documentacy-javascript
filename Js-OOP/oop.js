class Person {
    constructor(name, age) {
      this.name = name; // Properti
      this.age = age;   // Properti
    }
  
    // Metode
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  person1.greet();
  person2.greet();

  // pewarisan inheretence

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Memanggil constructor dari superclass (Animal)
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog1 = new Dog('Rex', 'German Shepherd');
  dog1.speak(); // Output: Rex barks.
  