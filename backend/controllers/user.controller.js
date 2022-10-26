import dbQuery from "../db/dbQuery.js"

// Đăng ký tài khoản
export const register = async (req, res) => {
    const { username, password, name, phone, address, email, gender } = req.body;

    try {
        const user = await dbQuery.query("SELECT * FROM customer WHERE cus_usr = $1", [username]);

        if (user.rows.length > 0) {
            return res.json({ status: "error", message: "Tên đăng nhập đã tồn tại" });
        }

        let newUser = await dbQuery.query(
            "INSERT INTO customer (cus_usr, cus_pwd, cus_name, cus_phone, cus_address, cus_email, cus_gender) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [username, password, name, phone, address, email, gender]
        );
        const result = newUser.rows[0];
        res.json({ status: "success", message: "Đăng ký thành công", result });
    } catch (err) {
        console.error(err.message);
        res.json({ status: "error", message: "Lỗi server" })
    }
}

// Đăng nhập
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await dbQuery.query("SELECT * FROM customer WHERE cus_usr = $1 and cus_pwd = $2", [username, password]);

        if (user.rows.length === 0) {
            return res.status(401).json("Tài khoản hoặc mật khẩu không hợp lệ 1");
        }

        const validPassword = user.rows[0].cus_pwd;

        if (!validPassword) {
            return res.status(401).json("Tài khoản hoặc mật khẩu không hợp lệ 2");
        }
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Lỗi server");
    }
}

// Lấy thông tin khách hàng
export const getUser = async (req, res) => {
    try {
        const results = await dbQuery.query(
            "SELECT cus_usr, cus_name, cus_phone, cus_address, cus_email, cus_phone FROM customer WHERE cus_usr = $1",
            [req.params.username]
        );

        res.status(200).json({
            status: "success",
            data: {
                user: results.rows[0]
            },
        });
    } catch (err) {
        console.error(err.message);
    }
}
