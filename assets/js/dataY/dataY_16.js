const dataString = `
顔, かお, Wajah, y, 16
体, からだ, Tubuh, y, 16
頭, あたま, Kepala, y, 16
鼻, はな, Hidung, y, 16
歯, は, Gigi, y, 16
首, くび, Leher, y, 16
目, め, Mata, y, 16
耳, みみ, Telinga, y, 16
口, くち, Mulut, y, 16
肩, かた, Bahu, y, 16
胸, むね, Dada, y, 16
お腹, おなか, Perut, y, 16
足, あし, Kaki, y, 16
背中, せなか, Punggung, y, 16
腰, こし, Pinggang, y, 16
腕, うで, Lengan, y, 16
手, て, Tangan, y, 16
指, ゆび, Jari, y, 16
肩がこる, かたがこる, Bahu kaku, y, 16
だるい, だるい/だるい, Lesu, y, 16
痛い, いたい, Sakit, y, 16
胃, い, Lambung, y, 16
調子が悪い, ちょうしがわるい, Kondisi (badan) buruk, y, 16
二日酔い, ふつかよい, Mabuk (setelah minum), y, 16
眠れない, ねむれない, Tidak bisa tidur, y, 16
お風呂に入る, おふろにはいる, Mandi (berendam), y, 16
温める, あたためる, Menghangatkan, y, 16
温かい, あたたかい, Hangat, y, 16
飲む, のむ, Minum, y, 16
マッサージする, マッサージする, Memijat, y, 16
薬, くすり, Obat, y, 16
飲む (薬を飲む), のむ (くすりをのむ), Minum (minum obat), y, 16
最近, さいきん, Akhir-akhir ini, y, 16
ぬるい, ぬるい, Hangat (air), y, 16
試す, ためす, Mencoba, y, 16
飲みすぎる, のみすぎる/のみすぎる, Minum berlebihan, y, 16
けっこう, けっこう, Cukup, y, 16
それはいけませんね, それはいけませんね, Wah, tidak baik ya., y, 16
どうしていますか?, どうしていますか?, Apa yang Anda lakukan?, y, 16
疲れている, つかれている, Lelah, y, 16
寝不足, ねぶそく/ねぶそく, Kurang tidur, y, 16
健康, けんこう, Kesehatan, y, 16
運動, うんどう, Olahraga, y, 16
ジム, ジム, Gym, y, 16
ジョギングする, ジョギングする, Joging, y, 16
走る, はしる, Berlari, y, 16
ウォーキングする, ウォーキングする, Jalan (kaki), y, 16
歩く, あるく, Berjalan, y, 16
プール, プール, Kolam renang, y, 16
泳ぐ, およぐ, Berenang, y, 16
ヨガ, ヨガ, Yoga, y, 16
食生活, しょくせいかつ, Pola makan, y, 16
食べすぎる, たべすぎる/たべすぎる, Makan berlebihan, y, 16
睡眠, すいみん, Tidur, y, 16
早く, はやく, Cepat / Awal, y, 16
起きる, おきる, Bangun, y, 16
だいたい, だいたい, Sekitar, y, 16
チキンサラダ, チキンサラダ, Salad ayam, y, 16
トマトジュース, トマトジュース, Jus tomat, y, 16
ダイエットする, ダイエットする, Diet, y, 16
気をつける, きをつける, Berhati-hati / Menjaga, y, 16
なるほど, なるほど, Begitu ya / Masuk akal., y, 16
ノロウイルス, ノロウイルス, Norovirus, y, 16
食中毒, しょくちゅうどく, Keracunan makanan, y, 16
原因, げんいん, Penyebab, y, 16
症状, しょうじょう, Gejala, y, 16
予防法, よぼうほう, Cara pencegahan, y, 16
腹痛, ふくつう, Sakit perut, y, 16
おう吐, おうと, Muntah, y, 16
下痢, げり, Diare, y, 16
手洗い, てあらい, Cuci tangan, y, 16
加熱(する), かねつ(する), Pemanasan / Memanaskan, y, 16
増える, ふえる, Bertambah / Menyebar, y, 16
発生する, はっせいする, Terjadi, y, 16
貝, かい, Kerang, y, 16
感染する, かんせんする, Terinfeksi, y, 16
調理(する), ちょうり(する), Memasak, y, 16
予防する, よぼうする, Mencegah, y, 16
急増, きゅうぞう, Peningkatan pesat, y, 16
県内, けんない, Dalam prefektur, y, 16
話題, わだい, Topik, y, 16
汚染された, おせんされた, Terkontaminasi, y, 16
カキ, カキ, Tiram, y, 16
十分に, じゅうぶんに, Dengan cukup, y, 16
ウイルス, ウイルス, Virus, y, 16
つく (ウイルスがつく), つく (ウイルスがつく), Menempel (virus menempel), y, 16
起こす, おこす, Menyebabkan, y, 16
どうしたら, どうしたら, Bagaimana (caranya), y, 16
ポイント, ポイント, Poin, y, 16
十分(な), じゅうぶん(な), Cukup, y, 16
食事前, しょくじまえ, Sebelum makan, y, 16
前後, ぜんご, Sebelum dan sesudah, y, 16
洗う, あらう, Mencuci, y, 16
中心部, ちゅうしんぶ, Bagian tengah, y, 16
うつす, うつす, Menularkan, y, 16
マスク, マスク, Masker, y, 16
うがい, うがい, Kumur, y, 16
予防接種, よぼうせっしゅ, Vaksinasi, y, 16
発熱, はつねつ, Demam, y, 16
全身, ぜんしん, Seluruh tubuh, y, 16
だるさ, だるさ, Rasa lesu, y, 16
関節痛, かんせつつう, Nyeri sendi, y, 16
痛み, いたみ, Rasa sakit, y, 16
気持ち, きもち, Perasaan, y, 16
大切(な), たいせつ(な), Penting, y, 16
こまめに, こまめに, Sering, y, 16
しっかりと, しっかりと, Dengan baik, y, 16
外出先, がいしゅつさき, Di luar (rumah), y, 16
帰宅する, きたくする, Pulang ke rumah, y, 16
流行する, りゅうこうする, Mewabah, y, 16
受ける, うける, Menerima (vaksin), y, 16
予約, よやく, Reservasi / Janji, y, 16
受付中, うけつけちゅう, Pendaftaran dibuka, y, 16
クリニック, クリニック, Klinik, y, 16
`;