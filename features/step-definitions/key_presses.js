const { When, Then } = require('@wdio/cucumber-framework');
const input = browser.$('#target');

When("I type {word} in the text box", async (buttonName) => {
    await input.clearValue();
    await input.setValue(buttonName);
})

Then("I can see the label with {word}", async (labelText) => {
    await expect($('#result')).toHaveTextContaining(labelText);
});	