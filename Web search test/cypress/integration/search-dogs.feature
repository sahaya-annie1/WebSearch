Feature: Google Search for Dogs

    To perform a single Google test to search for Dogs

    Scenario:Simple Google Test

        Given I navigate to Google
        When I search for dogs
        Then I expect to see results for dogs