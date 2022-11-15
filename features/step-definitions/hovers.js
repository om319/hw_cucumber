const { When, Then } = require('@wdio/cucumber-framework');

When("I hover element number {word}", async (elNumber) => {
    const figures = await browser.$$('[class="figure"]');
    await $(figures[elNumber - 1]).moveTo({ 30:30 })
})

Then("I can see description of the element number {word} with username {word}", async (elNumber, username) => {
    const figures = await browser.$$('[class="figure"]');
    await expect(figures[elNumber - 1].$('h5')).toHaveTextContaining(username);
});	