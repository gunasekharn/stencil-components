import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'keka-global-header',
  styleUrl: 'keka-global-header.css',
  shadow: true,
})
export class KekaGlobalHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
