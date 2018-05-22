import React, {Component} from 'react';

class Message extends Component {
  render() {
    return(
      <li class={this.props.class}>
        <img src={this.props.imgURL} alt="" />
        <p>{this.props.message}</p>
      </li>
    )
  }
};

class Messages extends Component {
  render() {
    var messages = [];
    //preview default message
    messages.push(<Message class={"sent"} message={this.props.users[this.props.curuser].messages[0].msg}
    imgURL={this.props.users[this.props.curuser].imgURL}/>);
    messages.push(<Message class="replies" message={this.props.users[this.props.contact].messages[0].msg}
    imgURL={this.props.users[this.props.contact].imgURL}/>);

    //message history
    for (let i = 0; i < this.props.messages.length; ++i){
    if (this.props.messages[i].direct === 0)
      messages.push(<Message class={"sent"}    message={this.props.messages[i].message} 
      imgURL={this.props.users[this.props.curuser].imgURL} />);
    else 
      messages.push(<Message class={"replies"} message={this.props.messages[i].message} 
      imgURL={this.props.users[this.props.contact].imgURL} />);
    }
    return(
    <div class="messages">
        <ul>
            {messages}
        </ul>
    </div>
    )
  }
}

export default Messages; 
 
