import express = require('express');
import cors from 'cors'

import './database/connection'
import routes from './routes'

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333)
