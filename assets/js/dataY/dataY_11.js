const dataString = `
バーベキュー, バーベキュー, Barbeku, y, 11
肉, にく, Daging, y, 11
牛肉, ぎゅうにく, Daging sapi, y, 11
豚肉, ぶたにく, Daging babi, y, 11
鶏肉, とりにく, Daging ayam, y, 11
ソーセージ, ソーセージ, Sosis, y, 11
シーフード, シーフード, Makanan laut, y, 11
魚, さかな, Ikan, y, 11
エビ, エビ, Udang, y, 11
イカ, イカ, Cumi-cumi, y, 11
ホタテ, ホタテ, Kerang, y, 11
りんご, りんご, Apel, y, 11
バナナ, バナナ, Pisang, y, 11
焼きそば, やきそば, Yakisoba, y, 11
おにぎり, おにぎり, Onigiri, y, 11
焼肉, やきにく, Yakiniku, y, 11
たれ, たれ, Saus (tare), y, 11
ソース, ソース, Saus, y, 11
お菓子, おかし, Makanan ringan, y, 11
ソフトドリンク, ソフトドリンク, Minuman ringan, y, 11
お茶, おちゃ, Teh, y, 11
ジュース, ジュース, Jus, y, 11
お酒, おさけ, Minuman beralkohol, y, 11
ビール, ビール, Bir, y, 11
ワイン, ワイン, Anggur (minuman), y, 11
日本酒, にほんしゅ, Sake, y, 11
焼酎, しょうちゅう, Shochu, y, 11
コップ, コップ, Gelas, y, 11
お皿, おさら, Piring, y, 11
わりばし, わりばし, Sumpit (sekali pakai), y, 11
ごみ袋, ごみぶくろ, Kantong sampah, y, 11
準備, じゅんび, Persiapan, y, 11
持って行く, もっていく/もっていく, Membawa (pergi), y, 11
手伝う, てつだう, Membantu, y, 11
飲み物, のみもの/のみもの, Minuman, y, 11
バーベキュー場, バーベキューじょう, Area barbeku, y, 11
デザート, デザート, Makanan penutup, y, 11
焼く, やく, Membakar / Memanggang, y, 11
からあげ, からあげ, Karaage (ayam goreng), y, 11
焼き鳥, やきとり, Yakitori, y, 11
塩, しお, Garam, y, 11
紅茶, こうちゃ, Teh (hitam), y, 11
ウーロン茶, ウーロンちゃ, Teh oolong, y, 11
チョコレートケーキ, チョコレートケーキ, Kue cokelat, y, 11
チーズケーキ, チーズケーキ, Kue keju, y, 11
どっち, どっち, Yang mana (dari 2), y, 11
どれ, どれ, Yang mana (dari 3+), y, 11
売る, うる, Menjual, y, 11
両方, りょうほう/りょうほう, Keduanya, y, 11
アレルギー, アレルギー, Alergi, y, 11
エビ, エビ, Udang, y, 11
カニ, カニ, Kepiting, y, 11
卵, たまご, Telur, y, 11
ピーナッツ, ピーナッツ, Kacang tanah, y, 11
落花生, らっかせい, Kacang tanah, y, 11
そば粉, そばこ, Tepung soba, y, 11
小麦, こむぎ, Gandum, y, 11
小麦粉, こむぎこ, Tepung terigu, y, 11
乳製品, にゅうせいひん, Produk susu, y, 11
牛乳, ぎゅうにゅう, Susu (sapi), y, 11
バター, バター, Mentega, y, 11
チーズ, チーズ, Keju, y, 11
ヨーグルト, ヨーグルト, Yoghurt, y, 11
材料, ざいりょう, Bahan, y, 11
ハラル, ハラル, Halal, y, 11
消費期限, しょうひきげん, Tanggal kedaluwarsa, y, 11
ピザ, ピザ, Pizza, y, 11
入っている, はいっている, Mengandung, y, 11
よかったら, よかったら, Kalau berkenan, y, 11
もつ, もつ, Tahan (lama), y, 11
今日中に, きょうじゅうに, Hari ini (sebelum berakhir), y, 11
コーナー, コーナー, Pojok / Bagian, y, 11
商品, しょうひん, Produk, y, 11
すべて, すべて, Semua, y, 11
レトルト, レトルト/レトルト, Retort (makanan kemasan), y, 11
乳成分, にゅうせいぶん, Komponen susu, y, 11
大豆, だいず, Kedelai, y, 11
名称, めいしょう, Nama, y, 11
原材料名, げんざいりょうめい, Nama bahan baku, y, 11
殺菌方法, さっきんほうほう, Metode sterilisasi, y, 11
内容量, ないようりょう, Isi bersih, y, 11
賞味期限, しょうみきげん, Baik digunakan sebelum, y, 11
保存方法, ほぞんほうほう, Cara penyimpanan, y, 11
販売者, はんばいしゃ, Penjual, y, 11
本品, ほんぴん, Produk ini, y, 11
含まれる, ふくまれる, Termasuk / Terkandung, y, 11
アレルギー物質, アレルギーぶっしつ, Bahan alergen, y, 11
おにぎり, おにぎり, Onigiri, y, 11
エビピラフ, エビピラフ, Nasi pilaf udang, y, 11
製造者, せいぞうしゃ, Produsen, y, 11
チョコレート, チョコレート, Cokelat, y, 11
~品目 (27品目), ~ひんもく (にじゅうななひんもく), ~ item (27 item), y, 11
`;