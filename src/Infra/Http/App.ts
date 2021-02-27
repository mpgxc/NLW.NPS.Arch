import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import 'reflect-metadata';
import '../Database';
import { router } from './Routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

export { app };
