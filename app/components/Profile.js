const React = require('react');
const Router = require('react-router');
const Repos = require('./Github/Repos');
const UserProfile = require('./Github/UserProfile');
const Notes = require('./Notes/Notes');
const ReactFireMixin = require('reactfire');
const Firebase = require('firebase');

const Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {name: 'Tyler'},
      repos: [1,2,3]
    }
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://glowing-heat-4945.firebaseio.com');
    let childRef = this.ref.child(this.getParams().username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  render: function(){
    let username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
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

module.exports = Profile;