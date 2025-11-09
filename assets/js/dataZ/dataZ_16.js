const dataString = `
災害, さいがい, Bencana, z, 16
台風, たいふう, Topan, z, 16
地震, じしん, Gempa bumi, z, 16
火事, かじ, Kebakaran, z, 16
火災, かさい, Kebakaran, z, 16
大雪, おおゆき, Salju lebat, z, 16
津波, つなみ, Tsunami, z, 16
起こる, おこる, Terjadi, z, 16
揺れる, ゆれる, Bergetar / Berguncang, z, 16
火事になる, かじになる, Menjadi kebakaran, z, 16
火が出る, ひがでる, Api muncul, z, 16
積もる, つもる, Menumpuk (salju), z, 16
ニュース, ニュース, Berita, z, 16
緊急速報, きんきゅうそくほう, Laporan darurat, z, 16
避難する, ひなんする, Mengungsi, z, 16
倒れる, たおれる, Jatuh / Roboh, z, 16
離れる, はなれる, Menjauh, z, 16
近づく, ちかづく, Mendekat, z, 16
隠れる, かくれる, Bersembunyi, z, 16
あわてる, あわてる, Panik, z, 16
落ち着く, おちつく, Tenang, z, 16
行動する, こうどうする, Bertindak, z, 16
出る, でる, Keluar, z, 16
最新, さいしん, Terbaru, z, 16
確認する, かくにんする, Memeriksa / Memastikan, z, 16
海岸, かいがん, Pantai, z, 16
上陸する, じょうりくする, Mendarat (topan), z, 16
非常に, ひじょうに, Sangat, z, 16
激しい, はげしい, Hebat / Kencang, z, 16
様子, ようす, Keadaan, z, 16
絶対に, ぜったいに, Sama sekali (jangan), z, 16
やめる, やめる, Berhenti, z, 16
安全（な）, あんぜん（な）, Aman, z, 16
～から～にかけて, ～から～にかけて, Dari ～ hingga ～, z, 16
関東, かんとう, (Wilayah) Kanto, z, 16
見込み, みこみ, Diperkirakan, z, 16
伊豆諸島, いずしょとう, Kepulauan Izu, z, 16
東海, とうかい, (Wilayah) Tokai, z, 16
局地的に, きょくちてきに, Secara lokal, z, 16
係員, かかりいん, Petugas, z, 16
指示, しじ, Instruksi, z, 16
従う, したがう, Mengikuti, z, 16
年寄り, としより, Lansia, z, 16
優先, ゆうせん, Prioritas, z, 16
揺れ, ゆれ, Guncangan, z, 16
警戒する, けいかいする, Waspada, z, 16
守る, まもる, Melindungi (diri), z, 16
家具, かぐ, Mebel, z, 16
震源, しんげん, Pusat gempa, z, 16
海底, かいてい, Dasar laut, z, 16
～のおそれがある, ～のおそれがある, Ada kemungkinan ～, z, 16
緊急地震速報, きんきゅうじしんそくほう, Peringatan dini gempa, z, 16
滋賀, しが, Shiga, z, 16
兵庫, ひょうご, Hyogo, z, 16
福井, ふくい, Fukui, z, 16
三重, みえ, Mie, z, 16
和歌山, わかやま, Wakayama, z, 16
香川, かがわ, Kagawa, z, 16
近畿地方, きんきちほう, Wilayah Kinki, z, 16
感じる, かんじる, Merasakan, z, 16
防災訓練, ぼうさいくんれん, Latihan bencana, z, 16
避難訓練, ひなんくんれん, Latihan evakuasi, z, 16
防災頭巾, ぼうさいずきん, Tudung pelindung bencana, z, 16
ヘルメット, ヘルメット, Helm, z, 16
かぶる, かぶる, Memakai (helm), z, 16
ドア, ドア, Pintu, z, 16
開ける, あける, Membuka, z, 16
火, ひ, Api, z, 16
消す, けす, Mematikan (api), z, 16
消火する, しょうかする, Memadamkan api, z, 16
消防署, しょうぼうしょ, Kantor pemadam kebakaran, z, 16
119番, ひゃくじゅうきゅうばん, Nomor 119, z, 16
集まる, あつまる, Berkumpul, z, 16
並ぶ, ならぶ, Berbaris, z, 16
点呼する, てんこする, Absen (nama), z, 16
報告する, ほうこくする, Melapor, z, 16
知らせる, しらせる, Memberi tahu, z, 16
姿勢, しせい, Posisi / Postur, z, 16
低くする, ひくくする, Merendahkan, z, 16
しゃがむ, しゃがむ, Jongkok, z, 16
ハンカチ, ハンカチ, Saputangan, z, 16
口に当てる, くちにあてる, Menutup mulut, z, 16
火災報知器, かさいほうちき, Alarm kebakaran, z, 16
鳴る, なる, Berbunyi, z, 16
震度, しんど, Skala (gempa), z, 16
おさまる, おさまる, Berhenti (guncangan), z, 16
避難, ひなん, Evakuasi, z, 16
開始する, かいしする, Memulai, z, 16
中庭, なかにわ, Halaman tengah, z, 16
～ごと, ～ごと, Per ～, z, 16
初期消火, しょきしょうか, Pemadaman api awal, z, 16
消火器, しょうかき, Alat pemadam api, z, 16
逃げ遅れる, にげおくれる, Terlambat melarikan diri, z, 16
一つ一つ, ひとつひとつ, Satu per satu, z, 16
見て回る, みてまわる, Melihat berkeliling, z, 16
煙体験, けむりたいけん, Simulasi asap, z, 16
煙, けむり, Asap, z, 16
充満する, じゅうまんする, Mengisi penuh, z, 16
逃げる, にげる, Melarikan diri, z, 16
進む, すすむ, Maju, z, 16
注意点, ちゅういてん, Poin perhatian, z, 16
吸う, すう, Menghirup (asap), z, 16
声, こえ, Suara, z, 16
声をかけ合う, こえをかけあう, Saling memanggil, z, 16
床, ゆか, Lantai, z, 16
安全ピン, あんぜんピン, Pin pengaman, z, 16
レバー, レバー, Tuas, z, 16
ホース, ホース, Selang, z, 16
抜く, ぬく, Mencabut, z, 16
先, さき, Ujung, z, 16
向ける, むける, Mengarahkan, z, 16
途中, とちゅう, Di tengah, z, 16
握る, にぎる, Menggenggam, z, 16
噴射する, ふんしゃする, Menyemprotkan, z, 16
左右, さゆう, Kanan kiri, z, 16
狙う, ねらう, Mengincar / Menargetkan, z, 16
消える, きえる, Padam, z, 16
～m, ～メートル, ～ meter, z, 16
～秒, ～びょう, ～ detik, z, 16
感じる, かんじる, Merasakan, z, 16
落ちる, おちる, Jatuh, z, 16
ゆがむ, ゆがむ, Miring / Berubah bentuk, z, 16
無理をする, むりをする, Memaksakan diri, z, 16
ガスコンロ, ガスコンロ, Kompor gas, z, 16
～必要がある／ない, ～ひつようがある／ない, Perlu / Tidak perlu ～, z, 16
天井, てんじょう, Langit-langit, z, 16
届く, とどく, Mencapai, z, 16
危ない, あぶない, Berbahaya, z, 16
町なか, まちなか, Di (tengah) kota, z, 16
屋外, おくがい, Luar ruangan, z, 16
ガラス, ガラス, Kaca, z, 16
影響, えいきょう, Dampak / Pengaruh, z, 16
断水する, だんすいする, Air mati, z, 16
止まる, とまる, Berhenti, z, 16
停電する, ていでんする, Listrik padam, z, 16
電気, でんき, Listrik, z, 16
ガス, ガス, Gas, z, 16
通行止め, つうこうどめ, Jalan ditutup, z, 16
避難所, ひなんじょ, Tempat evakuasi, z, 16
給水車, きゅうすいしゃ, Truk air, z, 16
炊き出し, たきだし, Dapur umum darurat, z, 16
必要（な）, ひつよう（な）, Perlu / Dibutuhkan, z, 16
水, みず, Air, z, 16
非常食, ひじょうしょく, Makanan darurat, z, 16
懐中電灯, かいちゅうでんとう, Senter, z, 16
ろうそく, ろうそく, Lilin, z, 16
ラジオ, ラジオ, Radio, z, 16
毛布, もうふ, Selimut, z, 16
寝袋, ねぶくろ, Kantong tidur, z, 16
ポリタンク, ポリタンク, Jeriken, z, 16
充電（する）, じゅうでん（する）, Mengisi daya, z, 16
小学校, しょうがっこう, Sekolah dasar, z, 16
総合福祉センター, そうごうふくしセンター, Pusat kesejahteraan umum, z, 16
ショップ, ショップ, Toko, z, 16
今回, こんかい, Kali ini, z, 16
レベル, レベル, Level, z, 16
一人暮らし, ひとりぐらし, Tinggal sendiri, z, 16
戻る, もどる, Kembali, z, 16
早め, はやめ, Lebih awal, z, 16
続く, つづく, Berlanjut, z, 16
容器, ようき, Wadah, z, 16
仮設, かせつ, Sementara, z, 16
力, ちから, Tenaga / Kekuatan, z, 16
持ち出す, もちだす, Membawa keluar, z, 16
賞味期限, しょうみきげん, Tanggal kedaluwarsa (makanan), z, 16
使用期限, しようきげん, Batas waktu penggunaan, z, 16
切れる, きれる, Habis / Kedaluwarsa, z, 16
切れる, きれる, Habis (baterai), z, 16
貴重品, きちょうひん, Barang berharga, z, 16
電灯, でんとう, Lampu listrik, z, 16
携帯ラジオ, けいたいラジオ, Radio portabel, z, 16
非常持ち出し品, ひじょうもちだしひん, Barang bawaan darurat, z, 16
生活（する）, せいかつ（する）, Hidup, z, 16
下着, したぎ, Pakaian dalam, z, 16
生理用品, せいりようひん, Pembalut, z, 16
ウェットティッシュ, ウェットティッシュ, Tisu basah, z, 16
ライター, ライター, Korek api, z, 16
使い捨てカイロ, つかいすてカイロ, Penghangat sekali pakai, z, 16
粉ミルク, こなミルク, Susu bubuk, z, 16
おむつ, おむつ, Popok, z, 16
卓上コンロ, たくじょうコンロ, Kompor portabel, z, 16
ガスボンベ, ガスボンベ, Tabung gas (kecil), z, 16
なべ, なべ, Panci, z, 16
アウトドア用品, アウトドアようひん, Peralatan luar ruangan, z, 16
かぜ薬, かぜぐすり, Obat flu, z, 16
ばんそうこう, ばんそうこう, Plester, z, 16
消毒液, しょうどくえき, Cairan antiseptik, z, 16
モバイルバッテリー, モバイルバッテリー, Power bank, z, 16
現金, げんきん, Uang tunai, z, 16
預金通帳, よきんつうちょう, Buku tabungan, z, 16
パスポート, パスポート, Paspor, z, 16
健康保険証, けんこうほけんしょう, Kartu asuransi kesehatan, z, 16
外国人登録証, がいこくじんとうろくしょう, Kartu registrasi orang asing, z, 16
缶づめ, かんづめ, Makanan kaleng, z, 16
インスタント食品, インスタントしょくひん, Makanan instan, z, 16
`;