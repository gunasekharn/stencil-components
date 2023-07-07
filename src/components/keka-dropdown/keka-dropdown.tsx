import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-dropdown',
  styleUrl: 'keka-dropdown.css',
  shadow: true,
})
export class KekaDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
