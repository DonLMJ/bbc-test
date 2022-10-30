@manual
Feature: User comments in News
    Scenario: Logged in user replies should be able to comment
        Given I visit a commentable news
        When I click reply in first comment
        Then I can see input field for commenting

    Scenario: Logged in user should be able to reply to a comment
        Given I visit a commentable news
        When I click reply in first comment
        Then I can see input field for commenting
    
    Scenario: NOT logged should be prompt to sign when liking a comment
        Given I visit a commentable news
        And I click like in first comment
        Then I can see signIn prompt

    Scenario: NOT logged should be prompt to sign when replying to a comment
        Given I visit News
        When I open the first commentable news
        And I click reply in first comment
        Then I can see signIn prompt

    Scenario: User should get redirect to the article after sign within article
        Given I visit News
        When I open the first commentable news
        And I sign in via UI
        Then I can see input field for commenting

    Scenario: Scroll down to iFrame of comments when clicking the comment icon within article
        Given I visit News
        When I open the first commentable news
        And I click the comment icon
        Then I can see input field for commenting
    
    