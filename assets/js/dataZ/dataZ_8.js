const dataString = `
イベント会場, イベントかいじょう, Tempat acara, z, 8
屋台, やたい, Kios/Warung makan, z, 8
ステージ, ステージ, Panggung, z, 8
パフォーマンス, パフォーマンス, Pertunjukan, z, 8
観光紹介, かんこうしょうかい, Pojok informasi wisata, z, 8
～コーナー, ～コーナー, Pojok ～, z, 8
スピーチコンテスト, スピーチコンテスト, Lomba pidato, z, 8
～コンテスト, ～コンテスト, Lomba ～, z, 8
カラオケ, カラオケ, Karaoke, z, 8
～大会, ～たいかい, Lomba/Kompetisi ～, z, 8
合気道, あいきどう, Aikido, z, 8
～デモンストレーション, ～デモンストレーション, Demonstrasi ～, z, 8
世界, せかい, Dunia, z, 8
遊び, あそび, Permainan, z, 8
～体験, ～たいけん, Pengalaman (mencoba) ～, z, 8
ファッションショー, ファッションショー, Peragaan busana, z, 8
～ショー, ～ショー, Pertunjukan ～, z, 8
スタンプラリー, スタンプラリー, Reli stempel, z, 8
国際交流, こくさいこうりゅう, Pertukaran internasional, z, 8
入場料, にゅうじょうりょう, Biaya masuk, z, 8
交流プラザ, こうりゅうプラザ, Plaza pertukaran, z, 8
主催, しゅさい, Penyelenggara, z, 8
協力, きょうりょく, Kerja sama, z, 8
民族衣装, みんぞくいしょう, Pakaian tradisional, z, 8
本部, ほんぶ, Kantor pusat, z, 8
ふれあい, ふれあい, Interaksi / Pengalaman langsung, z, 8
フラダンス, フラダンス, Tari hula, z, 8
和太鼓, わだいこ, Drum Jepang, z, 8
ワールドマーケット, ワールドマーケット, Pasar dunia, z, 8
トルコ, トルコ, Turki, z, 8
ペルー, ペルー, Peru, z, 8
雑貨, ざっか, Barang serba-serbi, z, 8
団体紹介, だんたいしょうかい, Perkenalan organisasi, z, 8
民芸品, みんげいひん, Kerajinan rakyat, z, 8
手芸品, しゅげいひん, Kerajinan tangan, z, 8
ガーナ, ガーナ, Ghana, z, 8
フェアトレード, フェアトレード, Perdagangan adil, z, 8
外国人支援ネットワーク, がいこくじんしえんネットワーク, Jaringan pendukung warga asing, z, 8
ピニャータ, ピニャータ, Pinata, z, 8
くす玉割り, くすだまわり, Membuka bola konfeti, z, 8
中国ゴマ, ちゅうごくゴマ, Diabolo (Gasing Tiongkok), z, 8
回す, まわす, Memutar, z, 8
手作り, てづくり, Buatan tangan, z, 8
やっている, やっている, Mengadakan, z, 8
まだ, まだ, Masih, z, 8
受け付け, うけつけ, Resepsionis / Pendaftaran, z, 8
あっち, あっち, Sebelah sana, z, 8
つきあたり, つきあたり, Di ujung, z, 8
やっている, やっている, Mengadakan, z, 8
まだ, まだ, Masih, z, 8
受け付け, うけつけ, Resepsionis / Pendaftaran, z, 8
あっち, あっち, Sebelah sana, z, 8
つきあたり, つきあたり, Di ujung, z, 8
中学生, ちゅうがくせい, Siswa SMP, z, 8
プロ, プロ, Profesional, z, 8
遠慮する, えんりょする, Menahan diri, z, 8
出る, でる, Ikut / Berpartisipasi, z, 8
参加費, さんかひ, Biaya partisipasi, z, 8
優勝する, ゆうしょうする, Menang juara pertama, z, 8
賞品, しょうひん, Hadiah, z, 8
出る, でる, Diberikan (hadiah), z, 8
楽器, がっき, Alat musik, z, 8
曲, きょく, Lagu, z, 8
相談する, そうだんする, Berkonsultasi, z, 8
申込書, もうしこみしょ, Formulir pendaftaran, z, 8
必要事項, ひつようじこう, Informasi yang diperlukan, z, 8
申し込み, もうしこみ, Pendaftaran, z, 8
先着順, せんちゃくじゅん, Siapa cepat dia dapat, z, 8
順番に, じゅんばんに, Sesuai urutan, z, 8
いただく, いただく, Menerima (sopan), z, 8
スピーチ, スピーチ, Pidato, z, 8
テーマ, テーマ, Tema, z, 8
動画, どうが, Video, z, 8
撮影, さつえい, Pengambilan gambar / Video, z, 8
飲食, いんしょく, Makan dan minum, z, 8
販売, はんばい, Penjualan, z, 8
携帯電話, けいたいでんわ, Telepon seluler, z, 8
～内, ～ない, Di dalam ～, z, 8
協力（する）, きょうりょく（する）, Bekerja sama, z, 8
お子様, おこさま, Anak-anak (sopan), z, 8
皆様にお願いいたします, みなさまにおねがいいたします, Kami mohon kepada semuanya., z, 8
お見えです, おみえです, ... telah hadir., z, 8
ご遠慮ください（ませ）, ごえんりょください（ませ）, Mohon untuk tidak ～., z, 8
ご協力よろしくお願いいたします, ごきょうりょくよろしくおねがいいたします, Mohon kerja samanya., z, 8
電源, でんげん, Daya (listrik), z, 8
切る, きる, Mematikan, z, 8
マナーモード, マナーモード, Mode senyap, z, 8
設定する, せっていする, Mengatur, z, 8
通話（する）, つうわ（する）, Menelepon / Bicara di telepon, z, 8
お忙しい中, おいそしいなか, Di tengah kesibukan Anda, z, 8
おいでくださって、ありがとうございます, おいでくださって、ありがとうございます, Terima kasih telah datang., z, 8
かまいません, かまいません, Tidak masalah., z, 8
持ち込み, もちこみ, Membawa masuk, z, 8
禁止, きんし, Dilarang, z, 8
ロビー, ロビー, Lobi, z, 8
ロールケーキ, ロールケーキ, Kue gulung, z, 8
終了する, しゅうりょうする, Selesai / Berakhir, z, 8
個数, こすう, Jumlah (barang), z, 8
限られている, かぎられている, Terbatas, z, 8
列, れつ, Antrean, z, 8
お求めの, おもとめの, Yang ingin membeli, z, 8
お並びください, おならびください, Silakan mengantre., z, 8
太鼓, たいこ, Drum, z, 8
たたく, たたく, Memukul, z, 8
来年, らいねん, Tahun depan, z, 8
バンブーダンス, バンブーダンス, Tari Bambu, z, 8
バングラデシュ, バングラデシュ, Bangladesh, z, 8
サテー, サテー, Sate, z, 8
`;