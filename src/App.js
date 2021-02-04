import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Destinations from './components/pages/Destinations';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' exact component={Services} />
       <Route path='/destinations' exact component={Destinations} />
       <Route path='/sign-up' exact component={SignUp} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
