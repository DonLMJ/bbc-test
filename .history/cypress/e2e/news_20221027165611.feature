Feature: Feature name
Scenario: Visiting news as a logged in user
Given I signIn via UI
When I visit News
Then I see commentable news

