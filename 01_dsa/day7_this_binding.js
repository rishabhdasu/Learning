// this with regular function
const user = {
    firstName: "Rishabh",
    lastName: "Dasgupta",
    id: "RD-045",
    printUser: function () {
        return console.log(`Hello ${this.firstName} ${this.lastName}. Your User ID is: ${this.id}`)
        // Here this points to the object "user"
    }
}


// this with arrow function

const user2 = {
    firstName: "Virat",
    lastName: "Kohli",
    id: "VK-018",
    printUser: () => {
        return console.log(`Hello ${this.firstName} ${this.lastName}. Your User ID is: ${this.id}`)
        // 
    }
}

// When to use this with Arrow Function

const user3 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    id: "ST-010",
    printUser: function () {
        setTimeout(() => {
             return console.log(`Hello ${this.firstName} ${this.lastName}. Your User ID is: ${this.id}`)
        }, 1000)
    }
}

const user4 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    id: "ST-010",
    printUser:  () => {
        setTimeout(() => {
             return console.log(`Hello ${this.firstName} ${this.lastName}. Your User ID is: ${this.id}`)
        }, 5000)
    }
}


user.printUser();
user2.printUser();
user3.printUser();
user4.printUser();
