const { test, expect } = require('@playwright/test');

test.describe('API - User Management', () => {

  test('Create a new user using a fresh API context', async ({ playwright }) => {

    const apiContext = await playwright.request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });

    const response = await apiContext.post('/posts', {
      data: {
        title: 'Nikhil',
        body: 'QA Analyst',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.title).toBe('Nikhil');
    expect(responseBody.body).toBe('QA Analyst');
    expect(responseBody.id).toBeTruthy();
  });

});
