import { test } from '@playwright/test';
import { useRouteVariants } from '../mocks/mockServerClient';

test('render the page correctly', async ({page}) => {
  await useRouteVariants([
    'get-posts:success',
  ])
  await page.goto('/');

  // await expect(
  //   page.getByText(
  //     'Welcome to your dashboard',
  //   ),
  // ).toBeVisible()
})
