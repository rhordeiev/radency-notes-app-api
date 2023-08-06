import { InferType } from "yup";
import { noteSchema } from "../schemas/noteSchema";

export type Note = InferType<typeof noteSchema>;
