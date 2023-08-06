import express from "express";
import bodyParser from "body-parser";
import notesRouter from "./routes/notesRouter";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

app.use(bodyParser.json());
app.use("/notes", notesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
