@wip
Feature: The Internet Guinea Pig Website

    Scenario Outline: As a user, I can log into the secure area

      Given I am on the "login" page
      When I login with <username> and <password>
      Then I should see alert with <message> caption
      
      Examples:
        | username | password            | message  |
        | tomsmith | SuperSecretPassword!| logged   |
        | foobar   | barfoo              | invalid  |