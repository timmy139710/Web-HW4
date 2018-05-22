import React, { Component } from 'react'

class Contact extends Component {

  constructor(props){
      super(props);
      this.state = {
        name:this.props.user,
        class:"contact",
        toggled: 0
      }
    }
    setToggled = e => {
      this.setState( {toggled: this.state.toggled === 1? 0 : 1}, () => {
        var toggled = this.state.toggled;
        var name = this.props.user;
        if(toggled === 1) {
          this.setState({
            class:"contact",
          });
        }
        else {
          this.setState({
            class:"contact active",
          });
        }
        this.props.parentCallback(this.props.contact);
        this.props.setURL(this.props.url);
      });
    console.log(this.state)
    }      
  setclass() {
    if(this.props.contact === this.props.curcontact)
        return "contact active";
    else 
        return "contact";
  }
  render() {
    return(
    <li class={this.setclass()} onClick={this.setToggled}>
      <span>
      <div class="wrap">
          <span class="contact-status online"></span>
          <img src={this.props.url} alt="" />
          <div class="meta">
              <p class="name">{this.props.user}<span class="unread">{this.props.unread}</span></p>
              <p class="preview">{this.props.users[this.props.contact].messages[0].msg}</p>
          </div>
      </div>
      </span>
    </li>    
    )
  }
}


export default Contact
