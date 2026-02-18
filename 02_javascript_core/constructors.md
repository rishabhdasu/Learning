# Constructor

A constructor is a special method inside a class that runs automatically when we create a new object from that class.

It is mainly used to:

- Initialize values
- Set up object properties
- Prepare the object for use

```js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user1 = new User("Rishabh", 28); // 'new' creates a new object and invokes the constructor
```

The constructor runs when new User() is called.

## Why This Concept Exists

Before classes, we created objects manually like this:

```js
const user1 = {
  name: "Rishabh",
  email: "rishabh@gmail.com",
  greet() {
    return `Hello ${this.name}`;
  }
};
```
Problem:

- Repetition
- Not scalable
- Hard to manage many similar objects

Classes provide a cleaner and more structured way to achieve object creation and reuse in JavaScript, but under the hood they still use prototypes.

- ✔ Provides structure
- ✔ Enables code reuse
- ✔ Avoids duplication
- ✔ Improves scalability

## Real-World Analogy

Think of:

🏗️ Class = Building blueprint
🏠 Object = Actual house built from blueprint

You can build 100 houses from the same blueprint.
Similarly, you can create many objects from one class.

## Basic Example

```js
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    drive() {
        return `${this.brand} car is driving`;
    }
}

const car1 = new Car("Mahindra", "Black");
console.log(car1.drive());

```

> ES6 classes are syntactic sugar over prototype-based constructor functions. Methods defined inside a class are stored on the prototype, not on each instance.

### How would you write this without class?

> we would use a constructor function and attach methods to its prototype, because ES6 classes are syntactic sugar over prototype-based constructor functions.

```js
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}
Car.prototype.drive = function() {
    return `${this.brand} car is driving`;
}
```

## Practical MERN Example

```js
class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async getAllTickets() {
        return this.ticketModel.find();
    }
}
```

In real projects:

- Classes are used to structure services
- Handle business logic
- Keep controllers clean

Class → blueprint
Object → actual instance

### Q1: Are classes in JavaScript same as Java?
> No. JavaScript classes are built on prototype-based inheritance, not classical inheritance like Java.

### Q2: What is the difference between class and object?
| Class | Object |
|-------|--------|
| Blueprint | Instance created from class |
| Defines structure | Holds actual data |
| Created once | Created many times |

### Q3: Is class mandatory in JavaScript?
> No.

We can create objects using:

- Object literals
- Constructor functions
- Factory functions

Class is just cleaner syntax.

### Q4: Can we create a class without constructor?
> Yes.

If not defined, JS creates a default empty constructor.

### Q5: Where are class methods stored?
> On the prototype, not inside each object.

This saves memory.

> A class in JavaScript is a blueprint used to create objects with predefined properties and methods. It helps structure code, enable reuse, and implement object-oriented patterns in scalable applications.