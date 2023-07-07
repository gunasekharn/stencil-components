import { Component, Event, h, Prop, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'keka-checkbox',
  styleUrl: 'keka-checkbox.css',
  shadow: true,
})
export class KekaCheckbox {
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Prop({ mutable: true, reflect: true }) disabled = false;
  @Prop() indeterminate: boolean = false;
  @Prop() required: boolean = false;

  @Prop() mainText: string;
  @Prop() subText: string;
  @Prop() id: string;

  @Prop() name: string = '';
  @Prop() value: string = '';

  @Event() change: EventEmitter<boolean>;
  @Event() click: EventEmitter<void>;
  @Event() focus: EventEmitter<void>;
  @Event() blur: EventEmitter<void>;

  private checkbox!: HTMLInputElement;

  @Listen('keydown')
  handleKeydown(ev: KeyboardEvent) {
    if (ev.code === 'Space') {
      ev.preventDefault();
    }
  }

  handleClick = () => {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.click.emit();
    }
  };

  handelChange = () => {
    this.change.emit(this.checked);
  };

  handelFocus = () => {
    this.focus.emit();
  };

  handelBlur = () => {
    this.blur.emit();
  };

  render() {
    const checkboxId = `checkbox-${this.id}`;
    return (
      <div
        class={{
          container: true,
          checked: this.checked,
          disabled: this.disabled,
        }}
        role="checkbox"
        aria-checked={this.checked ? true : false}
        aria-disabled={this.disabled ? 'true' : 'false'}
        tabindex="0"
        onClick={this.handleClick}
        onFocus={this.handelFocus}
        onBlur={this.handelBlur}
        aria-labelledby={`${checkboxId}-main-text ${checkboxId}-sub-text`}
      >
      <input
        type="checkbox"
        class="checkbox"
        ref={el => (this.checkbox = el)}
        onChange={this.handelChange}
        disabled={this.disabled}
        checked={this.checked}
        indeterminate={this.indeterminate}
        required={this.required}
        name={this.name}
        value={this.value}
        id={checkboxId}
        tabindex="-1"
      />
      <div class="content">
        <h4 class="main-text" id={`${checkboxId}-main-text`}>
          {this.mainText}
        </h4>
        <p class="sub-text" id={`${checkboxId}-sub-text`}>
          {this.subText}
        </p>
      </div>
      </div>
    );
  }
}
