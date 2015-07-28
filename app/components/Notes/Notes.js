const React = require('react');
const NotesList = require('./NotesList');

class Notes extends React.Component{
  render(){
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        <NotesList notes={this.props.notes} />
      </div>
      )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired
};

module.exports = Notes;