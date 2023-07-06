import { Component,Element ,Prop, h } from '@stencil/core';
import { Users } from '../../model';

@Component({
  tag: 'avatar-stack',
  styleUrl: 'avatar-stack.css',
  shadow: true,
})
export class AvatarStack {

  @Element() element: HTMLElement;

  componentDidLoad() {
    // Access the element and modify its properties or attach event listeners
    this.element.addEventListener('click', this.handleClick);
  }

  handleClick() {
    console.log('Element clicked!');
  }
  @Prop() value:Users[]=[];
  @Prop() size:"avatar-xs"|"avatar-sm"|"avatar-md"|"avatar-lg"|"avatar-xl"|"avatar-xxl"|"avatar-xxxl"= "avatar-lg";
  render() {
    return (
      <div class="ml-md d-flex">
      {this.value && this.value.map((item , index) => (
        //  <img 
        //     src={item.profile} 
        //     class={index===0 ?  this.size : index<4 ?`position-left-${index} ` +this.size : " hide "    }  
        //     title={item.name} 
        //     alt=""  />
        index<4? 
        <keka-avatar 
          
          size={this.size} 
          shape={"rounded"} 
          user={item}
          class={index==0?  " ":  ` avatar-stack-m-${index}` }
          >
        </keka-avatar>
        :
        index>=4 ? 
        <keka-avatar
          number={this.value.length-4}
          size={this.size} 
          shape={"rounded"} 
          user={item}
          class={index==4?  ` avatar-stack-m-${index}` : " display-none" }
        
        ></keka-avatar>
        :
        ""
        ))
      }
   </div>
    );
  }

}
