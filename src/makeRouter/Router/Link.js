export default function Link({ to, children }) {
     const handleClick = (e) => {
          e.preventDefault();

          window.history.pushState({}, "", to);
     };
     return (
          <a href={to} onClick={handleClick}>
               {children}
          </a>
     );
}
