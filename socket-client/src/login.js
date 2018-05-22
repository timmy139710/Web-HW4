import React, { Component } from 'react';
import './index.css'

class Login extends Component {

  click = id => {
    this.props.chooseUser(id);
  }

  render() {
    var userNames = [];
    for (let i = 0; i < this.props.users.length; ++i) {
      userNames.push(<li className="user-name" onClick={()=>this.click(i)}>{this.props.users[i].name}</li>);
    }
    return(
      <div id="login" >            
        <h4 className="choose-name"> Choose User: </h4>
        <ul className="user-list">
          {userNames}
        </ul>
      </div>
    );
  }
}

export default Login;
