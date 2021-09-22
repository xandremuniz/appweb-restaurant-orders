import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from './modules/login/Login';
import RestaurantsList from './modules/restaurantsList/RestaurantsList';
import { connect } from 'react-redux';

function App(props) {
  const {
    userInfo
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {userInfo == null &&
            <Login />
          }
          {userInfo != null &&
            <Redirect
              to={{
                pathname: "/home"
              }}
            />
          }
        </Route>
        <Route path="/home">
          <RestaurantsList />
        </Route>
        <Route path="/manage">
          <div>Pantalla de gestion de pedidos de un restaurante</div>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default connect(
  store => ({
      userInfo: store.login.userInfo,
  }),
  null
)(App);