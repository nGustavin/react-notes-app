import express = require('express');
import cors from 'cors'

const app = express();

app.use(express.json())

app.get(`/notes/`, (request, response) => {
  return response.json({message: "hello notes-app"});
})


app.listen(3333)