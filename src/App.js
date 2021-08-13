import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;