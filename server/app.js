const express = require('express')
const app = express() 
const cors = require('cors')
app.use(express.json())
app.use(cors())
const models = require('./models')


app.post('/user/delete-book', (req,res) => {
console.log(req.body.bookid)
    let id = req.body.bookid
  
    models.books.destroy({
        where: {
            id : id
        }
    }).then((response)=>{
       console.log(response)
    }).then(()=>{
        res.send({message:"book deleted"})
    })
 
  })

app.get("/api/books",async (req,res) =>{
   let books = await models.books.findAll(
       
   )
  // console.log(books)
  res.send(books)
})

app.post("/user/add-book",async (req,res) => {
    console.log(req.body)
    let bookname = req.body.bookname
    let description = req.body.description
    let URLimages = req.body.URLimages


    let book = await models.books.build({
        bookname:bookname,
        description:description,
        URLimages:URLimages

    })
    await book.save()
res.send()

})


app.listen(3001, () => {
    console.log('Server is running...')
})