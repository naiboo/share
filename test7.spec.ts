import { test, expect } from '@playwright/test';
import { Counter, Gauge } from 'playwright-prometheus-remote-write-reporter';

const URLvar='https://playwright.dev/';

const gotoCounter = new Counter({
    name: 'url',
  }, 0)
  
test.beforeEach(async ({ page }) => {
    await page.goto(URLvar);
    test.setTimeout(10000);
    gotoCounter.labels({
      url: URLvar
    }).inc() 
});


test.describe('Test 7', () => {
test('Test 7', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(10000); // hard wait for 5000ms
  });
});


test.afterEach(() => {
  gotoCounter.collect() // send to prometheus
  gotoCounter.reset() // reset counter after each test
})