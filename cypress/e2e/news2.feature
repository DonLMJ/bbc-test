@manual
Feature: User comments in News
    Scenario: Logged in user replies to a comment
        Given I visit a commentable news
        When I click reply in first comment
        Then I can see input field for commenting

    Scenario: Logged in user likes a comment
        Given I visit a commentable news
        When I click reply in first comment
        Then I can see input field for commenting
    
    Scenario: Prompt to sign in when a NOT logged in user likes a comment
        Given I visit a commentable news
        And I click like in first comment
        Then I can see signIn prompt

    Scenario: Prompt to sign in when a NOT logged in user replies to a comment
        Given I visit News
        When I open the first commentable news
        And I click reply in first comment
        Then I can see signIn prompt

    Scenario: Redirect to the article after sign within article
        Given I visit News
        When I open the first commentable news
        And I sign in via UI
        Then I can see input field for commenting

    Scenario: Scroll down to comments iFrame when clicking the comment icon within article
        Given I visit News
        When I open the first commentable news
        And I click the comment icon
        Then I can see input field for commenting
    
    