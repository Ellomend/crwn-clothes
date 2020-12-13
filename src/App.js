import './App.css';
import Homepage from './pages/Homepage/Homepage'
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/hats" component={() => <h1>Hats</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
