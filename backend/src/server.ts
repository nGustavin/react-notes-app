import express = require('express');
import cors from 'cors'

import './database/connection'

const app = express();


app.get("/notes/", (request, response) => {
  return response.json({message: "get all note"})
})

app.post("/notes/", (request, response) => {
  return response.json({message: "create new note"})
});

app.put("/notes/", (request, response) => {
  return response.json({message: "edit a note"})
})

app.delete("/notes/", (request, response) => {
  return response.json({message: "delete a note"})
})

app.use(cors)

app.listen(3333)
