// ENCAPSULATION
// Explanation: Encapsulation works by cutting the direct access through the attributes instead they required us to call the setter or getter method

class Car {
  private brand: string;
  private speed: number;

  constructor(brand: string) {
    this.brand = brand;
    this.speed = 0;
  }

  accelerate(speed: number) {
    this.speed += speed;
  }

  getCarInfo(): { speed: number; brand: string } {
    return { speed: this.speed, brand: this.brand };
  }
}

const car = new Car("Lamborghini");
car.accelerate(50);
const { brand, speed } = car.getCarInfo();
console.log({ brand, speed });

// INHERITANCE
// Explanation: Inheritance helps a subclass to inherit the method and attributes of the upperclass

class Human {
  constructor(private Name: string) {}

  sayHi() {
    console.log(`Hi ${this.Name}`);
  }
}

class SuperHuman extends Human {
  private heroName: string;

  constructor(hero: string) {
    super(hero);
    this.heroName = hero;
  }

  sayHeroName() {
    console.log(`My SuperHero Name is ${this.heroName}`);
  }
}

const hero = new SuperHuman("Tatang");
hero.sayHeroName();
hero.sayHi();

// ABSTRACTION
// Explanation: By creating an interface shape we create a clear abstraction of the method required if a certain class is consider as a shape

interface shape {
  calculateArea(): number;
}

class circle implements shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// POLYMORPHISM
// Explanation: Polymorphism is shown when multiple class share the same common method that is integrated through the shape interface

class square implements shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}
