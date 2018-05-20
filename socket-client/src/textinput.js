import React, {Component} from 'react'

class TextInput extends Component{
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          placeholder:"Write your message..."
        };
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
      if(this.state.value === '') {
        alert('No Empty Message')
      }
      else {
        this.props.updateMsg(this.state.value);  
        this.setState({value: ''});
    //   alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    }
            
  render() {
    return(
      <div class="message-input">
        <div class="wrap">
        <form onSubmit={this.handleSubmit}>
        <input ref="InputItem" type="text" placeholder={this.state.placeholder}
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
