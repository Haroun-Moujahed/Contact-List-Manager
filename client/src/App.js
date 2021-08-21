import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactsList from "./Components/ContactsList/ContactsList";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import UserLogin from "./Components/UserLogin/UserLogin";
import UserSignUp from "./Components/UserSignUp/UserSignUp";
import Home from "./Components/Home/Home";

import { Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <PrivateRoute path="/contactsList" component={ContactsList} />
                <PrivateRoute path="/addContact" component={AddContact} />
                <PublicRoute restricted={false} path="/home" component={Home} />
                <PublicRoute
                    restricted={true}
                    path="/signUp"
                    component={UserSignUp}
                />
                <PublicRoute restricted={true} path="/" component={UserLogin} />
            </Switch>
        </div>
    );
}

export default App;
