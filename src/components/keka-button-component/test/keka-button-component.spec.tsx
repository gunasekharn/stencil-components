import { newSpecPage } from '@stencil/core/testing';
import { KekaButtonComponent } from '../keka-button-component';

describe('keka-button-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KekaButtonComponent],
      html: `<keka-button-component></keka-button-component>`,
    });
    expect(page.root).toEqualHtml(`
      <keka-button-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </keka-button-component>
    `);
  });
});
