const dataString = `
上がる, あがる, Masuk (ke rumah), y, 17
うちの, うちの, (Milik) Saya, y, 17
奥さん, おくさん, Istri (orang lain), y, 17
息子, むすこ, Anak laki-laki, y, 17
お茶, おちゃ, Teh, y, 17
足をくずす, あしをくずす, Duduk santai (bersila), y, 17
楽にする, らくにする, Bersantai, y, 17
遊びに来る, あそびにくる, Datang berkunjung/main, y, 17
ごめんください, ごめんください, Permisi., y, 17
いらっしゃい, いらっしゃい, Selamat datang., y, 17
ようこそ, ようこそ, Selamat datang., y, 17
おじゃまします, おじゃまします, Permisi (saat masuk rumah), y, 17
お世話になっています, おせわになっています, Terima kasih atas bantuan Anda., y, 17
こちらこそ, こちらこそ, Sama-sama., y, 17
ごちそうさまでした, ごちそうさまでした, Terima kasih atas makanannya., y, 17
おじゃましました, おじゃましました, Permisi (saat pamit)., y, 17
お土産, おみやげ, Oleh-oleh, y, 17
コーヒー, コーヒー, Kopi, y, 17
調味料, ちょうみりょう, Bumbu, y, 17
カップ, カップ, Cangkir, y, 17
キーホルダー, キーホルダー, Gantungan kunci, y, 17
ペン, ペン, Pena, y, 17
お守り, おまもり, Jimat, y, 17
絵葉書, えはがき, Kartu pos (bergambar), y, 17
写真集, しゃしんしゅう, Album foto, y, 17
飾り, かざり, Hiasan, y, 17
人形, にんぎょう, Boneka, y, 17
かばん, かばん, Tas, y, 17
バッグ, バッグ, Tas, y, 17
魔よけ, まよけ, Penangkal sihir/bala, y, 17
ネパール, ネパール, Nepal, y, 17
ナンプラー, ナンプラー, Nam pla (kecap ikan), y, 17
タイ, タイ, Thailand, y, 17
トゥロン, トゥロン, Turon, y, 17
フィリピン, フィリピン, Filipina, y, 17
スラーソー, スラーソー, Sra Sor (alkohol), y, 17
カンボジア, カンボジア, Kamboja, y, 17
壁, かべ, Dinding, y, 17
かける (壁にかける), かける (かべにかける), Menggantung (di dinding), y, 17
入って来る, はいってくる, Masuk, y, 17
悪い, わるい, Buruk / Jahat, y, 17
かける, かける, Menaburkan, y, 17
~といいます, ~といいます, Disebut ~, y, 17
プレゼント, プレゼント, Hadiah, y, 17
米/お米, こめ/おこめ, Beras, y, 17
強い, つよい, Kuat, y, 17
ピアス, ピアス, Anting, y, 17
マグカップ, マグカップ, Mug, y, 17
帽子, ぼうし, Topi, y, 17
お母さん, おかあさん, Ibu (orang lain), y, 17
お兄さん, おにいさん, Kakak laki-laki (orang lain), y, 17
誕生日, たんじょうび, Ulang tahun, y, 17
もらう, もらう, Menerima, y, 17
おしゃれ(な), おしゃれ(な), Modis / Keren, y, 17
すてき(な), すてき(な), Bagus / Menarik, y, 17
くれる, くれる, Memberi (ke saya), y, 17
両親, りょうしん, Orang tua, y, 17
いいでしょう?, いいでしょう?, Bagus 'kan?, y, 17
バリ, バリ, Bali, y, 17
お父さん, おとうさん, Ayah (orang lain), y, 17
お姉さん, おねえさん, Kakak perempuan (orang lain), y, 17
弟さん, おとうとさん, Adik laki-laki (orang lain), y, 17
妹さん, いもうとさん, Adik perempuan (orang lain), y, 17
お子さん, おこさん, Anak (orang lain), y, 17
息子さん, むすこさん, Anak laki-laki (orang lain), y, 17
娘さん, むすめさん, Anak perempuan (orang lain), y, 17
お宅, おたく, Rumah (orang lain), y, 17
おじゃまする, おじゃまする, Berkunjung, y, 17
経験, けいけん, Pengalaman, y, 17
よろしくお伝えください, よろしくおつたえください, Tolong sampaikan salam saya., y, 17
`;