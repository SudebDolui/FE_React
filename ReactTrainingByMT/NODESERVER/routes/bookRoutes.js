const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

// # Retrieve all the books.
router.get("/", bookController.getAll);
router.get("/:id", bookController.findOne);


// router.post("/", bookController.createNewBook);
// router.put("/:id", bookController.updateBook);
// router.patch("/:id", bookController.updateOne);
// router.delete("/:id", bookController.deleteBook);

module.exports = router;