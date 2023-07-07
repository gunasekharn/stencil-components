import { newSpecPage } from '@stencil/core/testing';
import { KekaDropdownItem } from '../keka-dropdown-item';

describe('keka-dropdown-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaDropdownItem],
      html: `<keka-dropdown-item></keka-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-dropdown-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-dropdown-item>
    `);
  });
});
