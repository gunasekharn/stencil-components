import { Component, Prop,Host,Element, h } from '@stencil/core';

@Component({
  tag: 'keka-tooltip',
  styleUrl: 'keka-tooltip.css',
  shadow: true,
})
export class KekaTooltip {
  @Prop() text: string ="";
  @Prop() position: "top"|"right"|"bottom"|"left" = 'top';
  @Prop() arrow: boolean = true;
  @Prop() theme: string = 'dark';
  @Prop() left: number = 0;
  
  @Element() hostElement: HTMLElement;

  componentWillLoad() {
    if (this.theme === 'light') {
      this.hostElement.style.setProperty('--background-color', '#fff');
      this.hostElement.style.setProperty('--text-color', '#000');
    }
    this.hostElement.style.setProperty('--left', `${this.left-2}%`);
  }
  
  componentDidLoad() {
    const tooltipElement = this.hostElement.shadowRoot.querySelector('.tooltip');
    if (tooltipElement) {
      tooltipElement.innerHTML = this.text;
    } else {
      console.warn("Tooltip element not found in the light DOM.");
    }
  }
  




  render() {
    return (
      <Host>
        <div class="tooltip-container" >
          <div class="tooltip-trigger">
            <slot></slot>
          </div>
          <div class={`tooltip ${this.position} ${this.theme === 'light' ? 'shadow' : ''}  ${this.arrow ? '' : 'no-arrow'}`}></div>
        </div>
      </Host>
    );
  }
}
