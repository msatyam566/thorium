const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

//const getBooksWithAuthorDetails = async function (req, res) {
    //let specificBook = await bookModel.find().populate('author_id')
    //res.send({data: specificBook})



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
//module.exports.getBooksData= getBooksData
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
