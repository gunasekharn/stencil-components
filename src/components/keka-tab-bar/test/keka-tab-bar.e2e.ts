import { newE2EPage } from '@stencil/core/testing';

describe('keka-tab-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-tab-bar></keka-tab-bar>');

    const element = await page.find('keka-tab-bar');
    expect(element).toHaveClass('hydrated');
  });
});
