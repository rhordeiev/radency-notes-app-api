import { NotesRepository } from "../repositories/notesRepository";
import { Note } from "../entites/Note";
import { noteSchema } from "../schemas/noteSchema";
import { currentId, incrementCurrentId } from "../database/data";
import { Stats } from "../entites/Stats";

export default class NotesService {
  constructor(private notesRepository: NotesRepository) {}
  getAllNotes(): Note[] {
    return this.notesRepository.getAll();
  }
  getNoteById(id: number): Note {
    return this.notesRepository.getById(id);
  }
  getNoteStats(): Stats {
    return this.notesRepository.calculateStats();
  }
  async createNote(noteData: object): Promise<void> {
    try {
      const note: Note = await noteSchema.validate(noteData);
      note.id = currentId;
      this.notesRepository.create(note);
      incrementCurrentId();
    } catch (error: any) {
      throw error;
    }
  }
  async editNote(noteId: number, noteData: any): Promise<void> {
    try {
      const uneditedNote: any = this.getNoteById(noteId);
      Object.keys(uneditedNote).forEach((key) => {
        if (noteData[key as keyof Note] === undefined)
          noteData[key as keyof Note] = uneditedNote[key as keyof Note];
      });
      const editedNote: Note = await noteSchema.validate(noteData);
      this.notesRepository.edit(noteId, editedNote as Note);
    } catch (error: any) {
      throw error;
    }
  }
  deleteNote(noteId: number): void {
    this.notesRepository.delete(noteId);
  }
}
