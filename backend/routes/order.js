const router = require("express").Router();
const db = require("../db");

const newOrder =

    router.post("/order", async (req, res) => {
        const { username, phone, address, email, require, book_id, quantity, price } = req.body;

        try {
            const orders = await db.query(
                "with new_order as (insert into orders (cus_usr, ord_phone, ord_address, ord_email, ord_require) values ($1, $2, $3, $4, $5) returning ord_id) insert into order_detail (ord_id, book_id, ord_quantity, ord_price) values((select ord_id from new_order), (select book_id from book where book_id = $6), $7, $8) returning *",
                [username, phone, address, email, require, book_id, quantity, price]
            );

            // const result = orders.rows[0];
            res.status(201).json({
                status: "success",
                data: {
                    orders: orders.rows[0]
                }
            });
        } catch (err) {
            console.error(err.message);
            // res.json({ status: "error", message: "Lỗi server" })
        }
    });

module.exports = router;