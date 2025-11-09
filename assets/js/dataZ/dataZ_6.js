const dataString = `
～発, ～はつ, Berangkat jam ～, z, 6
～着, ～ちゃく, Tiba jam ～, z, 6
～号, ～ごう, (Kereta) Nomor ～, z, 6
～号車, ～ごうしゃ, Gerbong Nomor ～, z, 6
～席, ～せき, Kursi ～, z, 6
特急券, とっきゅうけん, Tiket limited express, z, 6
秋田, あきた, Akita, z, 6
こまち, こまち, Komachi, z, 6
通路側, つうろがわ, Kursi dekat lorong, z, 6
窓側, まどがわ, Kursi dekat jendela, z, 6
遅れ, おくれ, Keterlambatan, z, 6
約, やく, Sekitar, z, 6
～両編成, ～りょうへんせい, Rangkaian ～ gerbong, z, 6
運転見合わせ, うんてんみあわせ, (Layanan) Ditangguhkan, z, 6
お知らせ, おしらせ, Pengumuman, z, 6
台風～号, たいふう～ごう, Topan No. ～, z, 6
接近, せっきん, Mendekat, z, 6
～に伴い, ～にともない, Sehubungan dengan ～, z, 6
見合わせる, みあわせる, Menunda, z, 6
ゆば, ゆば, Kulit tahu, z, 6
外国, がいこく, Luar negeri, z, 6
～泊, ～はく, ～ malam (menginap), z, 6
名物, めいぶつ, Makanan khas, z, 6
東照宮, とうしょうぐう, Kuil Toshogu, z, 6
中禅寺湖, ちゅうぜんじこ, Danau Chuzenji, z, 6
指定席, していせき, Kursi reservasi, z, 6
自由席, じゆうせき, Kursi non-reservasi, z, 6
～番乗り場, ～ばんのりば, Peron nomor ～, z, 6
～番線, ～ばんせん, Jalur nomor ～, z, 6
～行, ～いき／ゆき, Tujuan ～, z, 6
～線, ～せん, Jalur ～, z, 6
～方面, ～ほうめん, Arah ～, z, 6
発車する, はっしゃする, Berangkat, z, 6
到着する, とうちゃくする, Tiba, z, 6
乗り換える, のりかえる, Transit / Ganti (kereta), z, 6
特急, とっきゅう, Limited express, z, 6
～両, ～りょう, ～ gerbong, z, 6
順, じゅん, Sesuai urutan, z, 6
グリーン車, グリーンしゃ, Gerbong Green (kelas 1), z, 6
金沢, かなざわ, Kanazawa, z, 6
列車, れっしゃ, Kereta api, z, 6
乗車, じょうしゃ, Naik kereta, z, 6
～ほど, ～ほど, Sekitar ～, z, 6
岡山, おかやま, Okayama, z, 6
お出口, おでぐち, Pintu keluar, z, 6
左側, ひだりがわ, Sisi kiri, z, 6
各駅, かくえき, Setiap stasiun, z, 6
向かい側, むかいがわ, Sisi seberang, z, 6
中ほど, なかほど, Bagian tengah, z, 6
ご案内をいたします, ごあんないをいたします, (Kami akan) Memberikan pengumuman., z, 6
お越しください, おこしください, Silakan datang ke ～., z, 6
事故, じこ, Kecelakaan, z, 6
壊れる, こわれる, Rusak, z, 6
信号, しんごう, Sinyal / Lampu lalu lintas, z, 6
信号故障, しんごうこしょう, Kerusakan sinyal, z, 6
アナウンス, アナウンス, Pengumuman, z, 6
困る, こまる, Kesulitan / Bingung, z, 6
なんて言ってましたか？, なんていってましたか？, Tadi bilang apa?, z, 6
当駅, とうえき, Stasiun ini, z, 6
～のため, ～のため, Karena ～, z, 6
運転, うんてん, Operasi (kereta), z, 6
お急ぎのところ, おいそぎのところ, Saat Anda sedang terburu-buru, z, 6
お知らせいたします, おしらせいたします, (Kami akan) Menginformasikan., z, 6
行っております, おこなっております, Sedang melakukan., z, 6
ご迷惑をおかけします, ごめいわくをおかけします, Mohon maaf atas ketidaknyamanannya., z, 6
人身事故, じんしんじこ, Kecelakaan (melibatkan orang), z, 6
影響, えいきょう, Pengaruh / Dampak, z, 6
全線, ぜんせん, Seluruh jalur, z, 6
お越し, おこし, Datang / Menuju ke, z, 6
ご利用ください, ごりようください, Silakan gunakan., z, 6
感動する, かんどうする, Terharu / Terkesan, z, 6
気持ちいい, きもちいい, Menyenangkan / Nyaman, z, 6
残念（な）, ざんねん（な）, Sayang sekali / Mengecewakan, z, 6
疲れる, つかれる, Lelah, z, 6
びっくりする, びっくりする, Kaget, z, 6
驚く, おどろく, Terkejut, z, 6
こわい, こわい, Takut / Menakutkan, z, 6
よかった, よかった, Syukurlah / Baguslah, z, 6
大阪, おおさか, Osaka, z, 6
串カツ, くしカツ, Kushi-katsu, z, 6
たこ焼き, たこやき, Takoyaki, z, 6
登る, のぼる, Mendaki / Naik, z, 6
あべのハルカス, あべのハルカス, Abeno Harukas, z, 6
大阪城, おおさかじょう, Istana Osaka, z, 6
通天閣, つうてんかく, Menara Tsutenkaku, z, 6
鳥, とり, Burung, z, 6
あげる, あげる, Memberi, z, 6
つり, つり, Memancing, z, 6
空, そら, Langit, z, 6
ウミネコ, ウミネコ, Burung camar ekor hitam, z, 6
あの辺, あのへん, Sekitar sana, z, 6
浄土ヶ浜, じょうどがはま, Pantai Jodogahama, z, 6
ケーブルカー, ケーブルカー, Kereta kabel, z, 6
歩く, あるく, Berjalan kaki, z, 6
リス, リス, Tupai, z, 6
だから, だから, Makanya / Oleh karena itu, z, 6
あきらめる, あきらめる, Menyerah, z, 6
頂上, ちょうじょう, Puncak, z, 6
高尾山, たかおさん, Gunung Takao, z, 6
町並み, まちなみ, Pemandangan kota, z, 6
花畑, はなばたけ, Ladang bunga, z, 6
イルミネーション, イルミネーション, Iluminasi (lampu hias), z, 6
ショー, ショー, Pertunjukan, z, 6
泊まる, とまる, Menginap, z, 6
滝, たき, Air terjun, z, 6
きらきら, きらきら, Berkilauan / Berkelip, z, 6
光る, ひかる, Bersinar, z, 6
ハウステンボス, ハウステンボス, Huis Ten Bosch, z, 6
オランダ, オランダ, Belanda, z, 6
インスタントラーメン, インスタントラーメン, Mi instan, z, 6
描く, かく, Menggambar, z, 6
カップラーメン, カップラーメン, Mi gelas, z, 6
絵, え, Gambar, z, 6
トッピング, トッピング, Topping, z, 6
`;