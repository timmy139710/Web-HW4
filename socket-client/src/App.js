import React, { Component } from 'react';
import logo from './logo.svg';
import socketIO from 'socket.io-client';
import './App.css';
import './index.css';
import SidePane from './sidepane.js';
import Login from './login.js';
import Content from './content.js';
const defaultMsg = "This is a default message to ";
const TOTAL_USER = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curuser: 0,
      contact: 0,
      contactid: 0,
      curframe: 0,
      curdisplay: 0,
      contact_ImgURL: "http://emilcarlsson.se/assets/harveyspecter.png",
      usr_ImgURL: "http://emilcarlsson.se/assets/mikeross.png",
      defaultMsg: defaultMsg,
      key_num: 1,
      users: [
        {name: 'Mike Ross',      messages: [{key: '0', msg: defaultMsg+'Mike Ross'}],      id:0,  imgURL: "http://emilcarlsson.se/assets/mikeross.png"},
        {name: 'Harvey Specter', messages: [{key: '0', msg: defaultMsg+'Harvey Specter'}],     id:1,  imgURL: "http://emilcarlsson.se/assets/harveyspecter.png"},
        {name: 'Louis Litt',     messages: [{key: '0', msg: defaultMsg+'Louis Litt'}], id:2,  imgURL: "http://emilcarlsson.se/assets/louislitt.png"},
        {name: 'Rachel Zane',    messages: [{key: '0', msg: defaultMsg+'Rachel Zane'}],    id:3,  imgURL: "http://emilcarlsson.se/assets/rachelzane.png"},
      ],
      messages: [],
      unread: [0, 0, 0, 0]
    }

    this.socket = socketIO('localhost:8080');
    
    const addHistory = data => {
      if (data.id === (this.state.curuser*TOTAL_USER + this.state.contact))
        this.setState({ messages: [...this.state.messages, data]});
      else if (Math.floor(data.id/TOTAL_USER) === this.state.curuser){
        let newUnread = this.state.unread;
        newUnread[(data.id-this.state.curuser*TOTAL_USER)]++;
        this.setState({ unread: newUnread });
      }
    };

    const checkAndRender = data => {
      if (data.id === (this.state.curuser*TOTAL_USER + this.state.contact ))
        this.setState({ messages: data.messages });
    }

    this.socket.on('RECEIVE_MESSAGE', function(message){
      addHistory(message);
      // console.log(message);
    });

    this.socket.on('THROW_MESSAGE', function(data){
      checkAndRender(data);
    })

  }
  setName = (id) => {
    this.setState({
      contact: id,
    })
    let newUnread = this.state.unread;
    newUnread[id] = 0;
    this.setState({ unread: newUnread });
    this.refresh(this.state.curuser, id);
  }

  setImgURL = (newURL) => {
    this.setState({
      contact_ImgURL: newURL
    })
  }
  // updateMsg = newMsg => {
  //   const { messages } = this.state;
  //   this.setState({
  //     key_num: this.state.key_num+1
  //   });
  //   messages.push({
  //     key: "id" + this.state.key_num,
  //     msg: newMsg
  //   })
  //   this.setState({ messages });
  // }
  chooseUser = userId => {
    if (userId === this.state.curuser)
      this.setState({ contact: 1 });
    else this.setState({ curuser: userId });
    this.setState({ curdisplay: 1});
    document.title = this.state.users[userId].name;
  }

  refresh = (user, chat) => {
    this.socket.emit('GET_MESSAGE', user*TOTAL_USER+chat);
  }

  addMessage = (e, message) => {
    console.log(message);
    e.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      storage: this.state.curuser*TOTAL_USER + this.state.contact, 
      message: message 
    });
  }

  render() {
    var displays = [];
    for(var i = 0; i < 2; i++){
      if(i === this.state.curdisplay) displays.push('show');
      else displays.push('hide');
    }
    return (
     <div>
      <div id="frame" className={displays[0]}>
        <Login
          users={this.state.users}
          chooseUser={this.chooseUser}
        />
      </div>

      <div id="frame" className={displays[1]}>
        <SidePane        
          setName={this.setName}
          setImgURL={this.setImgURL}
          usr_ImgURL={this.state.usr_ImgURL}
          users={this.state.users}
          curuser={this.state.curuser}
          contact={this.state.contact}
          unread={this.state.unread}
        />
        <Content
          className={displays[1]}
          curuser={this.state.curuser}
          users={this.state.users}
          contact={this.state.contact}
          imgURL={this.state.contact_ImgURL}
          updateMsg={this.updateMsg}
          getInput={this.addMessage}
          messages={this.state.messages}          
        />
      </div>
     </div>
    );
  }
}

export default App;
 
