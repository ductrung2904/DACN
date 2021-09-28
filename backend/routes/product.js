const router = require("express").Router();
const db = require("../db");

// get all book
router.get("/book", async (req, res) => {
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
router.get("/book/:id/:metatitle", async (req, res) => {
    // console.log(req.params.id);

    try {
        const getBookDetail = await db.query(
            "SELECT b.book_id, b.*, cp.com_name, ct.cat_name, a.aut_name, s.shop_name, s.shop_avatar, COUNT(e.book_id), TRUNC(AVG(e.eva_rate), 1) as eva_rating FROM book b, company cp, category ct, author a, shop s, evaluate e WHERE b.com_id = cp.com_id and b.cat_id = ct.cat_id and b.aut_id = a.aut_id and b.shop_id = s.shop_id and b.book_id = e.book_id and b.book_id = $1 and b.book_metatitle = $2 GROUP BY b.book_id, cp.com_name, ct.cat_name, a.aut_name, s.shop_name, s.shop_avatar",
            [req.params.id, req.params.metatitle]
        );

        const sameProduct = await db.query(
            "select * from book left join (SELECT book_id, COUNT(*), TRUNC(AVG(eva_rate), 1) AS eva_rating FROM evaluate group by book_id) evaluate ON book.book_id = evaluate.book_id where cat_id in (select cat_id from book where book_id = $1)",
            [req.params.id]
        );

        const evaluates = await db.query(
            "SELECT * FROM book b, customer c, shop s, evaluate e WHERE e.cus_usr = c.cus_usr and e.book_id = b.book_id and s.shop_id = b.shop_id and b.book_id = $1",
            [req.params.id]
        );

        const evaluateRating = await db.query(
            "SELECT * FROM book left join (SELECT book_id, COUNT(*), TRUNC(AVG(eva_rate), 1) AS eva_rating FROM evaluate group by book_id) evaluate ON book.book_id = evaluate.book_id where book.book_id = $1",
            [req.params.id]
        );

        const evaluateCount = await db.query(
            "select eva_rate, count(eva_rate) as number from evaluate e, book b where e.book_id = b.book_id and b.book_id = $1 group by eva_rate order by eva_rate desc",
            [req.params.id]
        );

        const evaluateImages = await db.query(
            "SELECT e.eva_imgs FROM evaluate e, book b WHERE e.book_id = b.book_id and b.book_id = $1",
            [req.params.id]
        );

        res.status(200).json({
            status: "success",
            data: {
                books: getBookDetail.rows[0],
                same_products: sameProduct.rows,
                evaluates: evaluates.rows,
                evaluateRating: evaluateRating.rows[0],
                evaluateCount: evaluateCount.rows,
                evaluateImages: evaluateImages.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get all category
router.get("/category", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query("SELECT * FROM category");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                category: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get book by cat_id
router.get("/category/:id", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query(
            "SELECT * FROM category ct, book b Where ct.cat_id = b.cat_id AND ct.cat_id = $1",
            [req.params.id]
        );
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                category: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get all company
router.get("/company", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query("SELECT * FROM company");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                company: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get book by com_id
router.get("/company/:id", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query(
            "SELECT * FROM company c, book b Where c.com_id = b.com_id AND c.com_id = $1",
            [req.params.id]
        );
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                company: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get all shop
router.get("/shop", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query("SELECT * FROM shop");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                shop: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

// get book by shop_id
router.get("/shop/:id", async (req, res) => {
    try {
        // const results = await db.query("SELECT * FROM book");
        const results = await db.query(
            "SELECT * FROM shop s, book b Where s.shop_id = b.shop_id AND s.shop_id = $1",
            [req.params.id]
        );
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                shop: results.rows,
            },
        });
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;