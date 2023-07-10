import { newE2EPage } from '@stencil/core/testing';

describe('keka-global-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-global-header></keka-global-header>');

    const element = await page.find('keka-global-header');
    expect(element).toHaveClass('hydrated');
  });
});
