@wip
Feature: The Internet Guinea Pig Website

    Scenario Outline: I can remove and delete elements

      Given I am on the "add_remove_elements/" page
      When I ckick ADD ELEMENT button <clicks> times
      Then I can see <buttonsCount> added buttons
      Then I click on every of <buttonsCount> added button and it dessapears
      
      Examples:
        | clicks | buttonsCount |
        | 1      | 1            |
        | 2      | 2            |
        | 3      | 3            |
        | 4      | 4            |
        | 5      | 5            |