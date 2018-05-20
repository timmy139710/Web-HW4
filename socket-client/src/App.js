import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import SidePane from './sidepane.js';
import Login from './login.js';
import Content from './content.js';
const defaultMsg = "This is a long long long long long long long long long long long long long long long long long long default message to "

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
        {name: 'Harvey Specter', messages: [{key: '0', msg: defaultMsg+'Louis Litt'}],     id:1,  imgURL: "http://emilcarlsson.se/assets/harveyspecter.png"},
        {name: 'Louis Litt',     messages: [{key: '0', msg: defaultMsg+'Harvey Specter'}], id:2,  imgURL: "http://emilcarlsson.se/assets/louislitt.png"},
        {name: 'Rachel Zane',    messages: [{key: '0', msg: defaultMsg+'Rachel Zane'}],    id:3,  imgURL: "http://emilcarlsson.se/assets/rachelzane.png"},
      ],
      messages: [{key: '0', msg: defaultMsg}]
    }
  }
  setName = (id) => {
    this.setState({
      contact: id,
    })
  }
  setImgURL = (newURL) => {
    this.setState({
      contact_ImgURL: newURL
    })
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
  chooseUser = userId => {
    if (userId === this.state.curuser)
      this.setState({ contact: 1 });
    else this.setState({ curuser: userId });
    this.setState({ curdisplay: 1});
    document.title = this.state.users[userId].name;
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
        />
        <Content
          className={displays[1]}
          curuser={this.state.curuser}
          users={this.state.users}
          contact={this.state.contact}
          imgURL={this.state.contact_ImgURL}
          updateMsg={this.updateMsg}
          messages={this.state.messages}
        />
      </div>
     </div>
    );
  }
}

export default App;
 
