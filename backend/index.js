require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");

// middleware
app.use(cors());
app.use(express.json());

// get all book
app.get("/book", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query("SELECT * FROM book left join (SELECT book_id, COUNT(*), TRUNC(AVG(eva_rate), 1) AS eva_rating FROM evaluate group by book_id) evaluate ON book.book_id = evaluate.book_id");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                book: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get a book
app.get("/book/:id", async (req, res) => {
    // console.log(req.params.id);

    try {
        const getABook = await db.query(
            "SELECT * FROM book where book_id = $1",
            [req.params.id]
        );

        const reviews = await db.query(
            "SELECT * FROM book left join (SELECT book_id, COUNT(*), TRUNC(AVG(eva_rate), 1) AS eva_rating FROM evaluate group by book_id) evaluate ON book.book_id = evaluate.book_id WHERE book.book_id = $1",
            [req.params.id]
        );

        // console.log(reviews);

        res.status(200).json({
            status: "success",
            data: {
                getABook: getABook.rows,
                reviews: reviews.rows[0],
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});


const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`backend running on port ${port}`);
});