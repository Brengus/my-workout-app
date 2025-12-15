

type userRole = "guest" | "member" | "admin"

type User = {
    id: number,
    username: string,
    role: userRole
}
let nextUserId = 1

type UpdatedUser = Partial<User> //basically does id?: username?: role?: gives opportunity not to update all of them together
type NewUser = Omit<User, "id"> //picks out a specific component of your type and leaves everything else.
const users: User[] = [
    { id: nextUserId++, username: "John", role: "admin" },
    { id: nextUserId++, username: "Doe", role: "member" },
    { id: nextUserId++, username: "Giorgi", role: "guest" },
    { id: nextUserId++, username: "Lasha", role: "guest" }
]


function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(item => item.id === id);
    if (!foundUser) {
        throw new Error("there's no user with this id");
        return
    }
    Object.assign(foundUser, updates)
}

function addNewUser(newUser: NewUser): User {
    const user: User = { id: nextUserId++, ...newUser }
    users.push(user)
    return user
}

addNewUser({ username: "joe_schmoe", role: "member" })

// updateUser(1, { username: "new_john_doe" })
// updateUser(4, { role: "admin" })


const gameScores = [14, 21, 33, 42, 59]

const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"]

const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<T>(array: T[]): T | undefined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))
