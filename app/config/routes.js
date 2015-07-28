const React = require('react');
const Main = require('../components/Main');
const Home = require('../components/Home');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
)