const dataString = `
季節, きせつ, Musim, z, 9
行事, ぎょうじ, Acara, z, 9
正月, しょうがつ, Tahun Baru, z, 9
成人の日, せいじんのひ, Hari Kedewasaan, z, 9
ひな祭り, ひなまつり, Hinamatsuri (Festival Boneka), z, 9
こどもの日, こどものひ, Hari Anak, z, 9
七夕, たなばた, Tanabata (Festival Bintang), z, 9
クリスマス, クリスマス, Natal, z, 9
式, しき, Upacara, z, 9
市長, しちょう, Wali kota, z, 9
話, はなし, Cerita / Pidato, z, 9
チキン, チキン, Ayam, z, 9
笹の葉, ささのは, Daun bambu, z, 9
飾り, かざり, Dekorasi, z, 9
つける, つける, Memasang (dekorasi), z, 9
着物, きもの, Kimono, z, 9
ちらしずし, ちらしずし, Chirashi-zushi, z, 9
デートする, デートする, Berkencan, z, 9
短冊, たんざく, Tanzaku (kertas harapan), z, 9
願い事, ねがいごと, Permohonan / Harapan, z, 9
書く, かく, Menulis, z, 9
甘酒, あまざけ, Amazake, z, 9
こうして, こうして, Seperti ini, z, 9
お米, おこめ, Beras, z, 9
アルコール, アルコール, Alkohol, z, 9
若い, わかい, Muda, z, 9
お祝いする, おいわいする, Merayakan, z, 9
成人式, せいじんしき, Upacara Kedewasaan, z, 9
おしゃれをする, おしゃれをする, Berdandan, z, 9
中学校, ちゅうがっこう, Sekolah Menengah Pertama (SMP), z, 9
盛り上がる, もりあがる, Menjadi meriah / Seru, z, 9
フライドチキン, フライドチキン, Ayam goreng, z, 9
必ず, かならず, Pasti / Selalu, z, 9
過ごす, すごす, Menghabiskan (waktu), z, 9
DVD, ディーブイディー, DVD, z, 9
実家, じっか, Rumah orang tua, z, 9
ごろごろする, ごろごろする, Bersantai / Bermalas-malasan, z, 9
お年玉, おとしだま, Otoshidama (uang tahun baru), z, 9
乗り物, のりもの, Wahana, z, 9
今年, ことし, Tahun ini, z, 9
親戚, しんせき, Kerabat / Saudara, z, 9
集まる, あつまる, Berkumpul, z, 9
毎年, まいとし, Setiap tahun, z, 9
甥, おい, Keponakan (laki-laki), z, 9
姪, めい, Keponakan (perempuan), z, 9
あけましておめでとうございます, あけましておめでとうございます, Selamat Tahun Baru., z, 9
祭り, まつり, Festival, z, 9
田舎, いなか, Kampung halaman, z, 9
飾る, かざる, Menghias / Memajang, z, 9
特別（な）, とくべつ（な）, Spesial / Khusus, z, 9
パーティー, パーティー, Pesta, z, 9
歌う, うたう, Menyanyi, z, 9
踊る, おどる, Menari, z, 9
お金, おかね, Uang, z, 9
断食, だんじき, Puasa, z, 9
～明け, ～あけ, Setelah ～, z, 9
旧暦, きゅうれき, Kalender lunar, z, 9
キリスト教, キリストきょう, Agama Kristen, z, 9
お祝い, おいわい, Perayaan, z, 9
水かけ祭り, みずかけまつり, Festival Perang Air, z, 9
年, とし, Tahun, z, 9
～によって, ～によって, Tergantung pada ～, z, 9
春節, しゅんせつ, Tahun Baru Imlek, z, 9
ソンクラーン, ソンクラーン, Songkran, z, 9
レバラン, レバラン, Lebaran, z, 9
海外旅行, かいがいりょこう, Perjalanan luar negeri, z, 9
赤い, あかい, Merah, z, 9
かけ合う, かけあう, Saling melempar / menyiram, z, 9
クトゥパット, クトゥパット, Ketupat, z, 9
餃子, ぎょうざ, Gyoza / Pangsit, z, 9
豚, ぶた, Babi, z, 9
丸焼き, まるやき, Panggang utuh, z, 9
クッキー, クッキー, Kue kering, z, 9
大切（な）, たいせつ（な）, Penting, z, 9
どんなふうに, どんなふうに, Bagaimana caranya, z, 9
祝う, いわう, Merayakan, z, 9
赤, あか, (Warna) Merah, z, 9
おめでたい, おめでたい, (Penuh) Selamat / Perayaan, z, 9
色, いろ, Warna, z, 9
イスラム教, イスラムきょう, Agama Islam, z, 9
ラマダン, ラマダン, Ramadan, z, 9
例えば, たとえば, Contohnya, z, 9
飾りつけ, かざりつけ, Dekorasi, z, 9
半分, はんぶん, Setengah, z, 9
餅つき, もちつき, Menumbuk mochi, z, 9
当日, とうじつ, Pada hari H, z, 9
大人, おとな, Dewasa, z, 9
味わう, あじわう, Mencicipi / Menikmati, z, 9
伝統的（な）, でんとうてき（な）, Tradisional, z, 9
文化, ぶんか, Budaya, z, 9
感想, かんそう, Kesan, z, 9
語る, かたる, Bercerita / Berbicara, z, 9
活動報告, かつどうほうこく, Laporan kegiatan, z, 9
実際に, じっさいに, Sebenarnya / Pada kenyataannya, z, 9
杵, きね, Palu (untuk mochi), z, 9
体験する, たいけんする, Mengalami / Mencoba, z, 9
つきたて, つきたて, Baru jadi (ditumbuk), z, 9
お餅, おもち, Mochi, z, 9
きなこ, きなこ, Kinako (tepung kedelai), z, 9
あんこ, あんこ, Anko (pasta kacang merah), z, 9
餅をつく, もちをつく, Menumbuk mochi, z, 9
チームワーク, チームワーク, Kerja sama tim, z, 9
トック, トック, Tteok (kue beras Korea), z, 9
思ったより（も）, おもったより（も）, Lebih dari yang dikira, z, 9
昨年, さくねん, Tahun lalu, z, 9
昨年はいろいろお世話になりました, さくねんはいろいろおせわになりました, Terima kasih atas bantuan Anda tahun lalu., z, 9
今年もよろしくお願いします, ことしもよろしくおねがいします, Mohon bantuannya lagi tahun ini., z, 9
あけおめ, あけおめ, Met Taun Baru (singk.), z, 9
ことよろ, ことよろ, Mohon bantuannya (singk.), z, 9
謹賀新年, きんがしんねん, Selamat Tahun Baru (formal), z, 9
遊ぼう, あそぼう, Ayo main, z, 9
また遊ぼうね, またあそぼうね, Main lagi ya nanti!, z, 9
`;