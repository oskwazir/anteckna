const React = require('react');
const Router = require('react-router');
const routes = require('./config/routes');

Router.run(routes, (Root) =>{
  React.render(<Root />, document.getElementById('app'));  
});

