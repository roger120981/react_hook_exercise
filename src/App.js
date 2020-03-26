import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { Adduser } from './components/Adduser';
import { Edituser} from './components/Edituser';


function App() {
  return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Adduser} exact />
        <Route path="/edit/:id" component={Edituser} exact />
      </Switch>
  );
}

export default App;
