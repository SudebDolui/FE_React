const Book = require('../models/books');

// # Get All ends here. 

exports.getAll = (req, res) => {
    Book.find()
    .then(books => {console.log(books); res.send(books)})
    .catch(err => {
        res.status(500).send({message: err.message || "Something went wrong when retrieving the data"})
    })
};

exports.findOne = (req, res) => {
    console.log(req.params.id);
    Book.findById(req.params.id)
    .then(books => {
        if(!books) {
            return res.status(404).send({"message": "Book Id not found for "+req.params.id})
        }
        res.status(200).send(books);
    })
    .catch(err => {
        if(err.kind == "ObjectId")
        return res.status(404).send({"message": "Book Id not found for "+req.params.id})
    })
    res.status(500).send({message: err.message || "Something went wrong when retrieving the data"})
};

// # Create a new Book.

exports.createNewBook = (req, res) => {
    const newBook = new Book(req.body);

    if(!req.body.title) {
        res.status(400).send("Title is required");
    }

    Book.create(newBook)
    .then( data => res.status(201).json(data))
    .catch( err => res.status(400).send("Error processing request during create book"));

    // book.save();
    // res.status(201).json(newBook);
};

// # Updating the Book.

exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        read: req.body.read 
    }, {new: true})
    .then(data => {
        if(!data) {
            return res.status(404).send({"message": "Book Id not found and could not be updated" + req.params.id})
        }

        return res.status(204).json(data);
    })
    .catch(err => {
        if(err.kind == 'ObjectId') {
            return res.status(404).send({"message": "Book Id not found for " + req.params.id})
        }

        return res.status(204).send({"message": err.message || "Something went Wrong while retrieving the data."});
    });
};

// # Find one and Update.

exports.updateOne = (req, res) => {
    const bkId = req.params.id;

    Book.findOneAndUpdate({
        _id: bkId
    }, req.body)
    .exec()
    .then(data => {
        if(data) {
            return res.status(204).send(data)
        }
    })
    .catch(err => {
        if(err.kind == 'ObjectId') {
            return res.status(404).send({"message": "Book Id not found for " + req.params.id})
        }

        return res.status(204).send({"message": err.message || "Something went Wrong while retrieving the data."});
    });
};

// # Delete 
exports.deleteBook = (req, res) => {
    const bkId = req.params.id;

    Book.deleteOne({_id: bkId})
    .then(data => res.status(204).send(data))
    .catch(err => {
        if(err.kind == 'ObjectId') {
            return res.status(404).send({"message": "Book Id not found for " + req.params.id})
        }

        return res.status(204).send({"message": err.message || "Something went Wrong while retrieving the data."});
    });
};

