Feature: User Form Submission

  Scenario: Submitting the form with all required fields filled in
    Given the user is on the retirement calculator page
    When the user enters the following information:
      | Current Age                             | 40      |
      | Retirement Age                          | 68      |
      | Current annual income                   | $100000 |
      | Current retirement savings              | $500000 |
      | Current retirement contribution         | 10%     |
      | Annual retirement contribution increase | .25%    |
    And the user submits the form with button having attribute "onclick" with value "calculateResults();"
    Then the form should be successfully submitted

  Scenario Outline: Verify additional Social Security fields based on Social Security Income selection
    Given the user is on the retirement calculator page
    When the user selects '<SocialSecurityIncome>' for Social Security Income
    Then the '<MaritalStatusField>' and '<SocialSecurityOverrideField>' fields should be '<Visibility>'

    Examples:
      | SocialSecurityIncome | MaritalStatusField | SocialSecurityOverrideField | Visibility |
      | Yes                  | Marital Status     | Social Security Override    | displayed  |
      | No                   | Marital Status     | Social Security Override    | hidden     |

  Scenario: User should be able to see update default calculator model window
    Given the user is on the default calculator model window
    When the user enters the following information:
      | Additional Income        | 10 |
      | Retirement Duration      | 12 |
      | Retirement Annual Income | 20 |
      | Pre Retirement Roi       | 10 |
      | Post Retirement Roi      | 5  |
    And the user submits the form with button having attribute "onclick" with value "savePersonalizedValues();"

  Scenario: Submitting the form with all fields filled in
    Given the user is on the retirement calculator page
    When the user enters the following information:
      | Current Age                             | 40      |
      | Retirement Age                          | 68      |
      | Current annual income                   | $100000 |
      | Spouse annual income                    | $75000  |
      | Current retirement savings              | $500000 |
      | Current retirement contribution         | 10%     |
      | Annual retirement contribution increase | .25%    |
      | Social Security Income                  | Yes     |
      | Relationship status                     | Married |
      | Social Security Override                | $4000   |
    And the user submits the form with button having attribute "onclick" with value "calculateResults();"
    Then the form should be successfully submitted
