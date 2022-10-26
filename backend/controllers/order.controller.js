import dbQuery from "../db/dbQuery.js"

// export const createOrder = async (req, res) => {
//     const { username, phone, address, email, require, book_id, quantity, price } = req.body;

//     try {
//         const orders = await dbQuery.query(
//             "with new_order as (insert into orders (cus_usr, ord_phone, ord_address, ord_email, ord_require) values ($1, $2, $3, $4, $5) returning ord_id) insert into order_detail (ord_id, book_id, ord_quantity, ord_price) values((select ord_id from new_order), (select book_id from book where book_id = $6), $7, $8) returning *",
//             [username, phone, address, email, require, book_id, quantity, price]
//         );

//         res.status(201).json({
//             status: "success",
//             data: {
//                 orders: orders.rows
//             }
//         });
//     } catch (err) {
//         console.error(err.message);
//     }
// }

export const createOrder = async (req, res) => {
    let strQuery = `select addOrder(
        '${req.body.cus_usr}',
        '${req.body.ord_created_date}',
        '${req.body.ord_phone}',
        '${req.body.ord_address}',
        '${req.body.ord_email}',
        '${req.body.ord_require}',
        1, '${req.body.book_id}',
        '${req.body.ord_quantity}',
        '${req.body.ord_price}'
    )`;

    try {
        const { rows } = await dbQuery.query(strQuery);
        return res.status(200).send(rows);
    } catch (error) {
        console.log(error.message)
    }
}

export const addMore = async (req, res) => {
    let strQuery = `insert into order_detail values(
        '${req.body.ord_id}',
        '${req.body.book_id}'
        '${req.body.ord_quantity}',
        '${req.body.ord_price}'
    )`;

    try {
        const { rows } = await dbQuery.query(strQuery);
        return res.status(200).send(rows);
    } catch (error) {
        console.log(error.message)
    }
}

// export const hadOrder = async (req, res) => {
//     let strQuery = `select`
// }