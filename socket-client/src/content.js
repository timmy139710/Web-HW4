import React, {Component} from 'react';
import Messages from './message.js'
import TextInput from './textinput.js'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key_num: 5,
      messages: [
        {key: '1', msg: 'first'},
        {key: '2', msg: 'second'},
        {key: '3', msg: 'third'},
        {key: '4', msg: 'fourth'},
        ]
    }
  }
  updateMsg = newMsg => {
    const { messages } = this.state;
    this.setState({
      key_num: this.state.key_num+1
    });
    messages.push({
      key: "id" + this.state.key_num,
      msg: newMsg
    })
    this.setState({ messages });
  }
  render() {
    return (
    <div class="content">
		<div class="contact-profile">
			<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			<p>Harvey Specter</p>
			<div class="social-media">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				 <i class="fa fa-instagram" aria-hidden="true"></i>
			</div>
		</div>
        <Messages
          messages={this.state.messages}
        />
        <TextInput
          updateMsg={this.updateMsg}
        />
	</div>
    )
  }
}


export default Content;
