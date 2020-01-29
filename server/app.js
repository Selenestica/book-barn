const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000
const models = require('./models')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

app.post('/add-book', (req, res) => {
    
    let title = req.body.title,
    genre = req.body.genre,
    publisher = req.body.publisher,
    year = req.body.year,
    imageURL = req.body.imageURL
    
    const book = models.Book.build({
                    title: title,
                    genre: genre,
                    publisher: publisher,
                    year: year,
                    imageURL: imageURL    
                })

    book.save().then(savedBook => res.redirect('/'))
})

app.listen(PORT, () => {
    console.log("Server started. XD")
})