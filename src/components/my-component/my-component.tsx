import { Component, Prop, h} from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  submit() {
    console.log("HI");
  }

  render() {
    return <div class="d-flex">
        <div>
          <keka-button-component type="submit" variant='btn-violet-primary' onButtonClicked={() => this.submit()}>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-primary' size="btn-small" onButtonClicked={() => this.submit()}>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary' size="btn-small">Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary' size="btn-small">Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-link'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-primary' disabled onButtonClicked={() => this.submit()}>Jahnavi</keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-danger-primary'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-primary' size="btn-small">Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary' size="btn-small">Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary' size="btn-small">Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-link-danger'>Jahnavi</keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-violet-primary' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-primary' size='btn-small' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary' size='btn-small' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary' size='btn-small' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-link' iconPlacement='left'>Jahnavi</keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-danger-primary' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-primary' size='btn-small' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary' iconPlacement='left'> Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary' size='btn-small' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary' size='btn-small' iconPlacement='left'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-link-danger' iconPlacement='left'>Jahnavi</keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-violet-primary' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-primary' size='btn-small' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary' size='btn-small' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary' size='btn-small' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-link' iconPlacement='right'>Jahnavi</keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-danger-primary' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-primary' size='btn-small' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary' size='btn-small' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary' size='btn-small' iconPlacement='right'>Jahnavi</keka-button-component>
          <keka-button-component type="submit" variant='btn-link-danger' iconPlacement='right'>Jahnavi</keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-violet-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-primary' size='btn-small'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-secondary' size='btn-small'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-violet-tertiary' size='btn-small'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-link'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
        </div>

        <div>
          <keka-button-component type="submit" variant='btn-danger-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-primary' size='btn-small'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-secondary' size='btn-small'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-danger-tertiary' size='btn-small'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
          <keka-button-component type="submit" variant='btn-link-danger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ki ki-add" viewBox="0 0 16 16">
              <path d="M13.667 8c0 .225-.196.41-.436.41H8.436v4.513c0 .226-.195.41-.436.41-.24 0-.436-.185-.436-.41V8.41H2.77c-.24 0-.436-.183-.436-.41 0-.226.195-.41.436-.41h4.795V3.076c0-.227.195-.41.436-.41s.436.183.436.41v4.512h4.795c.24 0 .436.185.436.41Z" />
            </svg>
          </keka-button-component>
        </div>
      </div>
  }
}
