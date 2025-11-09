const dataString = `
1円, いちえん, 1 Yen, x, 16
5円, ごえん, 5 Yen, x, 16
10円, じゅうえん, 10 Yen, x, 16
50円, ごじゅうえん, 50 Yen, x, 16
100, ひゃく, Seratus, x, 16
200, にひゃく, Dua ratus, x, 16
300, さんびゃく, Tiga ratus, x, 16
400, よんひゃく, Empat ratus, x, 16
500, ごひゃく, Lima ratus, x, 16
600, ろっぴゃく, Enam ratus, x, 16
700, ななひゃく, Tujuh ratus, x, 16
800, はっぴゃく, Delapan ratus, x, 16
900, きゅうひゃく, Sembilan ratus, x, 16
1,000, せん, Seribu, x, 16
2,000, にせん, Dua ribu, x, 16
3,000, さんぜん, Tiga ribu, x, 16
4,000, よんせん, Empat ribu, x, 16
5,000, ごせん, Lima ribu, x, 16
6,000, ろくせん, Enam ribu, x, 16
7,000, ななせん, Tujuh ribu, x, 16
8,000, はっせん, Delapan ribu, x, 16
9,000, きゅうせん, Sembilan ribu, x, 16
10,000, いちまん, Sepuluh ribu, x, 16
100円, ひゃくえん, 100 Yen, x, 16
200円, にひゃくえん, 200 Yen, x, 16
300円, さんびゃくえん, 300 Yen, x, 16
400円, よんひゃくえん, 400 Yen, x, 16
500円, ごひゃくえん, 500 Yen, x, 16
600円, ろっぴゃくえん, 600 Yen, x, 16
700円, ななひゃくえん, 700 Yen, x, 16
800円, はっぴゃくえん, 800 Yen, x, 16
900円, きゅうひゃくえん, 900 Yen, x, 16
1,000円, せんえん/せんえん, 1.000 Yen, x, 16
2,000円, にせんえん, 2.000 Yen, x, 16
3,000円, さんぜんえん, 3.000 Yen, x, 16
4,000円, よんせんえん, 4.000 Yen, x, 16
5,000円, ごせんえん, 5.000 Yen, x, 16
6,000円, ろくせんえん, 6.000 Yen, x, 16
7,000円, ななせんえん, 7.000 Yen, x, 16
8,000円, はっせんえん, 8.000 Yen, x, 16
9,000円, きゅうせんえん, 9.000 Yen, x, 16
10,000円, いちまんえん, 10.000 Yen, x, 16
いくら, いくら, Berapa (harga), x, 16
カレンダー, カレンダー, Kalender, x, 16
お菓子, おかし, Makanan ringan, x, 16
招き猫, まねきねこ, Maneki-neko (kucing keberuntungan), x, 16
Tシャツ, ティーシャツ, Kaus, x, 16
その, その, Itu (dekat pendengar), x, 16
それ, それ, Itu (dekat pendengar), x, 16
この, この, Ini (dekat pembicara), x, 16
これ, これ, Ini (dekat pembicara), x, 16
あの, あの, Itu (jauh), x, 16
あれ, あれ, Itu (jauh), x, 16
いいです, いいです, Tidak, terima kasih, x, 16
たい焼き, たいやき, Taiyaki, x, 16
コロッケ, コロッケ/コロッケ, Kroket, x, 16
シュウマイ, シュウマイ, Siomay, x, 16
ひき肉, ひきにく, Daging cincang, x, 16
チョコレートケーキ, チョコレートケーキ, Kue cokelat, x, 16
チーズケーキ, チーズケーキ, Kue keju, x, 16
昆布, こんぶ, Kombu (rumput laut), x, 16
たらこ, たらこ, Tarako (telur ikan), x, 16
梅, うめ, Plum (asinan), x, 16
~個, ~こ, ~ buah (satuan), x, 16
~g, ~グラム, ~ gram, x, 16
~ずつ, ~ずつ, Masing-masing ~, x, 16
かしこまりました, かしこまりました, Baik, saya mengerti (sopan), x, 16
1個, いっこ, 1 buah, x, 16
2個, にこ, 2 buah, x, 16
3個, さんこ, 3 buah, x, 16
4個, よんこ, 4 buah, x, 16
5個, ごこ, 5 buah, x, 16
6個, ろっこ, 6 buah, x, 16
7個, ななこ, 7 buah, x, 16
8個, はちこ/はっこ, 8 buah, x, 16
9個, きゅうこ, 9 buah, x, 16
10個, じゅっこ, 10 buah, x, 16
何個, なんこ, Berapa buah, x, 16
温める/温めます, あたためる/あたためます, Menghangatkan, x, 16
袋, ふくろ, Kantong, x, 16
Suica, スイカ, Suica (kartu e-money), x, 16
タッチする/タッチします, タッチする/タッチします, Menyentuh (Tap), x, 16
~は、どうしますか?, ~は、どうしますか?, ...nya bagaimana?, x, 16
だいじょうぶです, だいじょうぶです, Tidak apa-apa (tidak perlu), x, 16
~でお願いします, ~でおねがいします, Tolong pakai ~, x, 16
タッチしてください, タッチしてください, Silakan sentuh (kartunya), x, 16
ありがとうございました, ありがとうございました, Terima kasih, x, 16
こちら, こちら, Ini (sopan), x, 16
お次の方, おつぎのかた, Berikutnya, x, 16
おつけしますか?, おつけしますか?, Perlu (saya) tambahkan?, x, 16
お会計、~になります, おかいけい、~になります, Totalnya ..., x, 16
おはし, おはし, Sumpit, x, 16
フォーク, フォーク, Garpu, x, 16
ストロー, ストロー, Sedotan, x, 16
クレジットカード, クレジットカード, Kartu kredit, x, 16
Edy, エディ, Edy (e-money), x, 16
PayPay, ペイペイ, PayPay, x, 16
~割引 (二割引き), ~わりびき (にわりびき), Diskon ~ (Diskon 20%), x, 16
表示価格より, ひょうじかかくより, Dari harga tertera, x, 16
若鶏, わかどり, Ayam muda, x, 16
税込, ぜいこみ, Termasuk pajak, x, 16
~%引 (10%引), ~パーセントびき (じゅっパーセントびき), Diskon ~% (Diskon 10%), x, 16
全品, ぜんぴん, Semua barang, x, 16
一人暮らし, ひとりぐらし, Tinggal sendiri, x, 16
応援, おうえん, Dukungan, x, 16
セール, セール, Obral, x, 16
小型, こがた, Ukuran kecil, x, 16
さらに, さらに, Lebih lanjut / Lagi, x, 16
ポイントサービス, ポイントサービス, Layanan poin, x, 16
~円引 (50円引), ~えんびき (ごじゅうえんびき), Diskon ~ Yen (Diskon 50 Yen), x, 16
苺ショートケーキ, いちごショートケーキ, Kue tart stroberi, x, 16
本日, ほんじつ, Hari ini, x, 16
値下価格, ねさげかかく, Harga diskon, x, 16
税抜, ぜいぬき, Sebelum pajak, x, 16
半額, はんがく, Setengah harga, x, 16
レジにて, レジにて, (Diskon) di kasir, x, 16
国産銘柄鶏胸肉, こくさんめいがらとりむねにく, Daging dada ayam merek domestik, x, 16
~円均一 (50円均一), ~えんきんいつ (ごじゅうえんきんいつ), Serba ~ Yen (Serba 50 Yen), x, 16
ワゴン, ワゴン, Keranjang (wagon), x, 16
商品, しょうひん, Produk, x, 16
`;