import { historyPushState } from "./history";

export default function Link({ to, children }) {
     const handleClick = (e) => {
          e.preventDefault();
          historyPushState({}, "", to);
     };
     
     return (
          <a href={to} onClick={handleClick}>
               {children}
          </a>
     );
}
