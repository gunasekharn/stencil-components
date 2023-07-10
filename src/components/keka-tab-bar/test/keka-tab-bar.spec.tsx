import { newSpecPage } from '@stencil/core/testing';
import { KekaTabBar } from '../keka-tab-bar';

describe('keka-tab-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaTabBar],
      html: `<keka-tab-bar></keka-tab-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-tab-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-tab-bar>
    `);
  });
});
