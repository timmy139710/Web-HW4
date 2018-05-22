import React, {Component} from 'react'

class TextInput extends Component{
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          placeholder:"Write your message...",
          empty: true
        };    
    }
    
    handleChange(event) {
      this.setState({
        value: event.target.value,
        empty: event.target.value === ''
      });
    }
    
    handleSubmit(event) {
      event.preventDefault();
      if(this.state.value === ''){
        
        alert('No Empty message!');
      }
      else {        
        this.props.getInput(event, this.state.value);
        this.setState({value: ''});
      }
    }

  render() {
    return(
      <div class="message-input">
        <div class="wrap">
        <form onSubmit={(e) => this.handleSubmit(e)} >
        <input ref="InputItem" type="text" placeholder={this.state.placeholder}
        value={this.state.value} onChange={(e) => this.handleChange(e)}/>
        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
        <button class="submit" ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
        </div>
      </div>
    );
  }
}

export default TextInput; 
