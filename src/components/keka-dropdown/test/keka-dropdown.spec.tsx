import { newSpecPage } from '@stencil/core/testing';
import { KekaDropdown } from '../keka-dropdown';

describe('keka-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaDropdown],
      html: `<keka-dropdown></keka-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-dropdown>
    `);
  });
});
