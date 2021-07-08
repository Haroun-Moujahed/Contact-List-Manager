import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AddContact from "./Components/AddContact/AddContact";
import ContactsList from "./Components/ContactsList/ContactsList";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/addContact" render={() => <AddContact />} />
                <Route path="/" render={() => <ContactsList />} />
            </Switch>
        </div>
    );
}

export default App;
