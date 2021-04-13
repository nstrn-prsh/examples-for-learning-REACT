import { useState } from "react";

const Custom = (init) => {
     const [getForm, setForm] = useState(init);
     const handleForm = (e) => {
          const { target } = e;
          setForm({
               ...getForm,
               [target.name]: target.value,
          });
     };
     return { getForm, handleForm };
};

export default Custom;
