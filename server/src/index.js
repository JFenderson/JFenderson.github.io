import express  from 'express';
import { join } from 'path';
import bodyParser  from 'body-parser';




const app = express();
const CLIENT_PATH = join(__dirname, '../../client');

app.use(express.static(CLIENT_PATH));
app.use(express.json())

app.use(express.urlencoded({ extended: true }));



app.listen(3000, ()=> console.log('Server is listening on port 3000'))