import { Component ,Prop,State, h } from '@stencil/core';
import { Users  } from '../../model';

@Component({
  tag: 'keka-avatar',
  styleUrl: 'keka-avatar.css',
  shadow: true,
})
export class KekaAvatar {

  @Prop() size: string;
  @Prop() shape: string;
  @Prop() user: Users;
  @Prop() class: string;
  @Prop() allUsers: Users[]=[];

  iconClass: string = "user-icon";
  letterAvatarClass: string = "letter-avatar";
  allAvatars: string = "allAvatars"
  name: string[] = [];
  initials: string = "";

  @State() showOtherProfiles:boolean= false;
  
  callfun(){
    this.showOtherProfiles=!this.showOtherProfiles;
  }
  render() {

    this.name= this.user.name.split(" "); 
    this.name.forEach(word=>{
      this.initials += word.charAt(0);
    })

    return (
      <div class="ml-md">
        { 
        this.allUsers.length>0  ?
         <div class={`display-inline`} >
          <keka-dropdown type="list" alignment="start" label={"+" + this.allUsers.length} 
          class={` uppercase ${this.letterAvatarClass}  ${this.size} ${this.shape} ${this.class}`} avatars>
            {this.allUsers.length>0 && this.allUsers.map((item)=>{
                return (
                  <keka-dropdown-item type='list' show-avatar label={(item.name as string)} avatar={item.profile }></keka-dropdown-item>
                );
              })
            }
          </keka-dropdown>
        </div>
        :
        this.user.profile ?
          <img 
              src={this.user.profile} 
              class={` display-inline ${this.size} ${this.shape} ${this.class}  `}
              title={this.user.name}  
              alt="Default Profile" 
              aria-label={this.user.name + " profile picutre"}
              /> 
          :
          
          this.user.name ?
          <div class={`display-inline`}>
            <p class={` uppercase ${this.letterAvatarClass}  ${this.size} ${this.shape} ${this.class}`}
               title={this.user.name}
               aria-label={this.user.name + " profile"}
               > {this.initials.charAt(0)+this.initials.charAt(this.initials.length-1)}</p>
          </div>
          :
          
          <div class={`display-inline`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            
            width={this.size.trim()=="avatar-xxxl"? 50 :this.size.trim()=="avatar-xxl"? 40 :this.size.trim()=="avatar-xl"? 30 : this.size.trim()=="avatar-lg"? 24:this.size.trim()=="avatar-md"? 18:this.size.trim()=="avatar-sm"? 14: 8} 
            height={this.size.trim()=="avatar-xxxl"? 50 :this.size.trim()=="avatar-xxl"? 40 :this.size.trim()=="avatar-xl"? 30 : this.size.trim()=="avatar-lg"? 24:this.size.trim()=="avatar-md"? 18:this.size.trim()=="avatar-sm"? 14: 8} 
            class={`ki ki-user avatar ${this.iconClass} ${this.shape} ${this.class} ${this.size}` } 
            aria-label={"unknown user profile"}
            fill="currentColor" 
            viewBox="0 0 16 16">
              <title>{"Default icon"}</title>
              <path d="M8 8c1.894 0 3.429-1.492 3.429-3.333 0-1.841-1.535-3.334-3.429-3.334S4.571 2.826 4.571 4.667C4.571 6.507 6.106 8 8 8Zm0-5.833c1.418 0 2.571 1.121 2.571 2.5 0 1.378-1.153 2.5-2.571 2.5-1.418 0-2.571-1.122-2.571-2.5 0-1.379 1.154-2.5 2.571-2.5ZM9.358 9.25H6.642C4.079 9.25 2 11.27 2 13.764c0 .498.416.903.928.903h10.144a.914.914 0 0 0 .928-.903c0-2.492-2.079-4.513-4.642-4.513Zm3.712 4.583H2.928a.07.07 0 0 1-.07-.07c0-2.029 1.697-3.68 3.784-3.68h2.713c2.09 0 3.788 1.651 3.788 3.68a.07.07 0 0 1-.073.07Z"/>
            </svg>
          </div>

          }
      </div>
    );
  }

}


// <keka-dropdown type="list" alignment="end" label="+3" avatars>
// <keka-dropdown-item label="Item 1" />
// <keka-dropdown-item label="Item 2" />
// <keka-dropdown-item label="Item 3" />
// </keka-dropdown>