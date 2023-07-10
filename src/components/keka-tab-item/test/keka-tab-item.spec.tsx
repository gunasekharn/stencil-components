import { newSpecPage } from '@stencil/core/testing';
import { KekaTabItem } from '../keka-tab-item';

describe('keka-tab-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaTabItem],
      html: `<keka-tab-item></keka-tab-item>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-tab-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-tab-item>
    `);
  });
});
