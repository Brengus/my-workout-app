// Basic Types --> number, string, boolean, any etc.
// Custom Types --> type Pizza = {name: string}
// Literal Types --> type status = "completed"  type number = 1 | 2 | 3

// Optional Properties --> type Pizza = { name?:  string, id: number}

// Type Narrowing --> if(typeof something === "string")

// Type -->void --> means that the function doesn't return anything
// Unions --> | --> basically OR for types
// Utility Types --> Omit<Pizza, "id"> --> picks out in this case "id" property from the type Pizza and leaves everything else.
// Utility Types --> Partial<Pizza> --> makes stuff optional, basically does this: {id?: number, name?: string price?: number}
// If a function has type it has to return a value that matches the type
// Generics --> <Type> in a function helps you have a dynamic type for its properties, because the types may vary. syntax: function something<SomeType>(array: SomeType[]){}

type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

type NewPizza = Omit<Pizza, "id">

type Identifier = string | number

let nextPizzaId: number = 1

let cashInRegister: number = 100

let nextOrderId: number = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 8 },
]

const orderQueue: Order[] = []

function addNewPizza(newPizza: NewPizza): Pizza {
    const pizza = { id: nextPizzaId++, ...newPizza }
    menu.push(pizza)

    return pizza
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id = orderId)
    if (!order) {
        return
    }
    order.status = "completed"
    return order
}


function getPizzaDetail(identifier: Identifier): Pizza | undefined {
    let smth;
    if (typeof identifier === "string") {
        return menu.find(item => item.name === identifier)
    } else if (typeof identifier === "number") {
        return menu.find(item => item.id === identifier);
    } else {
        throw new TypeError();
    }
}

getPizzaDetail(1);

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 12 })

placeOrder("Chicken Bacon Ranch")

completeOrder(1)