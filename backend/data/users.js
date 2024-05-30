import bcrypt from 'bcryptjs'

const user = [

    {
        name: 'Admin User1',
        email: 'admin@email.com',
        password: bcrypt.hashSync('1234', 10)
    },
    {
        name: 'Admin User2',
        email: 'admin2@email.com',
        password: bcrypt.hashSync('1234', 10)
    },
    {
        name: 'Admin User3',
        email: 'admin3@email.com',
        password: bcrypt.hashSync('1234', 10)
    },
]

export default user;