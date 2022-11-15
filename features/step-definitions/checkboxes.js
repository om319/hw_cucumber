const { When, Then } = require('@wdio/cucumber-framework');
const cbArray = browser.$('#checkboxes').$$('[type="checkbox"]');

When("I ckick on checkbox number {word}", async (checkboxNumber) => {
    await cbArray[checkboxNumber - 1].click();

})

Then("Checkbox number {word} becomes checked {word}", async (checkboxNumber, isChecked) => {
    cbArray[checkboxNumber - 1].isChecked === isChecked;
});	