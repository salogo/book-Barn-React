
const express = require('express')
const app = express() 
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

let books = [
    { name: 'Atomic Habits', poster: 'http://localhost:3001/images/atomic-habits.png' },
    { name: 'Effective People', poster: 'http://localhost:3001/images/effective-people.png' },
    { name: 'Hyper Focus', poster: 'http://localhost:3001/images/hyper-focus.png' },
    { name: 'Rich Dad', poster: 'http://localhost:3001/images/rich-dad.png' }
]

app.get("/api/books", (req, res) => {
    res.json(books)
})


app.listen(3001, () => {
    console.log('Server is running...')
})