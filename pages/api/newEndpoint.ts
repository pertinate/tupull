import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../lib/postgre';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).send({ hello: await pool.query(`select * from accounts`) });
};
