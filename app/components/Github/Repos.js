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

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

module.exports = Repos;