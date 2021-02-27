/* eslint-disable no-console */
import 'dotenv/config';
import { app } from './App';

app.listen(process.env.API_PORT, () => {
  console.log('O pai ta on!');
});
