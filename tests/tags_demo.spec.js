import { test, expect } from '@playwright/test';

// tags - use the tag @smoke / @sanity / @regression within the test name
test('login test @smoke', async({ page }) => {
    test.slow();
});

test('login test @sanity', async({ page }) => {
    test.slow();
});

test('login test @regression', async({ page }) => {
    test.slow();
});