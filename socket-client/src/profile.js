import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return(
    <div id="profile">
        <div class="wrap">
            <img id="profile-img" src={this.props.users[this.props.curuser].imgURL} class="online" alt="" />
            <p>{this.props.users[this.props.curuser].name}</p>
            <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
            <div id="status-options">
                <ul>
                    <li id="status-online" class="active"><span class="status-circle"></span> <p>Online</p></li>
                    <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
                    <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
                    <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}


export default Profile; 
 
