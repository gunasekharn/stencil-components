import { Component, h, Prop, Element, Event, EventEmitter, Method, State, Listen } from '@stencil/core';

@Component({
  tag: 'keka-dropdown-item',
  styleUrl: 'keka-dropdown-item.css',
  shadow: true,
})
export class KekaDropdownItem {
  @Element() hostElement: HTMLElement;

  @Prop() type: 'select' | 'input' | 'list' = 'select';

  @Prop() label: string = 'Item';

  @Prop() avatar: string;

  @Prop() showAvatar: boolean = false;

  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  @Prop() multiple: boolean = false;

  @Prop() parentRef: string = 'Label';

  @State() checkboxEl: HTMLInputElement;

  @Event({ eventName: 'itemClick' }) onItemClick: EventEmitter<{ label: string; avatar: string; checked: boolean; parentRef: string }>;

  @Listen('checkboxAction', { target: 'document' })
  handleCheckboxAction(event: CustomEvent) {
    if (this.label === event.detail.label && this.checkboxEl) this.checkboxEl.checked = this.checked = event.detail.checked;
  }

  @Method()
  async itemClicked() {
    this.checked = !this.checked;
    if (this.multiple) this.checkboxEl.checked = this.checked;
    this.onItemClick.emit({ label: this.label, avatar: this.avatar, checked: this.checked, parentRef: this.parentRef });
  }

  componentWillLoad() {
    // console.log('host el: ', this.hostElement);
  }

  componentDidLoad() {
    if (this.multiple) {
      this.checkboxEl = this.hostElement.shadowRoot.querySelector('input');
      this.checkboxEl.checked = this.checked;
    }
  }

  render() {
    return (
      <li role="option" class={`dropdown-item ${this.checked ? 'selected' : ''}`} onClick={() => this.itemClicked()}>
        {this.multiple && (
          <div>
            <input type="checkbox" checked={this.checked} />
          </div>
        )}

        {this.avatar != '' && this.showAvatar && (
          <div>
            <img class={`avatar`} width={`16`} src={this.avatar} alt="A" />
          </div>
        )}
        <div class={`dropdown-item-label`}> {this.label} </div>
        {!this.multiple && this.checked && this.type !== 'list' && (
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-check" viewBox="0 0 16 16">
              <path d="M13.873 4.054a.425.425 0 0 1 0 .606l-7.285 7.285a.425.425 0 0 1-.605 0L2.126 8.088a.428.428 0 1 1 .605-.605l3.554 3.554 6.983-6.983a.427.427 0 0 1 .605 0Z" />
            </svg>
          </div>
        )}
      </li>
    );
  }
}
