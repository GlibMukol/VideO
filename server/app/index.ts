import 'dotenv/config';
import express from 'express';
import Router from './routers';

const app = express();
const port = process.env.PORT || 8000;
app.use('/', Router);
app.listen(port, ()  => {
  return console.log(`server is listening on ${port}`);
});