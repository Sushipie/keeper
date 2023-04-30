import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./assets/notes";

import "./App.css";

function createNotes(note) {
  return (
    <Note key={note.key} title={note.title} content={note.content} />
  );
}

function App() {
  return (
    <>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </>
  );
}

export default App;
