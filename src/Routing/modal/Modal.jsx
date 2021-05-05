import { useHistory, useParams } from "react-router-dom";
import { IMAGES } from "./data";
import Image from "./Image";

export default function Modal() {
     let history = useHistory();
     let { id } = useParams();
     let image = IMAGES[parseInt(id, 10)];

     if (!image) return null;

     let back = (e) => {
          e.stopPropagation();
          history.goBack();
     };

     const divStyle = {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0,0,0,0.15)",
     };
     const divStyle2 = {
          position: "absolute",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
          background: "#fff",
     };

     return (
          <div OnClick={back} style={divStyle}>
               <div className='modal' style={divStyle2}>
                    <h1>{image.title}</h1>
                    <Image color={image.color} />
                    <button onClick={back}>close</button>
               </div>
          </div>
     );
}
