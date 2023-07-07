import { Component, h, Element, Event, EventEmitter, Listen, State, Prop } from '@stencil/core';

@Component({
  tag: 'keka-dropdown',
  styleUrl: 'keka-dropdown.css',
  shadow: true,
})
export class KekaDropdown {
  dropdownInputContainer: HTMLElement;

  @Element() hostElement: HTMLElement;

  @Prop() type: 'select' | 'input' | 'list' = 'select';

  @Prop() position: 'left' | 'top' | 'right' | 'bottom' = 'bottom';

  @Prop() alignment: 'start' | 'end' = 'start';

  @Prop() label: string = 'Label';

  @Prop() multiple: boolean = false;

  @Prop() avatars: boolean = false;

  @State() items: any[];

  @State() filteredItems: any[] = [];

  @State() searchItem: string = '';

  @State() selectedItems: { label: string; avatar: string; checked: boolean }[] = [];

  @State() singleSelectedItem: { label: string; avatar: string; checked: boolean };

  @State() isFilled: boolean = false;

  @State() isOpen: boolean = false;

  @Event({ eventName: 'checkboxAction' }) onCheckboxAction: EventEmitter<{ label: string; avatar: string; checked: boolean }>;

  @Listen('click', { target: 'document' })
  handleClickOutside(event: Event) {
    if (!event.composedPath().includes(this.hostElement)) {
      this.closeDropdown();
    }
  }

  @Listen('itemClick', { target: 'document' })
  handleitemClick(event: CustomEvent) {
    if (event.detail.parentRef !== this.label) return;

    this.updateItems(event.detail);
    if (this.multiple) {
      if (event.detail.checked) {
        this.addItem(event.detail);
      } else {
        this.removeItem(event.detail);
      }
    } else {
      if (event.detail.checked) {
        this.addItem(event.detail);
      } else {
        this.removeItem(event.detail);
      }
    }
  }

  addItem(item: { label: string; avatar: string; checked: boolean }) {
    if (this.multiple) {
      this.selectedItems = [...this.selectedItems, item];
    } else {
      this.singleSelectedItem = item;
      this.updateSingleSelectedItem(item.label);
    }
  }

  removeItem(item: { label: string; avatar: string; checked: boolean }) {
    if (this.multiple) {
      this.selectedItems = this.selectedItems.filter(el => el.label !== item.label);
      this.updateItems({ label: item.label, avatar: item.avatar, checked: false });
      this.onCheckboxAction.emit({ label: item.label, avatar: item.avatar, checked: false });
    } else {
      this.singleSelectedItem = null;
      this.updateItems({ label: item.label, avatar: item.avatar, checked: false });
    }

    this.isFilled = this.selectedItems.length || this.singleSelectedItem || this.isOpen ? true : false;
  }

  updateSingleSelectedItem(label: string) {
    this.items.forEach(item => {
      if (item.label !== label) {
        item.checked = false;
      }
    });
  }

  updateItems(item: { label: string; avatar: string; checked: boolean }) {
    const index = this.items.findIndex(el => el.label === item.label);
    this.items[index] = item;
  }

  filterItems(event: Event) {
    this.searchItem = (event.target as HTMLInputElement).value;
    this.filteredItems = this.items.filter(item => (item.label as string).toLowerCase().includes(this.searchItem.toLowerCase()));
  }

  openDropdown() {
    this.isOpen = true;
    this.isFilled = true;
    this.dropdownInputContainer.setAttribute('aria-expanded', 'true');
  }

  closeDropdown() {
    this.isOpen = false;
    this.isFilled = this.selectedItems.length || this.singleSelectedItem ? true : false;
    this.dropdownInputContainer.setAttribute('aria-expanded', 'false');
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.dropdownInputContainer.setAttribute('aria-expanded', 'true') : this.dropdownInputContainer.setAttribute('aria-expanded', 'true');
  }

  componentWillLoad() {
    this.items = Array.from(this.hostElement.querySelectorAll('keka-dropdown-item'));
    this.items = this.items.map(item => {
      const newItem = {};
      ['label', 'avatar', 'checked'].forEach(field => {
        newItem[field] = item[field];
      });
      return newItem;
    });
    this.filteredItems = this.items;
  }

  componentDidLoad() {
    this.dropdownInputContainer = this.hostElement.shadowRoot.querySelector('#inputContainer');
  }

