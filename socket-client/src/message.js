import React, {Component} from 'react';

class Message extends Component {
  render() {
    return(
      <li class="sent">
        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
        <p>{this.props.msg}</p>
      </li>
    )
  }
};

class Messages extends Component {
  render() {
    var messages = this.props.messages.map(item => (
      <Message key={item.key} msg={item.msg}/>
    ));
    return(
    <div class="messages">
        <ul>
            <li class="sent">
                <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
            </li>
            <li class="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>When you're backed against the wall, break the god damn thing down.</p>
            </li>
            <li class="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Excuses don't win championships.</p>
            </li>
            <li class="sent">
                <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                <p>Oh yeah, did Michael Jordan tell you that?</p>
            </li>
            <li class="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>No, I told him that.</p>
            </li>
            <li class="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>What are your choices when someone puts a gun to your head?</p>
            </li>
            <li class="sent">
                <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                <p>What are you talking about? You do what they say or they shoot you.</p>
            </li>
            <li class="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
            </li>
            {messages}
        </ul>
    </div>
    )
  }
}

export default Messages; 
 
