const dataString = `
サービス, サービス, Layanan, z, 14
郵便局, ゆうびんきょく, Kantor pos, z, 14
不動産屋, ふどうさんや, Agen real estate, z, 14
理髪店, りはつてん, Tukang cukur, z, 14
床屋, とこや, Tukang cukur, z, 14
美容院, びよういん, Salon kecantikan, z, 14
クリーニング店, クリーニングてん, Binatu (Dry cleaner), z, 14
コインランドリー, コインランドリー, Binatu (koin), z, 14
中古車店, ちゅうこしゃてん, Toko mobil bekas, z, 14
自転車店, じてんしゃてん, Toko sepeda, z, 14
携帯ショップ, けいたいショップ, Toko ponsel, z, 14
スマホ修理店, スマホしゅうりてん, Toko reparasi HP, z, 14
リサイクルショップ, リサイクルショップ, Toko daur ulang, z, 14
クリーニング, クリーニング, Binatu, z, 14
シミ, シミ, Noda, z, 14
落ちる, おちる, Hilang / Luntur, z, 14
シミ抜き, シミぬき, Penghilangan noda, z, 14
別料金, べつりょうきん, Biaya tambahan, z, 14
お渡し, おわたし, Penyerahan, z, 14
空気, くうき, Udara / Angin, z, 14
空気入れ, くうきいれ, Pompa angin, z, 14
入る, はいる, Masuk, z, 14
タイヤ, タイヤ, Ban, z, 14
キャップ, キャップ, Tutup (ban), z, 14
はずす, はずす, Melepas, z, 14
はさむ, はさむ, Menjepit, z, 14
かぶせる, かぶせる, Menutupkan, z, 14
ついでに, ついでに, Sekalian, z, 14
油を差す, あぶらをさす, Meminyaki, z, 14
どれどれ, どれどれ, Coba saya lihat., z, 14
宅配便, たくはいびん, Jasa pengiriman, z, 14
着払い, ちゃくばらい, Bayar di tempat, z, 14
元払い, もとばらい, Bayar di muka, z, 14
受け取る, うけとる, Menerima, z, 14
伝票, でんぴょう, Resi / Slip, z, 14
指定, してい, Menentukan, z, 14
午前中, ごぜんちゅう, Pagi hari, z, 14
最も, もっとも, Paling, z, 14
お届け, おとどけ, Pengiriman, z, 14
お預かりします, おあずかりします, (Barang) Kami terima., z, 14
表示する, ひょうじする, Menampilkan, z, 14
キャッシュカード, キャッシュカード, Kartu ATM, z, 14
お引き出し, おひきだし, Penarikan (uang), z, 14
次に, つぎに, Selanjutnya, z, 14
暗証番号, あんしょうばんごう, Nomor PIN, z, 14
入力する, にゅうりょくする, Memasukkan (input), z, 14
～桁, ～けた, ～ digit, z, 14
緑色, みどりいろ, Warna hijau, z, 14
金額, きんがく, Jumlah uang, z, 14
～円札, ～えんさつ, Lembar ～ yen, z, 14
一部, いちぶ, Sebagian, z, 14
両替（する）, りょうがえ（する）, Menukar uang, z, 14
利用明細, りようめいさい, Rincian penggunaan, z, 14
紙幣, しへい, Uang kertas, z, 14
お取りください, おとりください, Silakan ambil., z, 14
ご利用ありがとうございました, ごりようありがとうございました, Terima kasih telah menggunakan (layanan kami)., z, 14
ポストに入れる, ポストにいれる, Memasukkan ke kotak pos, z, 14
インターネット, インターネット, Internet, z, 14
申し込む, もうしこむ, Mendaftar / Meminta, z, 14
郵便物, ゆうびんぶつ, Barang pos, z, 14
不在, ふざい, Tidak ada (di rumah), z, 14
窓口, まどぐち, Loket, z, 14
再配達, さいはいたつ, Pengiriman ulang, z, 14
自動, じどう, Otomatis, z, 14
連絡票, れんらくひょう, Slip pemberitahuan, z, 14
受け取り, うけとり, Penerimaan, z, 14
印鑑, いんかん, Stempel (inkan), z, 14
免許証, めんきょしょう, SIM, z, 14
保険証, ほけんしょう, Kartu asuransi, z, 14
マイナンバーカード, マイナンバーカード, Kartu My Number, z, 14
当日, とうじつ, Hari ini / Hari H, z, 14
携帯電話, けいたいでんわ, Telepon seluler, z, 14
固定電話, こていでんわ, Telepon rumah, z, 14
郵便番号, ゆうびんばんごう, Kode pos, z, 14
種類番号, しゅるいばんごう, Nomor jenis, z, 14
国際, こくさい, Internasional, z, 14
書留, かきとめ, (Surat) Tercatat, z, 14
小包, こづつみ, Paket kecil, z, 14
お知らせ番号, おしらせばんごう, Nomor pemberitahuan, z, 14
配達日, はいたつび, Tanggal pengiriman, z, 14
保管期限, ほかんきげん, Batas waktu penyimpanan, z, 14
勤め先, つとめさき, Tempat kerja, z, 14
近所, きんじょ, Tetangga, z, 14
配達希望日, はいたつきぼうび, Tanggal pengiriman yang diinginkan, z, 14
配達先, はいたつさき, Alamat tujuan, z, 14
どのように, どのように, Bagaimana, z, 14
全体的に, ぜんたいてきに, Secara keseluruhan, z, 14
～mm, ～ミリ, ～ mm, z, 14
まわり, まわり, Sekitar, z, 14
バリカン, バリカン, Gunting (listrik), z, 14
ひげ剃り, ひげそり, Cukur jenggot/kumis, z, 14
鏡, かがみ, Cermin, z, 14
後ろのほう, うしろのほう, Bagian belakang, z, 14
こんな感じ, こんなかんじ, Seperti ini, z, 14
洗面台, せんめんだい, Wastafel, z, 14
洗う, あらう, Mencuci, z, 14
カット, カット, Potong (rambut), z, 14
預かる, あずかる, Menerima (titipan), z, 14
お返し, おかえし, Kembalian, z, 14
なさいますか？, なさいますか？, Apakah Anda mau...?, z, 14
～円からお預かりします, ～えんからおあずかりします, (Uang Anda) diterima ... yen., z, 14
どのような, どのような, Yang seperti apa, z, 14
長さ, ながさ, Panjang, z, 14
シャンプー台, シャンプーだい, Tempat keramas, z, 14
前髪, まえがみ, Poni, z, 14
お待ちしておりました, おまちしておりました, Kami telah menunggu Anda., z, 14
かゆいところはございませんか？, かゆいところはございませんか？, Apakah ada (bagian) yang gatal?, z, 14
どうでしょうか？, どうでしょうか？, Bagaimana?, z, 14
カラー, カラー, Pewarnaan (rambut), z, 14
パーマ, パーマ, Keriting, z, 14
トリートメント, トリートメント, Perawatan (rambut), z, 14
外国人, がいこくじん, Orang asing, z, 14
外国語, がいこくご, Bahasa asing, z, 14
～による, ～による, Melalui ～ / Dengan ～, z, 14
相談, そうだん, Konsultasi, z, 14
翻訳, ほんやく, Terjemahan (tulis), z, 14
通訳, つうやく, Terjemahan (lisan), z, 14
健康診断, けんこうしんだん, Pemeriksaan kesehatan, z, 14
生活ガイドブック, せいかつガイドブック, Buku panduan hidup, z, 14
日本語教室, にほんごきょうしつ, Kelas bahasa Jepang, z, 14
交流イベント, こうりゅうイベント, Acara pertukaran, z, 14
質問, しつもん, Pertanyaan, z, 14
ビザ, ビザ, Visa, z, 14
ほかにも, ほかにも, Selain itu, z, 14
情報, じょうほう, Informasi, z, 14
けが, けが, Luka, z, 14
有料, ゆうりょう, Berbayar, z, 14
助かる, たすかる, Tertolong, z, 14
楽に, らくに, Dengan mudah, z, 14
暮らす, くらす, Hidup, z, 14
センター, センター, Pusat, z, 14
入門, にゅうもん, Pemula, z, 14
上級, じょうきゅう, Mahir / Lanjutan, z, 14
個人レッスン, こじんレッスン, Les privat, z, 14
`;