  render() {
    const listDropdownAlignment: string = this.type === 'list' ? `align-${this.position}-${this.alignment}` : '';

    return (
      <div class={this.type !== 'list' ? `dropdown-container` : 'dropdown-list-container'}>
        {this.type === 'list' && (
          <div id="inputContainer" aria-haspopup="true" aria-expanded="false" class={`dropdown-list`} onClick={() => this.toggleDropdown()}>
            {this.label}
          </div>
        )}
        {this.type !== 'list' && (
          <div class={`dropdown-field d-flex`}>
            <div class={`label-container`}>
              <label htmlFor="dropdownInput"> {this.label} </label>
            </div>
            <div
              id="inputContainer"
              aria-haspopup="true"
              aria-expanded="false"
              class={`d-flex justify-content-center align-items-center input-container${this.isFilled ? '-filled' : ''}`}
            >
              {this.multiple ? (
                this.selectedItems.length ? (
                  <div class={`chips-container d-flex justify-content-center align-items-center`}>
                    {this.selectedItems.length < 3 &&
                      this.selectedItems.map(item => {
                        return (
                          <div class={`chip-wrapper d-flex justify-content-center align-items-center`}>
                            {this.avatars && item.avatar && (
                              <span class={`d-flex align-items-center`}>
                                <img class={`avatar`} width={`12`} src={item.avatar} alt="avatar" />
                              </span>
                            )}
                            <span class={`font-smaller`}> {item.label} </span>
                            <span class={`remove-chip`} onClick={() => this.removeItem(item)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="ki ki-close" viewBox="0 0 16 16">
                                <path d="M13.823 13.823a.6.6 0 0 1-.849 0L8 8.848l-4.976 4.975a.6.6 0 1 1-.848-.848L7.1 8.001 2.177 3.025a.6.6 0 1 1 .848-.848L8 7.153l4.976-4.975a.6.6 0 1 1 .848.848L8.847 8.001l4.976 4.975a.595.595 0 0 1 0 .847Z" />
                              </svg>
                            </span>
                          </div>
                        );
                      })}
                    {this.selectedItems.length >= 3 && <div class={`selected-items`}> {this.selectedItems.length} selected </div>}
                  </div>
                ) : (
                  !this.isOpen && (
                    <div onClick={() => this.openDropdown()} class={`placeholder-message`}>
                      input text
                    </div>
                  )
                )
              ) : this.singleSelectedItem ? (
                <div class={`selected-item-wrapper d-flex justify-content-center align-items-center`}>
                  {this.avatars && this.singleSelectedItem.avatar && (
                    <span>
                      <img class={`avatar`} width={`16`} src={this.singleSelectedItem.avatar} alt="avatar" />
                    </span>
                  )}
                  <div>{this.singleSelectedItem.label}</div>
                </div>
              ) : (
                !this.isOpen && (
                  <div onClick={() => this.openDropdown()} class={`placeholder-message`}>
                    input text
                  </div>
                )
              )}
              <div class={`input-control  d-flex justify-content-center align-items-center`}>
                <input type="text" name="" id="dropdownInput" onFocus={() => this.openDropdown()} value={this.searchItem} onInput={this.filterItems.bind(this)} />
              </div>
              {this.type === 'select' && (
                <div class={`dropdown-icon d-flex justify-content-center align-items-center`} onClick={() => this.toggleDropdown()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="ki ki-arrow-dropdown" viewBox="0 0 16 16">
                    <path d="M11.88 6.634 8.262 9.907a.365.365 0 0 1-.487 0L4.12 6.634c-.149-.155-.16-.364-.027-.514a.365.365 0 0 1 .514-.027L8 9.148l3.393-3.055a.365.365 0 0 1 .514.027c.134.15.122.36-.028.514Z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        )}
        {this.isOpen && (
          <ul class={`dropdown-menu ${listDropdownAlignment} ${this.filteredItems.length > 7 ? 'scroll-y' : ''}`} aria-labelledby="inputContainer" role="listbox">
            {this.filteredItems.length ? (
              this.filteredItems.map(item => {
                return (
                  <keka-dropdown-item
                    label={item.label as string}
                    checked={item.checked as boolean}
                    multiple={this.multiple}
                    show-avatar={this.avatars}
                    parent-ref={this.label}
                    type={this.type}
                  ></keka-dropdown-item>
                );
              })
            ) : (
              <div class={`help-text`}> no items</div>
            )}
          </ul>
        )}
      </div>
    );
  }
}
