import { newSpecPage } from '@stencil/core/testing';
import { KekaCheckbox } from '../keka-checkbox';

describe('keka-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaCheckbox],
      html: `<keka-checkbox></keka-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-checkbox>
    `);
  });
});
