import { NoteCategory } from "../entites/NoteCategory";
import { Note } from "../entites/Note";

export let notes: Note[] = [
  {
    id: 1,
    name: "Note 1",
    category: NoteCategory.Task,
    content: "Need to check my application on 28/07/2023 and 29/07/2023",
    archived: false,
  },
  {
    id: 2,
    name: "Note 2",
    category: NoteCategory.RandomThought,
    content: "I must try turkish tangerines",
    archived: false,
  },
  {
    id: 3,
    name: "Note 3",
    category: NoteCategory.Idea,
    content:
      "I need to follow code style guidelines to improve code readability",
    archived: false,
  },
  {
    id: 4,
    name: "Note 4",
    category: NoteCategory.RandomThought,
    content: "I must try pink watermelon",
    archived: false,
  },
  {
    id: 5,
    name: "Note 5",
    category: NoteCategory.Idea,
    content:
      "I need to follow code style guidelines to improve code readability",
    archived: false,
  },
  {
    id: 6,
    name: "Note 6",
    category: NoteCategory.Task,
    content: "Need to check my application on 01/09/2024 and 03/09/2024",
    archived: false,
  },
  {
    id: 7,
    name: "Note 7",
    category: NoteCategory.RandomThought,
    content: "I must try yellow tomatoes",
    archived: false,
  },
];
export function setNotes(newNotes: Note[]) {
  notes = newNotes;
}

export let currentId = 8;
export function incrementCurrentId() {
  currentId++;
}
