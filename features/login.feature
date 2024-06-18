Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user provides valid credentials
    When the user attempts to log in
    Then the user receives a valid token

  Scenario: Failed login with invalid credentials
    Given the user provides invalid credentials
    When the user attempts to log in
    Then the user receives an unauthorized error
