import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-dropdown-item',
  styleUrl: 'keka-dropdown-item.css',
  shadow: true,
})
export class KekaDropdownItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
