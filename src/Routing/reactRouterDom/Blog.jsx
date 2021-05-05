import {
     useParams,
     useHistory,
     useRouteMatch,
     useLocation,
} from "react-router-dom";

export default function Blog() {
     const params = useParams();
     const history = useHistory();
     const match = useRouteMatch();
     const match2 = useRouteMatch("/auth");
     const match3 = useRouteMatch({ path: "/params/:slug/:id" });
     const match4 = useRouteMatch({ path: "/params" });
     const location = useLocation();

     console.log(params);
     console.log(history);

     return (
          <div>
               <label>Blog</label>
               <span>params:</span>
               <p> {JSON.stringify(params)}</p>
               <h1> history:</h1>
               <h2> {JSON.stringify(history)}</h2>
               <h3> match:</h3>
               <h4> {JSON.stringify(match)}</h4>
               <h3> match:</h3>
               <h4> {JSON.stringify(match)}</h4>
               <h5> match2:</h5>
               <h6> {JSON.stringify(match2)}</h6>
               match3:
               <div> {JSON.stringify(match3)}</div>
               <div> {JSON.stringify(match4)}</div>
               <h2>location:</h2>
               <h2>{JSON.stringify(location)}</h2>
          </div>
     );
}
