import { Component, Host, h, Prop, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'keka-toggle',
  styleUrl: 'keka-toggle.css',
  shadow: true,
})
export class KekaToggle {
  @Prop() text: string = '';
  @Prop() disabled: boolean = false;
  @Prop() label: string = '';
  @Prop() bordered: boolean = false;
  @Prop() size: string = 'regular';
  @Prop() isActive: boolean = false;

  @Element() el: HTMLElement;

  @Event() toggleInput: EventEmitter<boolean>;

  checkboxElement: HTMLInputElement;
  outerContainer: HTMLElement;
  componentWillLoad(){
    this.setToggleSize();
  }
  componentDidLoad() {
    this.checkboxElement = this.el.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;
    this.outerContainer = this.el.shadowRoot.querySelector('.label');
    // this.setToggleSize();
    if (this.isActive) {
      this.checkboxElement.checked = true;
    }
  }

  setToggleSize(){
    let toggleSize = this.size === 'regular' ? '16px':'20px';
    this.el.style.setProperty('--toggle-size',toggleSize);
    this.el.style.setProperty('--title-font-size', `${this.size === 'regular'? '12px': '14px'}`)
    this.el.style.setProperty('--label-font-size', `${this.size === 'regular'? '10px': '12px'}`)
    this.el.style.setProperty('--title-line-height', `${this.size === 'regular'? '18px': '20px'}`)
    this.el.style.setProperty('--label-line-height', `${this.size === 'regular'? '16px': '18px'}`)


  }
  render() {
    return (
      <Host class={'d-flex'}>
        <div>
          <keka-test-tooltip text="this is a toggle" theme="dark" position="bottom">
            <label class={`toggle ${this.size === 'regular' ? 'regular' : 'large'} ${this.bordered ? 'border' : ''}`}>
              <input type="checkbox" disabled={this.disabled} onClick={() => this.toggleInput.emit(this.checkboxElement.checked)} />
              <span class="toggle-slider"></span>
            </label>
          </keka-test-tooltip>
        </div>
        <div class={`content`}>
          <div class="text-content">{this.text}</div>
          <div class="label-content">{this.label}</div>
        </div>
      </Host>
    );
  }
}
