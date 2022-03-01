const createBook = async function(req, res){
    let bookData = req.body
    let save =  await bookModel.create(bookData);
    console.log('stored book data successfully');
    res.send({ "Book Data" : save});
}
const bookList = async function(req ,res){
    let booksName = await bookModel.find().select({bookName : 1, authorName : 1});
    console.log('Data sent successfully');
    res.send({"List of books and authors " : booksName})
}
const getBooksInYear = async function(req, res){
    let bookYearData = req.body.year
    let bookYear = await bookModel.find({year : bookYearData});
    console.log('Data sent successfully');
    res.send({ "Book Data according to the year" : bookYear});
}

const getParticularBooks = async function(req, res){
    let PF = req.body.field
    let finalList = await bookModel.find({$or : [{year: {$in: PF}},{bookName: {$in :PF}}]});
    console.log('Data sent successfully')
    res.send({ "List of all books" : finalList});


}


module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;