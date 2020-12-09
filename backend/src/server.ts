import express = require('express');
import cors from 'cors'

const app = express();

app.index("/notes/", (request, response) => {
  return response.json({message: "get all notes"});
})

app.get("/notes/", (request, response) => {
  return response.json({message: "get a note"})
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

app.listen(3333)

app.use(cors)