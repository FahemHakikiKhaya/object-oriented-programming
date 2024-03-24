// ENCAPSULATION
// Explanation: Encapsulation works by cutting the direct access through the attributes instead they required us to call the setter or getter method
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    Car.prototype.accelerate = function (speed) {
        this.speed += speed;
    };
    Car.prototype.getCarInfo = function () {
        return { speed: this.speed, brand: this.brand };
    };
    return Car;
}());
var car = new Car("Lamborghini");
car.accelerate(50);
var _a = car.getCarInfo(), brand = _a.brand, speed = _a.speed;
console.log({ brand: brand, speed: speed });
// INHERITANCE
// Explanation: Inheritance helps a subclass to inherit the method and attributes of the upperclass
var Human = /** @class */ (function () {
    function Human(Name) {
        this.Name = Name;
    }
    Human.prototype.sayHi = function () {
        console.log("Hi ".concat(this.Name));
    };
    return Human;
}());
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    function SuperHuman(hero) {
        var _this = _super.call(this, hero) || this;
        _this.heroName = hero;
        return _this;
    }
    SuperHuman.prototype.sayHeroName = function () {
        console.log("My SuperHero Name is ".concat(this.heroName));
    };
    return SuperHuman;
}(Human));
var hero = new SuperHuman("Tatang");
hero.sayHeroName();
hero.sayHi();
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return circle;
}());
// POLYMORPHISM
// Explanation: Polymorphism is shown when multiple class share the same common method that is integrated through the shape interface
var square = /** @class */ (function () {
    function square(width, height) {
        this.height = height;
        this.width = width;
    }
    square.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return square;
}());
