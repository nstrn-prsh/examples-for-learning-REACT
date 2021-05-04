import { useParams, useHistory } from "react-router-dom";

export default function Blog() {
     const params = useParams();
     const history = useHistory();

     console.log(params);
     console.log(history);

     return (
          <div>
               <label>Blog</label>
               <span>params:</span>
               <p> {JSON.stringify(params)}</p>
               <h1> history:</h1>
               <h2> {JSON.stringify(history)}</h2>
          </div>
     );
}
