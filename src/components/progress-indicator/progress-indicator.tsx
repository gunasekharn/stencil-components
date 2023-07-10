import { Component, Prop, h } from '@stencil/core';
import { ProfessionalAvatar } from '../professional-avatar/professional-avatar';

@Component({
  tag: 'progress-indicator',
  styleUrl: 'progress-indicator.scss',
  shadow: true,
})
export class ProgressIndicator {

  @Prop() fill:number=0;
  @Prop() showLabel:boolean;
  @Prop() tooltip:boolean;

  
  componentWillRender(){
    // if(this.fill)
    // console.log("fill  :" , this.fill, this," label : ")
  }

  render() {
    return (
      <div class={"avatar-container"}>
        {!this.tooltip ? 
        (
          <div class={"m-1"}>
            <div class={"d-flex"}>
              <div class={"rounded-edge"}>  
                <div 
                  class={`w-${this.fill} progress-bar`}
                  aria-label="progress indicator">
                </div>
              </div>
              <div class={this.showLabel? "": "display-none"}>{this.fill}%</div>
            </div>
          </div>
        )
        :
        (
          <div class={"m-1"}>
            <div class={"d-flex"}>
              <keka-tooltip text={this.fill+"%"} position="top" theme='light' left={this.fill} >
                <div class={"rounded-edge"}>  
                    <div 
                      class={`w-${this.fill} progress-bar`}
                      aria-label="progress indicator">
                    </div>
                </div>
              </keka-tooltip>
              <div class={this.showLabel? "": "display-none"}>{this.fill}%</div>
            </div>
          </div>
        )
        }
      </div>
    );
  }

}



