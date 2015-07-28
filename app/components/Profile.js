const React = require('react');
const Router = require('react-router');
const Repos = require('./Github/Repos');
const UserProfile = require('./Github/UserProfile');
const Notes = require('./Notes/Notes');

const Profile = React.createClass({
  mixins: [Router.State],
  getInitialState: function(){
    return {
      notes: ['note1', 'note2'],
      bio: {name: 'Omer'},
      repos: [1,2,3]
    }
  },
  render: function(){
    let username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile  username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});


Profile.propTypes = {
  notes: React.PropTypes.array,
  bio:  React.PropTypes.object,
  repos:  React.PropTypes.array
};

module.exports = Profile;