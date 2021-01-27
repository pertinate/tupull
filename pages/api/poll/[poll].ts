import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../lib/postgre';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query);
    response.status(200).send({ hello: await pool.query(`select * from accounts`) });
};
