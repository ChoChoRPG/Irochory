const dataString = `
定食, ていしょく, Set menu, z, 3
日替わり, ひがわり, Menu spesial harian, z, 3
大盛り, おおもり, Porsi besar, z, 3
おかわり自由, おかわりじゆう, Isi ulang gratis, z, 3
平日, へいじつ, Hari kerja, z, 3
～のみ, ～のみ, Hanya ～, z, 3
ホット, ホット, Panas, z, 3
アイス, アイス, Dingin (es), z, 3
焼き魚, やきざかな, Ikan bakar, z, 3
ハンバーグ, ハンバーグ, Bistik hamburger, z, 3
カレーライス, カレーライス, Nasi kari, z, 3
かつ丼, かつどん, Katsudon, z, 3
親子丼, おやこどん, Oyakodon, z, 3
つく, つく, Disajikan dengan, z, 3
だめ（な）, だめ（な）, Tidak bisa / Tidak boleh, z, 3
材料, ざいりょう, Bahan, z, 3
豚肉, ぶたにく, Daging babi, z, 3
牛肉, ぎゅうにく, Daging sapi, z, 3
カニ, カニ, Kepiting, z, 3
ナッツ, ナッツ, Kacang-kacangan, z, 3
わさび, わさび, Wasabi, z, 3
ねぎ, ねぎ, Daun bawang, z, 3
みりん, みりん, Mirin, z, 3
宗教, しゅうきょう, Agama, z, 3
～上, ～じょう, Dari segi ～, z, 3
理由, りゆう, Alasan, z, 3
アレルギー, アレルギー, Alergi, z, 3
自転車, じてんしゃ, Sepeda, z, 3
来る, くる, Datang, z, 3
ベジタリアン, ベジタリアン, Vegetarian, z, 3
豆腐, とうふ, Tahu, z, 3
注文する, ちゅうもんする, Memesan, z, 3
飲める, のめる, Bisa minum, z, 3
メニュー, メニュー, Menu, z, 3
食べられる, たべられる, Bisa makan, z, 3
ほかの, ほかの, Lainnya, z, 3
～抜き, ～ぬき, Tanpa ～, z, 3
そっか, そっか, Oh begitu., z, 3
かしこまりました, かしこまりました, Baik, saya mengerti., z, 3
カウンター, カウンター, Meja konter, z, 3
座敷, ざしき, Ruang tatami, z, 3
テーブル, テーブル, Meja, z, 3
会計, かいけい, Pembayaran, z, 3
レジ, レジ, Kasir, z, 3
禁煙, きんえん, Dilarang merokok, z, 3
～名, ～めい, ～ orang, z, 3
当店, とうてん, Restoran kami, z, 3
全面, ぜんめん, Seluruhnya, z, 3
決まる, きまる, Memutuskan, z, 3
おすすめ, おすすめ, Rekomendasi, z, 3
人気がある, にんきがある, Populer, z, 3
フライ, フライ, Gorengan (ala Jepang), z, 3
ミックスフライ, ミックスフライ, Gorengan campur, z, 3
量, りょう, Jumlah / Porsi, z, 3
普通, ふつう, Biasa, z, 3
先に, さきに, Duluan, z, 3
別々, べつべつ, Terpisah, z, 3
クーポン, クーポン, Kupon, z, 3
次回, じかい, Lain kali, z, 3
それにします, それにします, Saya pilih itu., z, 3
お会計、お願いします, おかいけい、おねがいします, Minta bon-nya., z, 3
別々でお願いします, べつべつでおねがいします, Tolong (bayar) pisah., z, 3
お客様, おきゃくさま, Pelanggan, z, 3
何名様, なんめいさま, Berapa orang, z, 3
～名様, ～めいさま, ～ orang, z, 3
ご注文, ごちゅうもん, Pesanan, z, 3
いかが, いかが, Bagaimana, z, 3
ごいっしょ, ごいっしょ, Bersama, z, 3
よろしいですか？, よろしいですか？, Apakah sudah benar?, z, 3
～がございます, ～がございます, Kami ada ～., z, 3
お決まりですか？, おきまりですか？, Sudah memutuskan?, z, 3
いかがですか？, いかがですか？, Bagaimana? / Mau?, z, 3
どうなさいますか？, どうなさいますか？, Mau bagaimana?, z, 3
以上でよろしいですか？, いじょうでよろしいですか？, Apakah sudah semua?, z, 3
お使いください, おつかいください, Silakan gunakan., z, 3
少なめ, すくなめ, Lebih sedikit, z, 3
食後に, しょくごに, Setelah makan, z, 3
日にち, ひにち, Tanggal, z, 3
まちがい, まちがい, Kesalahan, z, 3
失礼しました, しつれいしました, Mohon maaf., z, 3
お電話, おでんわ, Telepon, z, 3
ご予約, ごよやく, Reservasi, z, 3
お時間, おじかん, Waktu, z, 3
お電話番号, おでんわばんごう, Nomor telepon, z, 3
～様, ～さま, Sdr/i ～, z, 3
おまちがいないでしょうか？, おまちがいないでしょうか？, Apakah sudah benar?, z, 3
半額, はんがく, Setengah harga, z, 3
有効期限, ゆうこうきげん, Tanggal kedaluwarsa, z, 3
ドリンクバー, ドリンクバー, Bar minuman (prasmanan), z, 3
おこさま, おこさま, Anak-anak, z, 3
ご注文時, ごちゅうもんじ, Saat memesan, z, 3
本券, ほんけん, Kupon ini, z, 3
使用, しよう, Penggunaan, z, 3
時間帯, じかんたい, Jam (periode waktu), z, 3
ご提示ください, ごていじください, Silakan tunjukkan ～., z, 3
ご利用できません, ごりようできません, Anda tidak dapat menggunakan ～., z, 3
ご飲食代, ごいんしょくだい, Biaya makan/minum, z, 3
会計時, かいけいじ, Saat membayar, z, 3
利用可能（な）, りようかのう（な）, Dapat digunakan, z, 3
～限り, ～かぎり, Hanya ～, z, 3
有効（な）, ゆうこう（な）, Berlaku, z, 3
他, た, Lainnya, z, 3
併用, へいよう, Penggunaan bersamaan, z, 3
お見せください, おみせください, Silakan perlihatkan ～., z, 3
`;