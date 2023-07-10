import { Component,Prop,State, h ,Event,EventEmitter,Listen} from '@stencil/core';
import { Users } from '../../model';

@Component({
  tag: 'keka-input',
  styleUrl: 'keka-input.css',
  shadow: true,
})
export class KekaInput {

  @Prop() size:string;
  @Prop() variant:"primary" | "secondary"= "primary";
  @Prop() disable:boolean=false;
  @Prop() data:Users[];
  @Prop() name:string;
  @Prop() id:string;
  @Prop({ mutable: true,reflect:true }) value: string | null = '';

  @State() inputData: Users[] = [];

  @Event() input: EventEmitter;
  @Event() click: EventEmitter<void>;
  @Event() focus: EventEmitter<void>;
  @Event() blur: EventEmitter<void>;
  @Event() enter: EventEmitter;

  componentWillLoad(){1
    if (this.data && this.data.length > 0) {
      this.inputData = this.data.slice(0, 1);
      console.log("asdfasdf", this.inputData.length);
    }

  }

  handelInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    this.value = input.value || '';
    console.log("input inside : ", this.value)
    this.input.emit(ev);
  };
  handelClick = () => {
    this.click.emit();
  };
  handelFocus = () => {
    this.focus.emit();
  };
  handelBlur = () => {
    
    this.blur.emit();
  };
  
  @Listen('keydown')
  handleSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch()
    }
  }

  onSearch=()=>{
    this.enter.emit({ value: this.value });
    // console.log('Search triggered');
  }

  render() {
    return (
      <div>
            <label class="input-label">label</label>
              <div class={ this.size && this.disable ?
                 ` input-container-${this.size} input-container-${this.variant} d-flex input-disable-${this.variant}` 
                 : this.size && !this.disable? 
                 ` input-container-${this.size} input-container-${this.variant} d-flex ` 
                  : this.disable && !this.size?
                  ` input-container input-container-${this.variant} d-flex input-disable-${this.variant}` 
                  :
                  ` input-container input-container-${this.variant} d-flex` }>
                  <div class={`selected-employees`}>
                    {this.data && this.inputData.map((item )=>{
                      return(
                      <div class={"center"}>
                        <img class={this.size ? ` tagged-profile-${this.size} ` : ` tagged-profile `} src={item.profile} alt="profile picture" aria-label="user profile picture" />
                        <p class={"tagged-profile-name"} >{item.name}</p>
                      </div>
                      );
                    })}
                    
                  </div>
                <input  
                  placeholder={this.data ? '' : 'Input Text'}
                  aria-expanded="false"
                  aria-autocomplete="list" 
                  aria-label="input field"
                  disabled={this.disable ? true : false} 
                  class={this.size ? ` form-control-${this.size} form-control-${this.variant}` : ` form-control form-control-${this.variant}` } 
                  type="text"
                  value={this.value}
                  id={this.id}
                  name={this.name}
                  onInput={this.handelInput}
                  onClick={this.handelClick}
                  onFocus={this.handelFocus}
                  onBlur={this.handelBlur}
                  
                />
              </div>
        </div> 
    );
  }

}
 