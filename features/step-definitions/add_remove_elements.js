const { When, Then } = require('@wdio/cucumber-framework');
const deleteBtn = '[onclick="deleteElement()"]'
const addBtn = '[onclick="addElement()"]';

When("I ckick ADD ELEMENT button {int} times", async (clicks) => {
    const btnAdd = await browser.$(addBtn);
    for (let i = 0; i < clicks; i++) {
        await btnAdd.click();
    }
})

Then("I can see {int} added buttons", async (buttonsCount) => {
    const btnDeleteArray = await browser.$$(deleteBtn);
    await expect(btnDeleteArray).toHaveLength(buttonsCount);
});	

Then("I click on every of {int} added button and it dessapears", async (buttons) => {
    const btnDeleteArray = await browser.$$(deleteBtn);
      for (let i = 0; i < btnDeleteArray.length; i++) {
        await btnDeleteArray[i].click();
      }
      await expect(browser.$$(deleteBtn)).toBeUndefined   
});	