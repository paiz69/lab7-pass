const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'warinthon', password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJ3YXJpbmhvbiIsImVtYWlsIjoid2FyaW50aG9uQGdtYWlsLmNvbSIsImlhdCI6MTYxNzAwNDI5NywiZXhwIjoxNjE3MDkwNjk3fQ.buJlsDbz0gD15QH4gfZh4Aftd7jhhXHsEIsqlIFItpw',age: 20 , email: 'warinthon@gmail.com' },
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