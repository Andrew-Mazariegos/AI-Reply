import HomePage from "./pages/index";
import { auth } from "./services/firebase-auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./pages/LoginPage";

function App() {
    const [user, loading, error] = useAuthState(auth);

    return loading || !user ? <Login /> : <HomePage />;
}

export default App;
