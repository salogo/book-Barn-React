const express = require('express')
const app = express() 
const cors = require('cors')
app.use(express.json())
app.use(cors())
const models = require('./models')

app.get('/api/books',(req,res) => {
    let books = [{name: 'Atomic Habits'}]
    res.json(books)
})
app.post("/user/add-book",async (req,res) => {
    console.log(req.body)
    let bookname = req.body.bookname
    let description = req.body.description


    let book = await models.Book.build({
        bookname:bookname,
        description:description

    })
    await book.save()
res.send()

})


app.listen(3001, () => {
    console.log('Server is running...')
})