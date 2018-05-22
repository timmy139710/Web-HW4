import React, { Component } from 'react';
import Profile from './profile.js';
import Contact1 from './contact1.js';
import Contact2 from './contact2.js';

class SidePanel extends Component {
  render() {
    let users = [];
    for (let i = 0; i < this.props.users.length; ++i) {
      if (i === this.props.curuser) continue;
      if (this.props.unread[i] !== 0)
        users.push(
          <Contact2
            parentCallback={this.props.setName}
            setURL={this.props.setImgURL}
            contact={i}
            unread={this.props.unread[i]}
            users={this.props.users}
            curcontact={this.props.contact}
            user={this.props.users[i].name}
            url={this.props.users[i].imgURL}
            messages={this.props.messages}
            previews={this.props.previews}
          />
    );
      else         
      users.push( 
        <Contact1
            parentCallback={this.props.setName}
            setURL={this.props.setImgURL}
            contact={i}
            unread={''}
            users={this.props.users}
            curcontact={this.props.contact}
            user={this.props.users[i].name}
            url={this.props.users[i].imgURL}
            messages={this.props.messages}
            previews={this.props.previews}
        />
        );
    } 
    return (
    <div id="sidepanel">
        <Profile
           usr_ImgURL={this.props.usr_ImgURL}
           curuser={this.props.curuser}
           users={this.props.users}
        />
		<div id="contacts">
			<ul>
                {users}
			</ul>
		</div>
	</div>
    );
  }
}
export default SidePanel;

