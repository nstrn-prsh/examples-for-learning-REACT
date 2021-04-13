import { useState, useDebugValue } from "react";

const Custom = (init) => {
     const [getForm, setForm] = useState(init);
     const handleForm = (e) => {
          const { target } = e;
          setForm({
               ...getForm,
               [target.name]: target.value,
          });
     };
     useDebugValue(
          getForm,
          (getForm) => `${Object.keys(getForm).length} fields`
     );

     return { getForm, handleForm };
};

export default Custom;
