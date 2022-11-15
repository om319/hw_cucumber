@wip
Feature: The Internet Guinea Pig Website

    Scenario Outline: I can change checkboxes states

      Given I am on the "checkboxes" page
      When I ckick on checkbox number <checkboxNumber>
      Then Checkbox number <checkboxNumber> becomes checked <isChecked>
      
      Examples:
        | checkboxNumber | isChecked |
        | 1              | true      |
        | 2              | false     |
        | 1              | false     |
        | 2              | true      |