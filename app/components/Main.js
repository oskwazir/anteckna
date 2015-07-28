const React = require('react');

class Main extends React.Component{
  render(){
    return(
      <h1>Hello World</h1>
      )
  } 
}

React.render(<Main />,document.getElementById('app'));