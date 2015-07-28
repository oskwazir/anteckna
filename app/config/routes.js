const React = require('react');
const Main = require('../components/Main');
const Home = require('../components/Home');
const Profile = require('../components/Profile');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
)