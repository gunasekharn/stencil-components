import { Component, h } from '@stencil/core';

@Component({
  tag: 'keka-global-header',
  styleUrl: 'keka-global-header.css',
  shadow: true,
})
export class KekaGlobalHeader {
  render() {
    return (
      <div class={`global-header-container d-flex align-items-center`}>
        <div class={`breadcrumb-wrapper`}>
          <slot name="breadcrumb" />
        </div>
        <div class={`global-actions-wrapper d-flex align-items-center`}>
          <div class={`search-wrapper d-flex justify-content-center align-items-center mr-10`}>
            <slot name="search" />
          </div>
          <div class={`add-circle-wrapper d-flex justify-content-center align-items-center mr-10`}>
            <slot name="add-circle" />
          </div>
          <div class={`edit-note-wrapper d-flex justify-content-center align-items-center mr-10`}>
            <slot name="edit-note" />
          </div>
          <div class={`notification-wrapper d-flex justify-content-center align-items-center mr-10`}>
            <slot name="notification" />
          </div>
          <div class={`avatar-wrapper d-flex justify-content-center align-items-center mr-10`}>
            <slot name="avatar" />
          </div>
        </div>
      </div>
    );
  }
}
