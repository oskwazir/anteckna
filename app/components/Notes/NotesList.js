const React = require('react');

class NotesList extends React.Component{
  render(){
    let notes = this.props.notes.map(function(note, index){
      return <li className="list-group-item" key={index}> {note} </li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
};

module.exports = NotesList;