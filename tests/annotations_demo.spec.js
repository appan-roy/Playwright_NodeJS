import { test, expect } from '@playwright/test';

// will skip the test
test.skip('skip this test', async({ page }) => {
    // This test will be skipped
});

// will mark test as failure, will show error if the test does not fail
test('not yet ready', async({ page }) => {
    test.fail();
});

// test will be aborted
test.fixme('test to be fixed', async({ page }) => {
});

// marks the test as slow and triples the test timeout
test('slow test', async({ page }) => {
    test.slow();
});

// run specific tests
test.only('focus this test', async({ page }) => {
    // Run only focused tests in the entire project
});
