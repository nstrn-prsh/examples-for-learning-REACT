import { useLocation, Link } from "react-router-dom";
import { IMAGES } from "./data";
import Thumbnail from './Thumbnail';

export default function Gallery() {
     let location = useLocation();

     return (
          <div>
               {IMAGES.map((i) => (
                    <Link
                         key={i.id}
                         to={{
                              pathname: `/img/${i.id}`,
                              state: { background: location },
                         }}
                    >
                         <Thumbnail color={i.color} />
                         <p>{i.title}</p>
                    </Link>
               ))}
          </div>
     );
}
