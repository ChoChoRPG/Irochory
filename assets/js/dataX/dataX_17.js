const dataString = `
休み, やすみ, Libur, x, 17
運動する/運動します, うんどうする/うんどうします, Berolahraga, x, 17
服, ふく, Pakaian, x, 17
買う/買います, かう/かいます, Membeli, x, 17
飲みに行く/飲みに行きます, のみにいく/のみにいきます, Pergi minum, x, 17
家族, かぞく, Keluarga, x, 17
話す/話します, はなす/はなします, Berbicara, x, 17
コンサート, コンサート, Konser, x, 17
ゆっくりする/ゆっくりします, ゆっくりする/ゆっくりします, Bersantai, x, 17
掃除する/掃除します, そうじする/そうじします, Bersih-bersih, x, 17
寝る/寝ます, ねる/ねます, Tidur, x, 17
ジム, ジム, Gym, x, 17
週末, しゅうまつ, Akhir pekan, x, 17
オーケストラ, オーケストラ, Orkestra, x, 17
昨日, きのう/きのう, Kemarin, x, 17
土日, どにち, Sabtu-Minggu, x, 17
何も, なにも, Tidak (melakukan) apa-apa, x, 17
ネットで, ネットで, Melalui internet, x, 17
勉強, べんきょう, Belajar, x, 17
洗濯, せんたく, Mencuci baju, x, 17
掃除, そうじ, Bersih-bersih, x, 17
国際フェスティバル, こくさいフェスティバル, Festival internasional, x, 17
楽しい, たのしい, Menyenangkan, x, 17
おもしろい, おもしろい, Menarik, x, 17
いい, いい, Bagus, x, 17
まあまあ(な), まあまあ(な), Lumayan, x, 17
大変(な), たいへん(な), Berat / Sulit, x, 17
一日中, いちにちじゅう, Sepanjang hari, x, 17
どこにも, どこにも, Ke mana pun (tidak), x, 17
よかった(です), よかった(です), Bagus (lampau), x, 17
ゴジラ, ゴジラ, Godzilla, x, 17
すばらしい, すばらしい, Luar biasa, x, 17
つまらない, つまらない, Membosankan, x, 17
いまいち(な), いまいち(な), Kurang (bagus), x, 17
家族で, かぞくで, Bersama keluarga, x, 17
水族館, すいぞくかん, Akuarium, x, 17
ペンギン, ペンギン, Penguin, x, 17
そして, そして, Lalu, x, 17
クラゲ, クラゲ, Ubur-ubur, x, 17
気持ちいい, きもちいい, Menyenangkan / Nyaman, x, 17
コスモス, コスモス, Bunga kosmos, x, 17
花, はな, Bunga, x, 17
気持ちよかった(です), きもちよかった(です), Terasa menyenangkan (lampau), x, 17
多い, おおい, Banyak, x, 17
まだまだ, まだまだ, Masih, x, 17
元気(な), げんき(な), Sehat, x, 17
お祝い, おいわい, Perayaan, x, 17
寿司屋, すしや, Restoran sushi, x, 17
二人で, ふたりで, Berdua, x, 17
おいしい, おいしい/おいしい, Enak, x, 17
チケット, チケット/チケット, Tiket, x, 17
大人, おとな/だいにん, Dewasa, x, 17
高校生, こうこうせい, Siswa SMA, x, 17
小・中学生, しょう・ちゅうがくせい, Siswa SD-SMP, x, 17
発売中, はつばいちゅう, Sedang dijual, x, 17
入館券, にゅうかんけん, Tiket masuk, x, 17
一般, いっぱん, Umum, x, 17
大学生, だいがくせい, Mahasiswa, x, 17
中人, ちゅうにん, Pelajar (SMP/SMA), x, 17
小人, しょうにん, Anak-anak, x, 17
つり銭のお取り忘れに注意!, つりせんのおとりわすれにちゅうい!, Awas lupa ambil kembalian!, x, 17
料金, りょうきん, Biaya, x, 17
~歳以上 (十二歳以上), ~さいいじょう (じゅうにさいいじょう), ~ tahun ke atas (12 tahun ke atas), x, 17
古総湯, こそうゆ, Kosoyu (pemandian), x, 17
営業時間, えいぎょうじかん, Jam operasional, x, 17
休業日, きゅうぎょうび, Hari libur, x, 17
入浴, にゅうよく, Mandi, x, 17
毎月, まいつき, Setiap bulan, x, 17
第~▲曜日 (第四水曜日), だい~ようび (だいよんすいようび), Hari ~ ke- (Rabu ke-4), x, 17
正午, しょうご, Tengah hari, x, 17
食べ放題, たべほうだい, Makan sepuasnya, x, 17
飲み放題, のみほうだい, Minum sepuasnya, x, 17
~名様より (2名様より), ~めいさまより (にめいさまより), Dari ~ orang (Dari 2 orang), x, 17
お1人様, おひとりさま, Per orang, x, 17
プラス, プラス, Tambah, x, 17
全品, ぜんぴん, Semua barang, x, 17
~付き (飲み放題付き), ~つき (のみほうだいつき), Termasuk ~ (Termasuk minum sepuasnya), x, 17
パック, パック, Paket, x, 17
ブース, ブース/ブース, Bilik (Booth), x, 17
個室, こしつ, Ruang privat, x, 17
料金システム, りょうきんシステム, Sistem biaya, x, 17
基本料金, きほんりょうきん, Biaya dasar, x, 17
延長料金, えんちょうりょうきん, Biaya perpanjangan, x, 17
~毎に (10分毎に), ~ごとに (じゅっぷんごとに), Per ~ (Per 10 menit), x, 17
いつでも, いつでも/いつでも, Kapan saja, x, 17
ナイト, ナイト, Malam, x, 17
鍵付き, かぎつき, Dengan kunci, x, 17
席, せき, Kursi, x, 17
完全(な), かんぜん(な), Sepenuhnya, x, 17
着く/着きます, つく/つきます, Tiba, x, 17
はじめて, はじめて, Pertama kali, x, 17
また, また, Lagi, x, 17
着きました, つきました, Sudah tiba, x, 17
`;