import React, { Component } from 'react';
import Profile from './profile.js';
// import Contact1 from './contact1.js';
import Contact from './contact2.js';
// import Contact3 from './contact3.js';
// import Contact4 from './contact.js';

class SidePane extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       contactname: 'Harvey Specter',
//       url:"http://emilcarlsson.se/assets/harveyspecter.png"
//     }
//   }
  render() {
    let users = [];
    for (let i = 0; i < this.props.users.length; ++i) {
      if (i === this.props.curuser) continue;
    //   if (this.state.unread[i] !== 0)
    //     users.push( <div className="relative">
    //                   <div 
    //                     className={'avatar ' + this.props.users[i].name} 
    //                     onClick={()=>this.changeCurChat(this.props.users[i].id)}
    //                   /> 
    //                   <div className="unread">
    //                     <h6> {this.state.unread[i]} </h6>
    //                   </div>
    //                 </div>);
    //   else         
      users.push( 
        <Contact
            parentCallback={this.props.setName}
            setURL={this.props.setImgURL}
            contact={i}
            users={this.props.users}
            curcontact={this.props.contact}
            user={this.props.users[i].name}
            url={this.props.users[i].imgURL}
        />
        );
    } 
    return (
    <div id="sidepanel">
        <Profile
           usr_ImgURL={this.props.usr_ImgURL}
           curuser={this.props.curuser}
           users={this.props.users}
        />
		<div id="contacts">
			<ul>
                {users}
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







                /* <Contact
                    parentCallback={this.props.setName}
                    setURL={this.props.setImgURL}
                    contactname={this.props.contact}
                    contact={1}
                    user={'Louis Litt'}
                    url={"http://emilcarlsson.se/assets/louislitt.png"}
                />
                <Contact
                    parentCallback={this.props.setName}
                    setURL={this.props.setImgURL}
                    contactname={this.props.contact}
                    contact={2}
                    user={'Harvey Specter'}
                    url={"http://emilcarlsson.se/assets/harveyspecter.png"}
                />
                <Contact
                    parentCallback={this.props.setName}
                    setURL={this.props.setImgURL}
                    contactname={this.props.contact}
                    contact={3}
                    user={'Rachel Zane'}
                    url={"http://emilcarlsson.se/assets/rachelzane.png"}
                /> */
				/* <li class="contact active">
					<div class="wrap">
						<span class="contact-status busy"></span>
						<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
						<div class="meta">
							<p class="name">Harvey Specter</p>
							<p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
						</div>
					</div>
				</li> */
