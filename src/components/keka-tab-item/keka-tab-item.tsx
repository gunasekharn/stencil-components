import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-tab-item',
  styleUrl: 'keka-tab-item.css',
  shadow: true,
})
export class KekaTabItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
