import { newE2EPage } from '@stencil/core/testing';

describe('keka-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-checkbox></keka-checkbox>');

    const element = await page.find('keka-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
