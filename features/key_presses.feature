@wip
Feature: The Internet Guinea Pig Website

    Scenario Outline: I can type and see button description

      Given I am on the "key_presses" page
      When I type <buttonName> in the text box
      Then I can see the label with <labelText>
      
      Examples:
        | buttonName | labelText |
        | A          | A         |
        | B          | B         |
        | C          | C         |