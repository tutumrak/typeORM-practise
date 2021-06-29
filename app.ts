import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import { UsersEntity } from './entities';

const app = async () => {
    const connection: Connection = await createConnection({
        type: 'sqlite',
        database: './db/typeorm.db',
        entities: [UsersEntity],

    });
    await connection.synchronize(true);
};

app();