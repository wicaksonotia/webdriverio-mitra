Feature: 04. Confirm Order (Selesai)

  Scenario Outline: As a user, I can update status order
    Given I am on the Lihat Pesanan page
    When I select Kode Pesanan from <namaToko>
    Then system should be leading to Detail Pemesanan page

    Given I am on the Detail Pemesanan page
    When I change status order
    Then system should be able to update status order

    Examples:
      | namaToko        |
      | TOKO WIRATANI |