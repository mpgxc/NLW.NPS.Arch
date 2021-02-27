import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './Routes';

import '../Database';

const app = express();

app.use(express.json());

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use(router);

export { app };
