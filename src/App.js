import HomePage from "./pages/index";
import { auth } from "./services/firebase-auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./pages/LoginPage";

function App() {
    const [user, loading, error] = useAuthState(auth);
    console.log(process.env.REACT_APP_API_KEY.slice(-5));

    return loading || !user ? <Login /> : <HomePage />;
}

export default App;
