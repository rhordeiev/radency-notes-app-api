import { notes, setNotes } from "../database/data";
import { Note } from "../entites/Note";
import NotesHelper from "../helpers/notesHelper";
import { ValidationError } from "yup";
import { Stats } from "../entites/Stats";
import { NoteCategory } from "../entites/NoteCategory";

export class NotesRepository {
  constructor() {
    notes.map((note) => NotesHelper.prepareData(note));
  }
  getAll(): Note[] {
    return notes;
  }
  getById(id: number): Note {
    return notes[NotesHelper.getIndexById(id)];
  }
  create(note: Note): void {
    notes.push(NotesHelper.prepareData(note));
  }
  edit(id: number, note: Note): void {
    const foundIndex = NotesHelper.getIndexById(id);
    if (foundIndex === -1)
      throw new ValidationError("Note with this id not exists");
    note.id = id;
    notes[foundIndex] = NotesHelper.prepareData(note);
  }
  delete(id: number): void {
    setNotes(notes.filter((note) => note.id !== id));
  }
  calculateStats(): Stats {
    const stats: Stats = {
      active: {
        task: 0,
        randomThought: 0,
        idea: 0,
      },
      archived: {
        task: 0,
        randomThought: 0,
        idea: 0,
      },
    };
    stats.active.task = notes.filter(
      (note) => !note.archived && note.category === NoteCategory.Task,
    ).length;
    stats.active.randomThought = notes.filter(
      (note) => !note.archived && note.category === NoteCategory.RandomThought,
    ).length;
    stats.active.idea = notes.filter(
      (note) => !note.archived && note.category === NoteCategory.Idea,
    ).length;
    stats.archived.task = notes.filter(
      (note) => note.archived && note.category === NoteCategory.Task,
    ).length;
    stats.archived.randomThought = notes.filter(
      (note) => note.archived && note.category === NoteCategory.RandomThought,
    ).length;
    stats.archived.idea = notes.filter(
      (note) => note.archived && note.category === NoteCategory.Idea,
    ).length;
    return stats;
  }
}
