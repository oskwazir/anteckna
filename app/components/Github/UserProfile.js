const React = require('react');

class UserProfiles extends React.Component{
  render(){
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio}
      </div>
      )
  }
}

UserProfiles.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

module.exports = UserProfiles;