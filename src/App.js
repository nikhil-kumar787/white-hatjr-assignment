import './App.css';
import Form from './components/form/form';
import Rectangle from './components/rectangle/reactangle';
import { BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path="/" component={Form}></Route>
    <Route path="/rectangle" component={Rectangle}></Route>
    </Router>
    </div>
  );
}

export default App;
