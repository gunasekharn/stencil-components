import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
 
  check=()=> {
    console.log("check");
  }
  change=()=> {
    console.log("change");
  }
  focus=()=> {
    console.log("focus");
  }
  blur=()=> {
    console.log("blur");
  }

  render() {
    return(
    <div class="container">
      <keka-checkbox onClick={this.check} onChange={this.change} onFocus={this.focus} mainText='label'  onBlur={this.blur} ></keka-checkbox>
      <keka-checkbox disabled checked mainText='label' subText='subtext'></keka-checkbox>
      <keka-checkbox indeterminate state='indeterminate'></keka-checkbox>
    </div>
    )
  }
}
