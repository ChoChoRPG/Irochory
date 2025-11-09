const dataString = `
今, いま, Sekarang, x, 9
何時, なんじ, Jam berapa, x, 9
朝, あさ, Pagi, x, 9
昼, ひる, Siang, x, 9
夜, よる, Malam, x, 9
午前, ごぜん, AM (Pagi), x, 9
午後, ごご, PM (Sore/Malam), x, 9
1時, いちじ, Jam 1, x, 9
2時, にじ, Jam 2, x, 9
3時, さんじ, Jam 3, x, 9
4時, よじ, Jam 4, x, 9
5時, ごじ, Jam 5, x, 9
6時, ろくじ, Jam 6, x, 9
7時, しちじ, Jam 7, x, 9
8時, はちじ, Jam 8, x, 9
9時, くじ, Jam 9, x, 9
10時, じゅうじ, Jam 10, x, 9
11時, じゅういちじ, Jam 11, x, 9
12時, じゅうにじ, Jam 12, x, 9
~分, ~ふん/ぷん, ~ menit, x, 9
15分, じゅうごふん, 15 menit, x, 9
30分, さんじゅっぷん, 30 menit, x, 9
45分, よんじゅうごふん, 45 menit, x, 9
半, はん, Setengah (jam), x, 9
起きる/起きます, おきる/おきます, Bangun, x, 9
寝る/寝ます, ねる/ねます, Tidur, x, 9
毎日, まいにち/まいにち, Setiap hari, x, 9
早い, はやい, Cepat / Pagi, x, 9
ええ, ええ, Ya, x, 9
毎朝, まいあさ/まいあさ, Setiap pagi, x, 9
ジョギング, ジョギング, Joging, x, 9
する/します, する/します, Melakukan, x, 9
だいたい, だいたい, Kira-kira, x, 9
~ごろ, ~ごろ, Sekitar ~, x, 9
遅い, おそい/おそい, Lambat / Larut, x, 9
ゲーム, ゲーム, Game, x, 9
早いですね, はやいですね, Pagi ya, x, 9
遅いですね, おそいですね, Larut ya, x, 9
お祈り, おいのり, Doa / Ibadah, x, 9
勉強する/勉強します, べんきょうする/べんきょうします, Belajar, x, 9
音楽, おんがく, Musik, x, 9
聞く/聞きます, きく/ききます, Mendengar, x, 9
ネット, ネット, Internet, x, 9
見る/見ます, みる/みます, Melihat, x, 9
朝礼, ちょうれい, Apel pagi, x, 9
仕事, しごと, Kerja, x, 9
昼休み, ひるやすみ, Istirahat siang, x, 9
休み時間, やすみじかん, Jam istirahat, x, 9
残業, ざんぎょう, Lembur, x, 9
はじめに, はじめに, Pertama-tama, x, 9
ときどき, ときどき, Kadang-kadang, x, 9
1日, いちにち, Satu hari, x, 9
スケジュール, スケジュール, Jadwal, x, 9
説明する/説明します, せつめいする/せつめいします, Menjelaskan, x, 9
在, ざい, Ada, x, 9
不在, ふざい, Tidak ada, x, 9
遅刻, ちこく, Terlambat, x, 9
休み, やすみ, Libur, x, 9
外出, がいしゅつ, Keluar (kantor), x, 9
早退, そうたい, Pulang cepat, x, 9
行動, こうどう, Kegiatan, x, 9
予定表, よていひょう, Papan jadwal, x, 9
氏名, しめい, Nama, x, 9
銀行, ぎんこう, Bank, x, 9
何曜日, なんようび, Hari apa, x, 9
月曜日/月, げつようび/げつ, Hari Senin, x, 9
火曜日/火, かようび/か, Hari Selasa, x, 9
水曜日/水, すいようび/すい, Hari Rabu, x, 9
木曜日/木, もくようび/もく, Hari Kamis, x, 9
金曜日/金, きんようび/きん, Hari Jumat, x, 9
土曜日/土, どようび/ど, Hari Sabtu, x, 9
日曜日/日, にちようび/にち, Hari Minggu, x, 9
プール, プール, Kolam renang, x, 9
ご飯, ごはん, Makanan, x, 9
映画, えいが/えいが, Film, x, 9
いつ, いつ, Kapan, x, 9
行く/行きます, いく/いきます, Pergi, x, 9
いい, いい, Bagus / Boleh, x, 9
だいじょうぶ(な), だいじょうぶ(な), Tidak apa-apa, x, 9
だめ(な), だめ(な), Tidak boleh / Tidak bisa, x, 9
~にしましょう, ~にしましょう, Ayo (kita lakukan) di ~, x, 9
`;