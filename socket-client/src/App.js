import React, { Component } from 'react';
import socketIO from 'socket.io-client';
import './App.css';
import './index.css';
import SidePanel from './sidepane.js';
import Login from './login.js';
import Content from './content.js';
import sedrasmith_img from './sedrasmith.png'
import nnrao_img from './nnrao.png'
import yoda_img from './yoda.jpg'
import benson_img from './benson.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curuser: 0,
      contact: 0,
      contactid: 0,
      curframe: 0,
      curdisplay: 0,
      contact_ImgURL: "",
      usr_ImgURL: "",
      key_num: 1,
      users: [
        {name: 'Sedra Smith',      messages: [{key: '0', msg: 'MOS有GDS, BJT有CBE, 電子學有三學期 ! '}],                       id:0,  imgURL: sedrasmith_img},
        {name: 'Rao Nannapaneni',  messages: [{key: '0', msg: 'Can you spell my name correctly ?'}],                         id:1,  imgURL: nnrao_img},
        {name: 'Master Yoda 03',   messages: [{key: '0', msg: 'You have to not only see the tree but also see the forest.'}], id:2,  imgURL: yoda_img},
        {name: 'Benson Yeh',       messages: [{key: '0', msg: '只有放下臺大，才能真正超越臺大 !'}],                               id:3,  imgURL: benson_img},
      ],
      previews: ['MOS有GDS, BJT有CBE, 電子學有三學期 ! ', 'Can you spell my name correctly ?','You have to not only see the tree but also see the forest.','只有放下臺大，才能真正超越臺大 !' ],
      mymessages: [],
      myunread: [0, 0, 0, 0],
    }

    this.socket = socketIO('localhost:8000');
    

    this.socket.on('MY_RECEIVE_MESSAGE', function(message){
      myaddHistory(message);
    });
    
    const myaddHistory = data => {
      if (data.user === (this.state.curuser) && data.contact === (this.state.contact) ){
        let newPreviews = this.state.previews;
        newPreviews[data.contact] = data.message;
        this.setState({ 
          mymessages: [...this.state.mymessages, data],
          previews: newPreviews
        });
      }
      else if (data.user === (this.state.curuser) ) {
        let newUnread = this.state.myunread;
        let newPreviews = this.state.previews;
        newUnread[data.contact]++;
        newPreviews[data.contact] = data.message;
        this.setState({ 
          myunread: newUnread,
          previews: newPreviews
        });
      }
    }

    this.socket.on('MY_RENDER_MESSAGE', function(message){
      myreRender(message);
    });

    const myreRender = data => {
      if(data.user === this.state.curuser && data.contact === this.state.contact)
        this.setState({ mymessages: data.messages});
    }

  }
  setName = (id) => {
    this.setState({
      contact: id,

    })
    let newUnread = this.state.myunread;
    newUnread[id] = 0;
    this.setState({ myunread: newUnread });
    this.myrefresh(this.state.curuser, id);
  }

  setImgURL = (newURL) => {
    this.setState({
      contact_ImgURL: newURL
    })
  }

  chooseUser = userId => {
    if (userId === this.state.curuser)
      this.setState({ contact: 1 });
    else this.setState({ curuser: userId });
    this.setState({ curdisplay: 1});
    document.title = this.state.users[userId].name;
  }

  myrefresh = (user, contact) => {
    this.socket.emit('MY_GET_MESSAGE', { 
      user: user, 
      contact: contact
    });
  }

  addMessage = (e, message) => {
    console.log(message);
    e.preventDefault();

    this.socket.emit('MY_SEND_MESSAGE', {
      user: this.state.curuser,
      contact: this.state.contact,
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
        <SidePanel  
          setName={this.setName}
          setImgURL={this.setImgURL}
          usr_ImgURL={this.state.usr_ImgURL}
          users={this.state.users}
          curuser={this.state.curuser}
          contact={this.state.contact}
          unread={this.state.myunread}
          messages={this.state.mymessages}
          previews={this.state.previews}
        />
        <Content
          className={displays[1]}
          curuser={this.state.curuser}
          users={this.state.users}
          contact={this.state.contact}
          imgURL={this.state.contact_ImgURL}
          updateMsg={this.updateMsg}
          getInput={this.addMessage}
          messages={this.state.mymessages}
          chooseUser={this.chooseUser}          
        />
      </div>
     </div>
    );
  }
}

export default App;
 
