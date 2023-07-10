import { Component, h, State, Element, Event, EventEmitter, Method, Prop } from '@stencil/core';

@Component({
  tag: 'keka-tab-bar',
  styleUrl: 'keka-tab-bar.css',
  shadow: true,
})
export class KekaTabBar {
  @Element() hostElement: HTMLElement;

  @State() tabs: HTMLKekaTabItemElement[];

  @Prop() type: 'atom' | 'switch' = 'atom';

  @Event({ eventName: 'tab' }) onTab: EventEmitter<{ index: number }>;

  @Method()
  async currentTab() {
    return this.tabs.findIndex(tab => tab.open);
  }

  openTab(tabIndex: number) {
    console.log('tab index: ', tabIndex);
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map(tab => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;

      this.onTab.emit({ index: tabIndex });
    }
  }

  componentWillLoad() {
    this.tabs = Array.from(this.hostElement.querySelectorAll('keka-tab-item'));
  }

  componentDidLoad() {
    this.tabs.forEach((tab, i: number) => {
      tab.shadowRoot.querySelector('[role="tabpanel"]').setAttribute('id', `tabpanel-${i}`);
      tab.shadowRoot.querySelector('[role="tabpanel"]').setAttribute('aria-labelledby', `tab-${i}`);
    });
  }

  render() {
    const typeClasses: string = this.type === 'switch' ? '-switch' : '-atom';

    return (
      <nav class={``}>
        <ul role="tablist" class={`tabs-list${typeClasses}`}>
          {this.tabs.map((tab, i: number) => {
            const activeTabClass: string = tab.open ? '-active' : '';

            return (
              <li
                id={`tab-${i}`}
                role="tab"
                aria-selected={tab.open ? 'true' : 'false'}
                aria-controls={`tabpanel-${i}`}
                tabIndex={tab.open ? null : -1}
                class={`tab-item${typeClasses}${activeTabClass}`}
                onClick={() => this.openTab(i)}
              >
                <a href={tab.navigate ? tab.navigate : null} class={`tab-link${typeClasses}${activeTabClass}`}>
                  <div> {tab.header} </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div class={``}>
          <slot />
        </div>
      </nav>
    );
  }
}
