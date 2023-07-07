import { newE2EPage } from '@stencil/core/testing';

describe('keka-button-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<keka-button-component></keka-button-component>');

    const element = await page.find('keka-button-component');
    expect(element).toHaveClass('hydrated');
  });
});
