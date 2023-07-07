import { newE2EPage } from '@stencil/core/testing';

describe('keka-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-dropdown></keka-dropdown>');

    const element = await page.find('keka-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
