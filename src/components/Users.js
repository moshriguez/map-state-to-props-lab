import React, { Component } from 'react';
import { connect } from "react-redux";
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i )=> {
            return <li key={i} >{user.username}</li>
          })}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  console.log(state)
  return { users: state.users }
}


export default connect(mapStateToProps)(Users)
