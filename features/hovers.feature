@wip
Feature: The Internet Guinea Pig Website

    Scenario Outline: I can hover elements

      Given I am on the "hovers" page
      When I hover element number <elNumber>
      Then I can see description of the element number <elNumber> with username <username>
          
      Examples:
        | elNumber | username |
        | 1        | user1    |
        | 2        | user2    |
        | 3        | user3    |