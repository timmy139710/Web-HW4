import React, {Component} from 'react'

class TextInput extends Component{
    constructor(props) {
      super(props);
      this.state = {value: ''};
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
      this.props.updateMsg(this.state.value);  
      this.setState({value: ' '});
    //   alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
            
  render() {
    return(
      <div class="message-input">
        <div class="wrap">
        <form onSubmit={this.handleSubmit}>
        <input ref="InputItem" type="text" placeholder="Write your message..." 
        value={this.state.value} onChange={this.handleChange} />
        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
        <button class="submit" ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
        </div>
      </div>
    );
  }
}


export default TextInput; 
