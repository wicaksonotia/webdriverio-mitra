Feature: 26. Edit Program STW Mitra

Scenario Outline: As a user, I can Edit Program STW Mitra
    Given I am on the Spin the Wheel page
    When I search program and click button edit Spin the Wheel <program>
    Then System should be find program and leading to mitra super puter buat page

    Given I am on the mitra super puter buat page
    When I input Nama Program <nama_program>
    Then System show Nama Program

    When I select date in Tanggal Berakhir
    Then System show Tanggal Berakhir

    When I input Minimum Frekuensi Belanja B2B Mingguan <minimum_frekuensi_belanja>
    Then System show Minimum Frekuensi Belanja B2B Mingguan

    When I input Maksimal Frekuensi Reward Per Minggu <maksimal_frekuensi_reward>
    Then System show Maksimal Frekuensi Reward Per Minggu

    When I input cari produk disini in Pembatasan Produk
    Then system should show listbox

    When I select Test Poduct in listbox
    Then system show Test Poduct

    When I input min Value <min_value>
    Then system show min Value

    When I click button Simpan in Detail Program Page
    Then System save data in Detail Program Page

    When I click tab Audience
    Then system should be leading to Audience page

    When I select radio button berdasarkan tier
    Then System show dropdown pilih tier

    When I click pilih tier
    Then System show checkbox tier
    
    When I click pilih tier gold
    Then System show tier gold

    When I click button Update Audience
    Then system show update data in target audience

Examples:
    |program                 | nama_program       | minimum_nilai_transaksi | min_value | min_value2 | minimum_frekuensi_belanja | maksimal_frekuensi_reward | 
    |STW AUDIENCE PILIH SEMUA| Spin-The-Wheel-26  |  1000                   | 13000     | 6000       | 2                         | 3                         | 