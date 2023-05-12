Feature: 14. Submit Misi TBR (ke SC)

  Scenario Outline: As a user, I can submit tbr mission
    Given I am on the Loyalty & Reward page
    When I click button Isi Kuesioner
    Then system should be leading to Kuesioner page

    When I do and submit questionnaire form
    Then system should be able to submit data