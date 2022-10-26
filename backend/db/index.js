import pkg from 'pg';
const { Pool } = pkg;
import { database_url } from "../setting.js"

const databaseConfig = { connectionString: database_url };
const pool = new Pool(databaseConfig);

export default pool

// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };