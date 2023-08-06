import express from "express";
import NotesService from "../services/notesService";
import { NotesRepository } from "../repositories/notesRepository";

const notesRouter = express.Router();
const notesRepository = new NotesRepository();
const notesService = new NotesService(notesRepository);

notesRouter.get("/", (request, response) => {
  response.send(notesService.getAllNotes());
});
notesRouter.get("/stats", (request, response) => {
  response.send(notesService.getNoteStats());
});
notesRouter.get("/:id", (request, response) => {
  response.send(notesService.getNoteById(+request.params.id));
});
notesRouter.post("/", async (request, response) => {
  try {
    await notesService.createNote(request.body);
    response.send("Note created successfully");
  } catch (error: any) {
    response.statusCode = 500;
    response.send(error.errors[0]);
  }
});
//also used for archiving and unarchiving
notesRouter.patch("/:id", async (request, response) => {
  try {
    await notesService.editNote(+request.params.id, request.body);
    response.send("Changes saved successfully");
  } catch (error: any) {
    response.statusCode = 500;
    response.send(error.errors[0]);
  }
});
notesRouter.delete("/:id", (request, response) => {
  notesService.deleteNote(+request.params.id);
  response.send("Note removed successfully");
});

export default notesRouter;
