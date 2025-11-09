const dataString = `
コンビニ, コンビニ, Minimarket, x, 15
スーパー, スーパー, Supermarket, x, 15
100円ショップ, ひゃくえんショップ, Toko 100 Yen, x, 15
ドラッグストア, ドラッグストア, Toko obat, x, 15
ショッピングセンター, ショッピングセンター, Pusat perbelanjaan, x, 15
ショッピングモール, ショッピングモール, Mal perbelanjaan, x, 15
ホームセンター, ホームセンター, Toko perlengkapan rumah, x, 15
デパート, デパート, Department store, x, 15
電池, でんち/でんち, Baterai, x, 15
洗濯ばさみ, せんたくばさみ, Jepitan jemuran, x, 15
浴衣, ゆかた, Yukata, x, 15
懐中電灯, かいちゅうでんとう, Senter, x, 15
弁当箱/お弁当箱, べんとうばこ/おべんとうばこ, Kotak bento, x, 15
ココナッツミルク, ココナッツミルク, Santan, x, 15
ほしい, ほしい, Ingin, x, 15
駅前, えきまえ/えきまえ, Depan stasiun, x, 15
店/お店, みせ/おみせ, Toko, x, 15
~とか, ~とか, ...atau semacamnya, x, 15
どこで買えますか?, どこでかえますか?, Bisa beli di mana?, x, 15
しょうゆ, しょうゆ, Kecap asin, x, 15
スカート, スカート, Rok, x, 15
蛍光灯, けいこうとう, Lampu neon, x, 15
ダンベル, ダンベル, Barbel, x, 15
~階, ~かい, Lantai ~, x, 15
暮らし, くらし, Kebutuhan hidup, x, 15
フロア, フロア, Lantai, x, 15
服, ふく, Pakaian, x, 15
メンズ, メンズ, Pria, x, 15
紳士, しんし, Pria, x, 15
レディース, レディース, Wanita, x, 15
婦人, ふじん, Wanita, x, 15
食品, しょくひん, Makanan, x, 15
屋上駐車場, おくじょうちゅうしゃじょう, Parkir atap, x, 15
生活用品, せいかつようひん, Kebutuhan sehari-hari, x, 15
家電, かでん, Alat elektronik, x, 15
家具, かぐ, Mebel, x, 15
インテリア, インテリア, Interior, x, 15
おもちゃ, おもちゃ, Mainan, x, 15
文房具, ぶんぼうぐ, Alat tulis, x, 15
雑貨, ざっか, Barang serba-serbi, x, 15
肌着, はだぎ, Pakaian dalam, x, 15
靴, くつ, Sepatu, x, 15
バッグ, バッグ, Tas, x, 15
スポーツ用品, スポーツようひん, Perlengkapan olahraga, x, 15
服飾雑貨, ふくしょくざっか, Aksesori fesyen, x, 15
化粧品, けしょうひん, Kosmetik, x, 15
食料品, しょくりょうひん, Bahan makanan, x, 15
酒, さけ, Minuman keras, x, 15
銘店, めいてん, Toko terkenal, x, 15
ドライヤー, ドライヤー, Pengering rambut, x, 15
カメラ, カメラ, Kamera, x, 15
スマホケース, スマホケース, Casing HP, x, 15
延長コード, えんちょうコード, Kabel ekstensi, x, 15
何階, なんかい/なんがい, Lantai berapa, x, 15
こちら, こちら, Sebelah sini, x, 15
~でございます, ~でございます, ... (bentuk sopan です), x, 15
ご案内します/ご案内いたします, ごあんないします/ごあんないいたします, (Saya) akan antarkan, x, 15
~になります, ~になります, ... (bentuk sopan です), x, 15
1階, いっかい, Lantai 1, x, 15
2階, にかい, Lantai 2, x, 15
3階, さんかい/さんがい, Lantai 3, x, 15
4階, よんかい, Lantai 4, x, 15
5階, ごかい, Lantai 5, x, 15
6階, ろっかい, Lantai 6, x, 15
7階, ななかい, Lantai 7, x, 15
8階, はちかい/はっかい, Lantai 8, x, 15
9階, きゅうかい, Lantai 9, x, 15
10階, じゅっかい, Lantai 10, x, 15
かっこいい, かっこいい, Keren, x, 15
かわいい, かわいい, Lucu / Imut, x, 15
高い, たかい, Mahal, x, 15
安い, やすい, Murah, x, 15
おもしろい, おもしろい, Menarik, x, 15
きれい(な), きれい(な), Cantik / Indah, x, 15
すてき(な), すてき(な), Bagus / Menarik, x, 15
おしゃれ(な), おしゃれ(な), Modis, x, 15
変(な), へん(な), Aneh, x, 15
バッグ, バッグ, Tas, x, 15
かばん, かばん, Tas, x, 15
靴下, くつした, Kaus kaki, x, 15
シャツ, シャツ, Kemeja, x, 15
ズボン, ズボン/ズボン, Celana panjang, x, 15
パンツ, パンツ/パンツ, Celana panjang, x, 15
Tシャツ, ティーシャツ, Kaus, x, 15
ワンピース, ワンピース, Terusan (pakaian), x, 15
靴, くつ, Sepatu, x, 15
ネクタイ, ネクタイ, Dasi, x, 15
帽子, ぼうし, Topi, x, 15
傘, かさ, Payung, x, 15
ジャケット, ジャケット/ジャケット, Jaket, x, 15
コート, コート, Mantel, x, 15
それに, それに, Selain itu, x, 15
本当!, ほんとう!, Benar-benar!, x, 15
入口, いりぐち, Pintu masuk, x, 15
出口, でぐち, Pintu keluar, x, 15
化粧室, けしょうしつ, Toilet, x, 15
非常口, ひじょうぐち, Pintu darurat, x, 15
お客様, おきゃくさま, Pelanggan, x, 15
押す/押, おす, Dorong, x, 15
引く/引, ひく, Tarik, x, 15
開く/開, ひらく, Buka, x, 15
閉じる/閉, とじる, Tutup, x, 15
上り, のぼり, Naik, x, 15
下り, くだり, Turun, x, 15
`;