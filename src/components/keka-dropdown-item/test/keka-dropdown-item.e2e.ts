import { newE2EPage } from '@stencil/core/testing';

describe('keka-dropdown-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-dropdown-item></keka-dropdown-item>');

    const element = await page.find('keka-dropdown-item');
    expect(element).toHaveClass('hydrated');
  });
});
