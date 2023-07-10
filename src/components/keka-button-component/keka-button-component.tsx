import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'keka-button-component',
  styleUrl: 'keka-button-component.css',
  shadow: true,
})
export class KekaButtonComponent {
  @Prop() variant: 'btn-violet-primary' | 'btn-violet-secondary' | 'btn-violet-tertiary' | 'btn-link' | 'btn-danger-primary' | 'btn-danger-secondary' | 'btn-danger-tertiary' | 'btn-link-danger' = 'btn-violet-primary';
  @Prop() size: 'btn-small' | '' = '';
  @Prop() disabled: boolean;
  @Prop() type: 'submit' | 'reset' = 'submit';
  @Prop() iconPlacement: 'left' | 'right' | '' = '';

  @Event() buttonClicked: EventEmitter<void>;

  onClicked() {
    this.buttonClicked.emit();
  }

  render() {
    return (
      <div>
        <button
          type={this.type} class={`btn ${this.variant} ${this.size} ${this.iconPlacement === 'right' ? 'reverse-flex' : ''}`}
          disabled={this.disabled}
          onClick={() => this.onClicked()} >
          {this.iconPlacement ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
            <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
          </svg> : ''}
          <slot></slot>
        </button>
      </div>
    );
  }
}