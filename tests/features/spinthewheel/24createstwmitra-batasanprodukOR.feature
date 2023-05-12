Feature: 24. Create STW Mitra (Batasan Produk OR)

Scenario Outline: As a user, I can create SWT mitra Batasan Produk OR
    Given I am on the Spin the Wheel page
    When I click button Buat Program Baru
    Then system should be leading to mitra super puter buat page

    Given I am on the mitra super puter buat page
    When I input Nama Program <nama_program>
    Then System should be able to input Nama Program

    When I input Total Budget <total_budget>
    Then System should be able to input Total Budget

    When I select date in Tanggal Mulai
    Then System should be able to select Tanggal Mulai

    When I select time in Jam Mulai
    Then System should be able to select Jam Mulai

    When I select date in Tanggal Berakhir
    Then System should be able to select Tanggal Berakhir

    When I input Minimum Nilai Transaksi <minimum_nilai_transaksi>
    Then System should be able to input Minimum Nilai Transaksi 

    When I select time in Jam Berakhir
    Then System should be able to select Jam Berakhir

    When I input Limit Spin Keseluruhan <limit_spin_keseluruhan>
    Then System should be able to input Limit Spin Keseluruhan

    When I input Minimum Frekuensi Belanja B2B Mingguan <minimum_frekuensi_belanja>
    Then System should be able to input Minimum Frekuensi Belanja B2B Mingguan

    When I input Maksimal Frekuensi Reward Per Minggu <maksimal_frekuensi_reward>
    Then System should be able to input Maksimal Frekuensi Reward Per Minggu

    When I input cari produk disini in Pembatasan Produk1
    Then system should show listbox1

    When I select Test Poduct in listbox Pembatasan Produk
    Then system should be able to select Test Poduct

    When I input min Value Test Product <min_value>
    Then system should be able to input min Value Test Product

    When I input cari produk disini in Pembatasan Produk2
    Then system should be able to input show listbox2

    When I select Wafer Duta Milk Cocopandan in listbox
    Then system should be able to select Wafer Duta Milk Cocopandan

    When I input min Value Wafer Duta Milk Cocopandan <min_value2>
    Then system should be able to input min Value Wafer Duta Milk Cocopandan

    When I click radio button OR in Pembatasan Produk
    Then system should be able to click radio button OR

    When I click button Simpan in Detail Program 
    Then System should be able to submit data in Detail Program 

    When I click tab Audience
    Then system should be leading to Audience

    When I select radio button berdasarkan tier
    Then System show dropdown pilih tier

    When I click pilih tier
    Then System show checkbox tier
    
    When I click pilih tier basic
    Then System should be able to click tier basic

    When I click button Update Audience
    Then system should be able to update data in target audience

    When I click button Simpan in Audience
    Then System should be able to Submit data in Audience

    When I click tab Pengaturan Mekanisme
    Then system should be leading to Pengaturan Mekanisme

    When I input poin1 in pengaturan Mekanisme <poin1>
    Then system should be able to input poin1

    When I input kesempatan1 <kesempatan1>
    Then system should be able to input kesempatan1

    When I input poin2 in pengaturan Mekanisme <poin2>
    Then system should be able to input poin2

    When I input kesempatan2 <kesempatan2>
    Then system should be able to input kesempatan2

    When I input poin3 in pengaturan Mekanisme <poin3>
    Then system should be able to input poin3

    When I input kesempatan3 <kesempatan3>
    Then system should be able to input kesempatan3

    When I input poin4 in pengaturan Mekanisme <poin4>
    Then system should be able to input poin4

    When I input kesempatan4 <kesempatan4>
    Then system should be able to input kesempatan4

    When I input poin5 in pengaturan Mekanisme <poin5>
    Then system should be able to input poin5

    When I input kesempatan5 <kesempatan5>
    Then system should be able to input kesempatan5

    When I click button perbarui contoh
    Then system should be able to update poin and kesempatan

    When I click button publish ke aplikasi
    Then system should be able to publish program spin the wheel

    When I click tab program berjalan
    Then system should be leading to program berjalan

Examples:
    | nama_program       | total_budget | minimum_nilai_transaksi | limit_spin_keseluruhan | min_value | min_value2 | minimum_frekuensi_belanja | maksimal_frekuensi_reward | poin1 | poin2 | poin3 | poin4 | poin5 | kesempatan1 | kesempatan2 | kesempatan3 | kesempatan4 | kesempatan5 |
    | STW BATASAN OR     | 9550000      |  1000                   | 100                    | 13000     | 4000       | 1                         | 2                         | 5     | 4     | 3     | 2     | 1     | 30          | 25          | 20          | 15          | 10          |