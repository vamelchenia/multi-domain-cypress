Feature: Cross-origin test

  Scenario: As a user, I can use different origins in one test
    When I change the origin of my test configuration
    And I visit Base url