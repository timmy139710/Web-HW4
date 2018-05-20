import React, {Component} from 'react';
import Messages from './message.js'
import TextInput from './textinput.js'
const allusers = ['Mike Ross', 'Louis Litt', 'Harvey Specter', 'Rachel Zane']
const defaultMsg = "This is a long long long long long long long long long long long long long long long long long long default message to "


class Content extends Component {
  constructor(props) {
    super(props);
    var contactusers = allusers;
    for(var i = 0; i < allusers.length; i++){
      if(contactusers[i] === this.props.user) contactusers.splice(i,1);      
    }
    // console.log(contactusers);
    // this.state = {
    //   key_num: 1,
    //   messages: [{key: '0', msg: this.props.defaultMsg}]
    // }
    // this.updateMsg(this.props.defaultMsg);
    // }
//   updateMsg = newMsg => {
//     const { messages } = this.state;
//     this.setState({
//       key_num: this.state.key_num+1
//     });
//     messages.push({
//       key: "id" + this.state.key_num,
//       msg: newMsg
//     })
//     this.setState({ messages });
  }
  render() {
    return (
    <div class="content">
		<div class="contact-profile">
			<img src={this.props.users[this.props.contact].imgURL} alt="" />
			<p>{this.props.users[this.props.contact].name}</p>
		</div>
        <Messages
          messages={this.props.messages}
        />
        <TextInput
          updateMsg={this.props.updateMsg}
        />
	</div>
    )
  }
}


export default Content;




			/* <div class="social-media">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				 <i class="fa fa-instagram" aria-hidden="true"></i>
			</div> */
