const dataString = `
夏祭り, なつまつり, Festival musim panas, x, 12
会場, かいじょう, Tempat (acara), x, 12
イベント, イベント, Acara, x, 12
広場, ひろば, Alun-alun / Lapangan, x, 12
食べ物, たべもの/たべもの, Makanan, x, 12
飲み物, のみもの/のみもの, Minuman, x, 12
ステージ, ステージ, Panggung, x, 12
縁日, えんにち, Festival (kuil), x, 12
文化センター, ぶんかセンター, Pusat kebudayaan, x, 12
野外, やがい, Luar ruangan, x, 12
入場料, にゅうじょうりょう, Biaya masuk, x, 12
~円, ~えん, ~ Yen, x, 12
場所, ばしょ, Tempat, x, 12
ホール, ホール, Aula, x, 12
映画上映会, えいがじょうえいかい, Pemutaran film, x, 12
プログラム, プログラム, Program, x, 12
上映作品, じょうえいさくひん, Film yang ditayangkan, x, 12
お問い合わせ, おといあわせ, Informasi, x, 12
楽しもう!, たのしもう!, Ayo nikmati!, x, 12
交流, こうりゅう, Pertukaran, x, 12
バーベキュー, バーベキュー, Barbeku, x, 12
日時, にちじ, Tanggal dan waktu, x, 12
駐車場, ちゅうしゃじょう, Tempat parkir, x, 12
あおぞら, あおぞら, Langit biru, x, 12
問い合わせ先, といあわせさき, Kontak informasi, x, 12
日本語ボランティア教室, にほんごボランティアきょうしつ, Kelas sukarelawan bahasa Jepang, x, 12
フェスティバル, フェスティバル, Festival, x, 12
入場無料, にゅうじょうむりょう, Masuk gratis, x, 12
1月, いちがつ, Januari, x, 12
2月, にがつ, Februari, x, 12
3月, さんがつ, Maret, x, 12
4月, しがつ, April, x, 12
5月, ごがつ, Mei, x, 12
6月, ろくがつ, Juni, x, 12
7月, しちがつ, Juli, x, 12
8月, はちがつ, Agustus, x, 12
9月, くがつ, September, x, 12
10月, じゅうがつ, Oktober, x, 12
11月, じゅういちがつ, November, x, 12
12月, じゅうにがつ, Desember, x, 12
何月, なんがつ, Bulan apa, x, 12
1日, ついたち, Tanggal 1, x, 12
2日, ふつか, Tanggal 2, x, 12
3日, みっか, Tanggal 3, x, 12
4日, よっか, Tanggal 4, x, 12
5日, いつか, Tanggal 5, x, 12
6日, むいか, Tanggal 6, x, 12
7日, なのか, Tanggal 7, x, 12
8日, ようか, Tanggal 8, x, 12
9日, ここのか, Tanggal 9, x, 12
10日, とおか, Tanggal 10, x, 12
11日, じゅういちにち, Tanggal 11, x, 12
12日, じゅうににち, Tanggal 12, x, 12
13日, じゅうさんにち, Tanggal 13, x, 12
14日, じゅうよっか, Tanggal 14, x, 12
15日, じゅうごにち, Tanggal 15, x, 12
16日, じゅうろくにち, Tanggal 16, x, 12
17日, じゅうしちにち, Tanggal 17, x, 12
18日, じゅうはちにち, Tanggal 18, x, 12
19日, じゅうくにち, Tanggal 19, x, 12
20日, はつか, Tanggal 20, x, 12
21日, にじゅういちにち, Tanggal 21, x, 12
22日, にじゅうににち, Tanggal 22, x, 12
23日, にじゅうさんにち, Tanggal 23, x, 12
24日, にじゅうよっか, Tanggal 24, x, 12
25日, にじゅうごにち, Tanggal 25, x, 12
26日, にじゅうろくにち, Tanggal 26, x, 12
27日, にじゅうしちにち, Tanggal 27, x, 12
28日, にじゅうはちにち, Tanggal 28, x, 12
29日, にじゅうくにち, Tanggal 29, x, 12
30日, さんじゅうにち, Tanggal 30, x, 12
31日, さんじゅういちにち, Tanggal 31, x, 12
何日, なんにち, Tanggal berapa, x, 12
今日, きょう, Hari ini, x, 12
明日, あした, Besok, x, 12
あさって, あさって, Lusa, x, 12
今週, こんしゅう, Minggu ini, x, 12
来週, らいしゅう, Minggu depan, x, 12
パーティー, パーティー, Pesta, x, 12
空手, からて, Karate, x, 12
試合, しあい, Pertandingan, x, 12
忘年会, ぼうねんかい/ぼうねんかい, Pesta akhir tahun, x, 12
もちろん, もちろん, Tentu saja, x, 12
楽しみですね, たのしみですね, Menyenangkan ya, x, 12
そうですね, そうですね, Iya ya, x, 12
まだわかりません, まだわかりません, Masih belum tahu, x, 12
残念です, ざんねんです, Sayang sekali, x, 12
焼肉, やきにく, Yakiniku (daging panggang), x, 12
ハイキング, ハイキング, Mendaki (Hiking), x, 12
飲み会, のみかい, Pesta minum, x, 12
いっしょに, いっしょに, Bersama-sama, x, 12
今度, こんど, Lain kali / Kali ini, x, 12
今晩, こんばん, Nanti malam, x, 12
また今度, またこんど, Lain kali saja, x, 12
男はつらいよ, おとこはつらいよ, Otoko wa Tsurai yo, x, 12
いいね!, いいね!, Bagus!, x, 12
残念, ざんねん, Sayang sekali, x, 12
了解, りょうかい, Oke / Mengerti, x, 12
ぐすん, ぐすん, (Suara tangis), x, 12
`;