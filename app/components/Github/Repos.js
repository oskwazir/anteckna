const React = require('react');

class Repos extends React.Component{
  render(){
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        Repos: {this.props.repos}
      </div>
      )
  }
}

module.exports = Repos;