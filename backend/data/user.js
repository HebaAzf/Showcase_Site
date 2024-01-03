import bcrypt from 'bcryptjs'

const users = [
   {name: 'Admin User', 
   password: bcrypt.hashSync('1234', 10), //salt is ten becaugh the higher the nu- the more secure but also the longer it takes 
   isAdmin:true} 
]

export default users