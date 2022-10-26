import dotenv from 'dotenv';
dotenv.config();

export const database_url = process.env.DATABASE_URL;
export const PORT = 5000 || process.env.PORT;