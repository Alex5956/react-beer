import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";

function App() {
    return (
        <Router>

            <Header/>

            <Switch>
              <Route path={'/'} exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
