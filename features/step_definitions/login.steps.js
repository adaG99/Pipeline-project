const { Given, When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

let response;
let credentials;

Given('the user provides valid credentials', function () {
  credentials = {
    username: 'user',
    password: 'pass'
  };
});

Given('the user provides invalid credentials', function () {
  credentials = {
    username: 'user',
    password: 'wrongpassword'
  };
});

When('the user attempts to log in', async function () {
  response = await request(app)
    .post('/login')
    .send(credentials);
});

Then('the user receives a valid token', function () {
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.body.token, 'xyz');
});

Then('the user receives an unauthorized error', function () {
  assert.strictEqual(response.status, 401);
  assert.strictEqual(response.body.error, 'Unauthorized');
});
