import { Omega } from 'lucide-react';
import { createPool } from 'mysql2/promise';
import { hostname } from 'os';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'Omega'
});

export { pool };
