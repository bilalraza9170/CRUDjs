// Sample data
let users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 }
];

// Create operation
function createUser(user) {
    users.push(user);
}

// Read operation
function getUserById(id) {
    return users.find(user => user.id === id);
}

function getAllUsers() {
    return users;
}

// Update operation
function updateUser(id, updatedUser) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
    }
}

// Delete operation
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

// Usage
createUser({ id: 4, name: 'Alice Johnson', age: 28 });
console.log(getAllUsers());

const user = getUserById(2);
console.log(user);

updateUser(3, { name: 'Robert Johnson' });
console.log(getAllUsers());

deleteUser(1);
console.log(getAllUsers());