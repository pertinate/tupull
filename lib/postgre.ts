import { Pool } from "pg";

export const pool = new Pool();

pool.on('connect', () => {
    console.log('Pool Connected');
});
