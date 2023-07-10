import { newSpecPage } from '@stencil/core/testing';
import { KekaGlobalHeader } from '../keka-global-header';

describe('keka-global-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaGlobalHeader],
      html: `<keka-global-header></keka-global-header>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-global-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-global-header>
    `);
  });
});
