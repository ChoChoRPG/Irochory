const dataString = `
玄関, げんかん, Genkan (area pintu masuk), x, 7
お風呂, おふろ, Kamar mandi, x, 7
トイレ, トイレ, Toilet, x, 7
階段, かいだん, Tangga, x, 7
部屋, へや, Kamar, x, 7
ベランダ, ベランダ, Beranda, x, 7
バルコニー, バルコニー/バルコニー/バルコニー, Balkon, x, 7
台所, だいどころ, Dapur, x, 7
キッチン, キッチン, Dapur, x, 7
庭, にわ, Taman / Halaman, x, 7
居間, いま, Ruang keluarga, x, 7
リビング, リビング, Ruang keluarga, x, 7
1階, いっかい, Lantai 1, x, 7
2階, にかい, Lantai 2, x, 7
管理人室, かんりにんしつ, Ruang pengelola, x, 7
食堂, しょくどう, Kantin, x, 7
入る/入ります, はいる/はいります, Masuk, x, 7
靴, くつ, Sepatu, x, 7
脱ぐ/脱ぎます, ぬぐ/ぬぎます, Melepas, x, 7
ご飯, ごはん, Makanan, x, 7
入ってください, はいってください, Silakan masuk, x, 7
脱いでください, ぬいでください, Silakan lepas (sepatu), x, 7
お世話になります, おせわになります, Mohon bantuannya, x, 7
エアコン, エアコン, AC, x, 7
冷蔵庫, れいぞうこ, Kulkas, x, 7
電子レンジ, でんしレンジ, Microwave, x, 7
炊飯器, すいはんき, Penanak nasi, x, 7
トースター, トースター, Pemanggang roti, x, 7
ベッド, ベッド, Tempat tidur, x, 7
ふとん, ふとん, Futon (kasur Jepang), x, 7
テーブル, テーブル, Meja, x, 7
いす, いす, Kursi, x, 7
洗濯機, せんたくき, Mesin cuci, x, 7
テレビ, テレビ, TV, x, 7
Wi-Fi, ワイファイ, Wi-Fi, x, 7
みんなで, みんなで, Bersama-sama, x, 7
使う/使います, つかう/つかいます, Menggunakan, x, 7
ない, ない, Tidak ada, x, 7
使ってください, つかってください, Silakan gunakan, x, 7
広い, ひろい, Luas, x, 7
せまい, せまい, Sempit, x, 7
大きい, おおきい, Besar, x, 7
小さい, ちいさい, Kecil, x, 7
新しい, あたらしい, Baru, x, 7
古い, ふるい, Tua / Lama, x, 7
静か(な), しずか(な), Tenang / Sunyi, x, 7
うるさい, うるさい, Berisik, x, 7
きれい(な), きれい(な), Bersih / Cantik, x, 7
きたない, きたない, Kotor, x, 7
家, いえ, Rumah, x, 7
どう, どう, Bagaimana, x, 7
ちょっと, ちょっと, Sedikit, x, 7
とても, とても, Sangat, x, 7
うち, うち, Rumah (saya), x, 7
近く, ちかく, Dekat, x, 7
でも, でも, Tapi, x, 7
~区(南区), ~く (みなみく), Distrik ~ (Distrik Minami), x, 7
いいですね, いいですね, Bagus ya, x, 7
どう?, どう?, Bagaimana?, x, 7
ふーん, ふーん, Hmm..., x, 7
アパート, アパート, Apartemen, x, 7
マンション, マンション, Apartemen (mewah), x, 7
寮, りょう, Asrama, x, 7
シェアハウス, シェアハウス, Rumah (berbagi), x, 7
一戸建て, いっこだて, Rumah (terpisah), x, 7
お寺, おてら, Kuil (Buddha), x, 7
学校, がっこう, Sekolah, x, 7
公園, こうえん, Taman, x, 7
すごい, すごい, Hebat, x, 7
すごいですね, すごいですね, Hebat ya, x, 7
入れる/入, いれる, Nyala / ON, x, 7
切る/切, きる, Mati / OFF, x, 7
スタート, スタート, Mulai, x, 7
コース, コース, Mode, x, 7
電源, でんげん, Power, x, 7
一時停止, いちじていし/いちじていし, Jeda (Pause), x, 7
標準, ひょうじゅん, Standar, x, 7
おいそぎ, おいそぎ, Cepat (Quick wash), x, 7
手洗い, てあらい, Cuci (tangan), x, 7
毛布, もうふ, Selimut, x, 7
ドライ, ドライ, Halus (Dry), x, 7
槽洗浄, そうせんじょう, Cuci tabung, x, 7
予約, よやく, Timer, x, 7
残り, のこり, Sisa, x, 7
水量, すいりょう, Volume air, x, 7
冷房, れいぼう, Pendingin (Cool), x, 7
暖房, だんぼう, Pemanas (Heat), x, 7
除湿, じょしつ, Penurun kelembapan (Dry), x, 7
自動, じどう, Otomatis, x, 7
温度, おんど, Suhu, x, 7
風向, かざむき/ふうこう, Arah angin, x, 7
風量, ふうりょう/ふうりょう, Kecepatan angin, x, 7
停止, ていし, Berhenti (Stop), x, 7
タイマー, タイマー, Timer, x, 7
取消, とりけし, Batal, x, 7
`;