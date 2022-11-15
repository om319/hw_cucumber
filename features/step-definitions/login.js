const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
})

Then("I should see alert with {word} caption", async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});	