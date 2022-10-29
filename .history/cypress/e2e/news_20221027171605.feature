Feature: Feature name
Scenario: Visiting news as a logged in user
    Given I signIn via UI
    When I visit News
    Then I open the first commentable news
    And I can see input field for commenting

Scenario: Visiting news as NOT logged in user
    Given I visit News
    Then I open the first commentable news
    And I can see signIn prompt

