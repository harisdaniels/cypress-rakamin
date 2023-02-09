Feature: Checkout Course on Rakamin Academy
    
  Scenario: Authenticated user checkout program (user already logged in)
    Given user accesses login page
    When user fill login credential and submit
    And user navigates to the VIX detail page
    And user click Daftar Sekarang
    And user fill form application
    Then the system showing modal confirmation
    When user confirmed to continue
    Then the system redirect the user to checkout page
    And user choose  VIP Access
    # Then the system redirect to payment page

  Scenario: Unauthenticated user checkout program
    Given user navigates to the VIX detail page
    When user click Daftar Sekarang
    Then user redirected to login page
    When user fill login credential and submit
    When user click Daftar Sekarang
    And user fill form application
    Then the system showing modal confirmation
    When user confirmed to continue
    Then the system redirect the user to checkout page
    And user choose  VIP Access
    # Then the system redirect to payment page