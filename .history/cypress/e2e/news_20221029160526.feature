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

    @manual
    Scenario: accessing comments after sign in within article
        Given I visit News
        When I open the first commentable news
        And I sign in via UI
        Then I can see input field for commenting