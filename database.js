const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'paiz', password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwYWl6IiwiZW1haWwiOiJwYWl6QGdtYWlsLmNvbSIsImlhdCI6MTYxNzA5NzU5NCwiZXhwIjoxNjE3MTgzOTk0fQ.thbmvG_p_WRg5JkVtllcQRTZy7cMrbwfkEFqOLdvNPM',age: 21 , email: 'paiz@gmail.com' },
        { id: 2, username: 'john', password: '$2b$10$1Bu4tImM/Ms9rtU.8/n/COWpzUAGFB6YlsO5xZqFih1JUxafyFFXa',age: 20, email: 'john@gmail.com' },
    ]
}

const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND

exports.setUsers = function(_users) { 
  users = _users;
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}