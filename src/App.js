import "./App.css";

function App() {
     return (
          <ul>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #1</h2>
                         <p>Text Content #1</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #2</h2>
                         <p>Text Content #2</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #3</h2>
                         <p>Text Content #3</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #4</h2>
                         <p>Text Content #4</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #5</h2>
                         <p>Text Content #5</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #6</h2>
                         <p>Text Content #6</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #7</h2>
                         <p>Text Content #7</p>
                    </a>
               </li>
               <li>
                    <a href='#' contenteditable>
                         <h2>Title #8</h2>
                         <p>Text Content #8</p>
                    </a>
               </li>
          </ul>
     );
}

export default App;

/*
$(document).ready(function () {
  all_notes = $("li a");

  all_notes.on("keyup", function () {
    note_title = $(this).find("h2").text();
    note_content = $(this).find("p").text();

    item_key = "list_" + $(this).parent().index();

    data = {
      title: note_title,
      content: note_content
    };

    window.localStorage.setItem(item_key, JSON.stringify(data));
  });

  all_notes.each(function (index) {
    data = JSON.parse(window.localStorage.getItem("list_" + index));

    if (data !== null) {
      note_title = data.title;
      note_content = data.content;

      $(this).find("h2").text(note_title);
      $(this).find("p").text(note_content);
    }
  });
});
*/
