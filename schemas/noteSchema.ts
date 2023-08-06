import * as yup from "yup";
import { NoteCategory } from "../entites/NoteCategory";

export const noteSchema = yup.object({
  id: yup.number(),
  name: yup.string().trim().required("Name field can't be empty"),
  created: yup.string(),
  content: yup.string().trim().required("Content field can't be empty"),
  category: yup
    .mixed()
    .oneOf(
      [
        NoteCategory.Task,
        NoteCategory.RandomThought,
        NoteCategory.Idea,
      ] as NoteCategory[],
      "Category must be one of the following values: Task, Random Thought, Idea",
    )
    .required("Category field can't be empty"),
  dates: yup.string(),
  archived: yup.boolean().required(),
});
