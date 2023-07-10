import { newE2EPage } from '@stencil/core/testing';

describe('keka-tab-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-tab-item></keka-tab-item>');

    const element = await page.find('keka-tab-item');
    expect(element).toHaveClass('hydrated');
  });
});
