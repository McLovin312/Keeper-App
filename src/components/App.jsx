import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes";

const newNotes = notes.map((newNote) => (
  <Note key={newNote.key} title={newNote.title} content={newNote.content} />
));

function App() {
  return (
    <div>
      <Header />
      {newNotes}
      <Footer />
    </div>
  );
}

export default App;
