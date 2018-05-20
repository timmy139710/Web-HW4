import React, { Component } from 'react'

class Contact2 extends Component {

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
        var name = this.state.name;
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
        this.props.parentCallback(name);
      });
    console.log(this.state)
    }      
  setclass() {
    if(this.state.name === this.props.contactname)
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
              <p class="name">{this.state.name}</p>
              <p class="preview">You just got LITT up, Mike.</p>
          </div>
      </div>
      </span>
    </li>    
    )
  }
}


export default Contact2
