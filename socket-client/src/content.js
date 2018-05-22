import React, {Component} from 'react';
import Messages from './message.js'
import TextInput from './textinput.js'

class Content extends Component {
  render() {
    return (
    <div class="content">
		<div class="contact-profile">
			<img src={this.props.users[this.props.contact].imgURL} alt="" />
			<p>{this.props.users[this.props.contact].name}</p>
		</div>
        <Messages
          messages={this.props.messages}
          users={this.props.users}
          curuser={this.props.curuser}
          contact={this.props.contact}
        />
        <TextInput
          contact={this.props.contact}
          updateMsg={this.props.updateMsg}
          getInput={this.props.getInput}
          chooseUser={this.props.chooseUser}
        />
	</div>
    )
  }
}

export default Content;

