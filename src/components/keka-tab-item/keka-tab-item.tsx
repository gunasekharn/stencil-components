import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'keka-tab-item',
  styleUrl: 'keka-tab-item.css',
  shadow: true,
})
export class KekaTabItem {
  @Prop() header: string = 'Tab name';

  @Prop() navigate: string;

  @Prop() disabled: boolean = false;

  @Prop() open: boolean;

  @Prop() type: string = 'white';

  @Prop() prefixLabelIcon: string;

  @Prop() suffixLabelIcon: string;

  render() {
    return (
      <div role="tabpanel" hidden={!this.open} class={`d-flex justify-content-center align-items-center`}>
        <slot />
      </div>
    );
  }
}
