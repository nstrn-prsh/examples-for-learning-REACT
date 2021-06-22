import Login from "./Login";
import { useAuthState } from "./context/auth-context";
import Dashboard from "./Dashboard";
import "./style.css";

const App = () => {
     const { token } = useAuthState();
     return <>{token ? <Dashboard /> : <Login />}</>;
};

export default App;
