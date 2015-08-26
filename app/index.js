import React from 'react';
import Router from 'react-router';
var { Route, DefaultRoute, NotFoundRoute} = Router;
import RouterContainer from './services/RouterContainer';
import App from './components/App.react';
import Login from './components/Login.react';
import Main from './components/Main.react';

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

var routes = (
  <Route handler={App}>
    <Route name="login" path="/" handler={Login}/>
    <Route name="main" handler={Main}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

router.run(function (Handler) {
  React.render(<Handler/>, document.getElementById('container'));
});
