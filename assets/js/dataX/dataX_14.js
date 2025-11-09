const dataString = `
トイレ, トイレ, Toilet, x, 14
コインロッカー, コインロッカー, Loker koin, x, 14
自動販売機, じどうはんばいき, Mesin penjual otomatis, x, 14
コンビニ, コンビニ, Minimarket, x, 14
ATM, エーティーエム, ATM, x, 14
喫煙所, きつえんじょ, Area merokok, x, 14
あちら, あちら, Sebelah sana (sopan), x, 14
飲み物, のみもの/のみもの, Minuman, x, 14
あっち, あっち, Sebelah sana, x, 14
ビル, ビル, Gedung, x, 14
奥, おく, Dalam / Ujung, x, 14
すいません, すいません, Permisi, x, 14
ちょっと、わからないですね, ちょっと、わからないですね, Maaf, saya kurang tahu, x, 14
上, うえ, Atas, x, 14
下, した, Bawah, x, 14
前, まえ, Depan, x, 14
後ろ, うしろ, Belakang, x, 14
中, なか, Dalam, x, 14
横, よこ, Samping, x, 14
エスカレーター, エスカレーター, Eskalator, x, 14
改札, かいさつ, Gerbang tiket, x, 14
インフォメーション, インフォメーション, Informasi, x, 14
そっち, そっち, Sebelah situ, x, 14
すぐ, すぐ, Segera, x, 14
わかった, わかった, Mengerti (kasual), x, 14
待っててください, まっててください, Tolong tunggu, x, 14
古い, ふるい, Tua / Lama, x, 14
新しい, あたらしい, Baru, x, 14
大きい, おおきい, Besar, x, 14
大きな, おおきな, Besar, x, 14
小さい, ちいさい, Kecil, x, 14
小さな, ちいさな, Kecil, x, 14
高い, たかい, Tinggi, x, 14
低い, ひくい, Rendah, x, 14
にぎやか(な), にぎやか(な), Ramai, x, 14
静か(な), しずか(な), Tenang / Sunyi, x, 14
広い, ひろい, Luas, x, 14
せまい, せまい, Sempit, x, 14
きれい(な), きれい(な), Bersih / Cantik, x, 14
きたない, きたない, Kotor, x, 14
商店街, しょうてんがい, Distrik perbelanjaan, x, 14
お寺, おてら, Kuil (Buddha), x, 14
野球場, やきゅうじょう, Lapangan bisbol, x, 14
公園, こうえん, Taman, x, 14
川, かわ, Sungai, x, 14
通り, とおり, Jalan, x, 14
有名(な), ゆうめい(な), Terkenal, x, 14
あれ, あれ, Itu, x, 14
建物, たてもの/たてもの, Bangunan, x, 14
~ドーム (札幌ドーム), ~ドーム (さっぽろドーム), ~ Dome (Sapporo Dome), x, 14
~でしょう?, ~でしょう?, ...'kan?, x, 14
たくさん, たくさん, Banyak, x, 14
見て, みて, Lihat!, x, 14
そうだね, そうだね, Iya ya (kasual), x, 14
危険, きけん, Bahaya, x, 14
注意, ちゅうい, Awas / Perhatian, x, 14
通行止, つうこうどめ, Jalan ditutup, x, 14
工事中, こうじちゅう, Sedang dibangun, x, 14
たばこ, たばこ, Rokok, x, 14
銀行, ぎんこう, Bank, x, 14
酒, さけ, Minuman keras, x, 14
定休日, ていきゅうび, Hari libur rutin, x, 14
準備中, じゅんびちゅう, Sedang persiapan, x, 14
営業中, えいぎょうちゅう, Sedang buka, x, 14
祭(日), さい(じつ), Hari libur, x, 14
祝(日), しゅく(じつ), Hari libur nasional, x, 14
24時間営業, にじゅうよじかんえいぎょう, Buka 24 jam, x, 14
年中無休, ねんじゅうむきゅう, Buka sepanjang tahun, x, 14
営業時間, えいぎょうじかん, Jam operasional, x, 14
ランチ, ランチ, Makan siang, x, 14
ディナー, ディナー, Makan malam, x, 14
受付時間, うけつけじかん, Jam penerimaan, x, 14
休, やすみ, Libur, x, 14
`;