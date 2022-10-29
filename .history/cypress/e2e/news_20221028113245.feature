Feature: Ability to comment articles
Scenario: Visiting news as a logged in user
    Given I signIn via UI
    When I visit News
    And I open the first commentable news
    Then I can see input field for commenting

Scenario: Visiting news as NOT logged in user
    Given I visit News
    When I open the first commentable news
    Then I can see signIn prompt

