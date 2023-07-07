import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-tab-bar',
  styleUrl: 'keka-tab-bar.css',
  shadow: true,
})
export class KekaTabBar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
