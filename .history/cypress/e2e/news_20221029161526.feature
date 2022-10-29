Feature: User comments in News

    @regression
    Scenario: Visiting comments in news as a logged in user
        Given I signIn via UI
        When I visit News
        And I open the first commentable news
        Then I can see input field for commenting

    @regression
    Scenario: Visiting comments in news as NOT logged in user
        Given I visit News
        When I open the first commentable news
        Then I can see signIn prompt
    
    @regression
    Scenario: Visiting comments in news as NOT logged in user
        Given I visit News
        When I open the first commentable news
        And I click like in first comment
        Then I can see signIn prompt

    @manual
    Scenario: Redirect to the article after sign within article
        Given I visit News
        When I open the first commentable news
        And I sign in via UI
        Then I can see input field for commenting

    @manual
    Scenario: Scroll down to comments iFrame when clicking the comment icon within article
        Given I visit News
        When I open the first commentable news
        And I click the comment icon
        Then I can see input field for commenting
    
    @