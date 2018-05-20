import React, { Component } from 'react';
import Profile from './profile.js';
// import Contact1 from './contact1.js';
import Contact2 from './contact2.js';
// import Contact3 from './contact3.js';
// import Contact4 from './contact.js';

class SidePane extends Component {
  constructor(props){
    super(props);
    this.state={
      contactname: 'Harvey Specter'
    }
  }
  setName = (name) =>{
    console.log(name)
    this.setState({
      contactname: name
    });
    this.props.parentCallback(name);
  }
  render() {
    return (
    <div id="sidepanel">
        <Profile />
		<div id="contacts">
			<ul>
                <Contact2
                    parentCallback={this.setName}
                    contactname={this.state.contactname}
                    user={'Louis Litt'}
                    url={"http://emilcarlsson.se/assets/louislitt.png"}
                />
                <Contact2
                    parentCallback={this.setName}
                    contactname={this.state.contactname}
                    user={'Harvey Specter'}
                    url={"http://emilcarlsson.se/assets/harveyspecter.png"}
                />
                <Contact2
                    parentCallback={this.setName}
                    contactname={this.state.contactname}
                    user={'Rachel Zane'}
                    url={"http://emilcarlsson.se/assets/rachelzane.png"}
                />
				{/* <li class="contact active">
					<div class="wrap">
						<span class="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<div class="meta">
							<p class="name">Harvey Specter</p>
							<p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
						</div>
					</div>
				</li> */}
			</ul>
		</div>
		{/* <div id="bottom-bar">
			<button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
			<button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
		</div> */}
	</div>
    );
  }
}
export default SidePane;
