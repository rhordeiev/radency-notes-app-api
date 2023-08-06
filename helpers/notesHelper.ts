import { Note } from "../entites/Note";
import { notes } from "../database/data";

export default class NotesHelper {
  static prepareData(note: Note): Note {
    if (!note.created) {
      const today = new Date(Date.now());
      const todayDay =
        today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
      const todayMonth =
        today.getMonth() + 1 > 9
          ? today.getMonth() + 1
          : `0${today.getMonth() + 1}`;
      const todayYear = today.getFullYear();
      note.created = `${todayDay}\\${todayMonth}\\${todayYear}`;
    }
    const foundDates = note.content.match(
      /(0?[1-9]|[12][0-9]|3[01])\/((0?[1-9]|1[012])\/(19|20)?[0-9]{2})/gm,
    );
    note.dates = foundDates?.join(", ") || "";
    return note;
  }
  static getIndexById(id: number): number {
    return notes.findIndex((note) => note.id === id);
  }
}
