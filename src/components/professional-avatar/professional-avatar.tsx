import { Component, Prop, h } from '@stencil/core';
import { Users } from '../../model';

@Component({
  tag: 'professional-avatar',
  styleUrl: 'professional-avatar.css',
  shadow: true,
})
export class ProfessionalAvatar {
  @Prop() size:string;
  @Prop() data:Users;

  render() {
    return (
      <div class={"d-flex"}>

        <div>
          <keka-avatar 
            size={this.size} 
            user={this.data}
            class={`rounded`}
            >
          </keka-avatar>
        </div>
        <div>
          <p class={`px-1 capitalize font-size-${this.size.slice(-3,)}`}>{this.data.name}</p>
          <p class={ this.size.slice(-3,).trim()=="xs" || this.size.slice(-3,).trim()=="sm" || this.size.slice(-3,).trim()=="md" ? "display-none": ` px-1 capitalize font-size-${this.size.slice(-3,)} `}>{this.data.designation}</p>
        </div>
        
      </div>
    );
  }
}
