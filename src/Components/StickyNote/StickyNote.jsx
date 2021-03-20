import Note from "./Note";
import "./stickyNote.css";

const StickyNote = () => {
     const noteData = [
          { title: "Title #1", content: "Text Content" },
          { title: "Title #2", content: "Text Content" },
          { title: "Title #3", content: "Text Content" },
          { title: "Title #4", content: "Text Content" },
          { title: "Title #5", content: "Text Content" },
     ];

     return (
          <ul>
               {noteData.map((note, index) => (
                    <Note
                         key={index}
                         title={note.title}
                         content={note.content}
                    />
               ))}
          </ul>
     );
};

export default StickyNote;
