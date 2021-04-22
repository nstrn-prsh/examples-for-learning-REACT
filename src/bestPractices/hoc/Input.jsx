import React from "react";
import withCtrlInput from "./withCtrlInput";

function Input({ value, handleChanges }) {
     return (
          <input
               type='text'
               value={value}
               onChange={(e) => handleChanges(e.target.value)}
          />
     );
}

export default withCtrlInput(Input);
