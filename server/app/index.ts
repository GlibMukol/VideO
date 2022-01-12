import 'dotenv/config';
import express from 'express';
import Router from './routers';

const app = express();
const port = process.env.PORT || 8000;

console.log(`port`, port)

app.use('/', Router);
app.listen(port, ()  => {
  return console.log(`server is listening on 123 ${port}`);
});