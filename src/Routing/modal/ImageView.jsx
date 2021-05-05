import { useParams } from "react-router-dom";
import { IMAGES } from "./data";
import Image from "./Image";

export default function ImageView() {
     let { id } = useParams();
     let image = IMAGES[parseInt(id, 10)];

     if (!image) return <div>Image not found</div>;

     return (
          <div>
               <h1>{image.title}</h1>
               <Image color={image.color} />
          </div>
     );
}
