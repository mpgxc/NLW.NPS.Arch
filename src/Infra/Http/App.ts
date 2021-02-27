import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import { router } from './Routes';

import '../Database';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

export { app };
