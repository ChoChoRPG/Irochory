const dataString = `
ハンバーガー, ハンバーガー, Hamburger, x, 6
~バーガー (ダブルバーガー), ~バーガー (ダブルバーガー), ~ Burger (cth: Burger dobel), x, 6
ダブル, ダブル, Dobel, x, 6
チーズ, チーズ, Keju, x, 6
てりやき, てりやき, Teriyaki, x, 6
チキン, チキン, Ayam, x, 6
フィッシュ, フィッシュ, Ikan, x, 6
単品, たんぴん, Satuan, x, 6
セット, セット, Set (Paket), x, 6
フライドポテト, フライドポテト, Kentang goreng, x, 6
S, エス, S (Kecil), x, 6
M, エム, M (Sedang), x, 6
L, エル, L (Besar), x, 6
デザート, デザート, Makanan penutup, x, 6
アイスクリーム, アイスクリーム, Es krim, x, 6
アップルパイ, アップルパイ, Pai apel, x, 6
ドリンク, ドリンク/ドリンク, Minuman, x, 6
ホットコーヒー, ホットコーヒー/ホットコーヒー, Kopi panas, x, 6
アイスコーヒー, アイスコーヒー/アイスコーヒー, Es kopi, x, 6
ウーロン茶, ウーロンちゃ, Teh oolong, x, 6
コカ・コーラ, コカ・コーラ, Coca-Cola, x, 6
サイズ, サイズ/サイズ, Ukuran, x, 6
~ください, ~ください, Minta ~, x, 6
テイクアウトで, テイクアウトで, Bawa pulang, x, 6
ここで, ここで, Makan di sini, x, 6
いらっしゃいませ, いらっしゃいませ, Selamat datang, x, 6
おうかがいします, おうかがいします, (Saya) catat pesanannya, x, 6
こちらでおめしあがりですか?, こちらでおめしあがりですか?, Makan di sini?, x, 6
お持ち帰りですね, おもちかえりですね, Bawa pulang ya, x, 6
何になさいますか?, なにになさいますか?, Mau pesan apa?, x, 6
~にします, ~にします, Saya pilih ~, x, 6
うーん, うーん, Hmm..., x, 6
ここ、いいですか?, ここ、いいですか?, Boleh duduk sini?, x, 6
どうですか?, どうですか?, Bagaimana?, x, 6
おいしいです, おいしいです, Enak, x, 6
刺身, さしみ, Sashimi, x, 6
唐揚げ, からあげ, Karaage (Ayam goreng), x, 6
焼き鳥/焼鳥, やきとり, Yakitori, x, 6
枝豆, えだまめ, Edamame, x, 6
生ビール, なまビール, Bir (draft), x, 6
メニュー, メニュー, Menu, x, 6
お魚, おさかな, Ikan, x, 6
盛り合わせ, もりあわせ, Campur (bermacam-macam), x, 6
~盛(7点盛), ~てんもり (ななてんもり), ~ set (set 7 macam), x, 6
焼魚, やきざかな, Ikan bakar, x, 6
お肉, おにく, Daging, x, 6
鶏, とり, Ayam, x, 6
サイコロステーキ, サイコロステーキ, Steak dadu, x, 6
特製つくね, とくせいつくね, Tsukune (bakso) spesial, x, 6
馬刺, ばさし, Basashi (sashimi kuda), x, 6
おつまみ, おつまみ, Camilan, x, 6
冷奴, ひややっこ, Tahu dingin, x, 6
冷やしトマト, ひやしトマト, Tomat dingin, x, 6
たこわさ, たこわさ, Takowasa, x, 6
しおから, しおから/しおから, Shiokara, x, 6
日本酒, にほんしゅ, Sake, x, 6
焼酎, しょうちゅう, Shochu, x, 6
酎ハイ, ちゅうハイ, Chu-hi, x, 6
レモンハイ, レモンハイ, Lemon-hi, x, 6
ウーロンハイ, ウーロンハイ, Oolong-hi, x, 6
緑茶ハイ, りょくちゃハイ, Ryokucha-hi, x, 6
カルピスハイ, カルピス・ハイ, Calpis-hi, x, 6
ソフトドリンク, ソフトドリンク, Minuman ringan, x, 6
緑茶, りょくちゃ, Teh hijau, x, 6
カルピス, カルピス, Calpis, x, 6
お問い合わせください, おといあわせください, Silakan bertanya, x, 6
あと, あと, Dan / Lalu, x, 6
マヨネーズ, マヨネーズ, Mayones, x, 6
ある/あります, ある/あります, Ada, x, 6
すみません, すみません, Permisi, x, 6
お持ちします, おもちします, (Saya) akan bawakan, x, 6
1つ, ひとつ, Satu, x, 6
2つ, ふたつ, Dua, x, 6
3つ, みっつ, Tiga, x, 6
4つ, よっつ, Empat, x, 6
5つ, いつつ, Lima, x, 6
6つ, むっつ, Enam, x, 6
7つ, ななつ, Tujuh, x, 6
8つ, やっつ, Delapan, x, 6
9つ, ここのつ, Sembilan, x, 6
いくつ, いくつ, Berapa buah, x, 6
ケチャップ, ケチャップ/ケチャップ, Saus tomat, x, 6
スプーン, スプーン, Sendok, x, 6
おしぼり, おしぼり, Handuk basah (oshibori), x, 6
取り皿, とりざら, Piring kecil, x, 6
グラス, グラス, Gelas, x, 6
はし/おはし, はし/おはし, Sumpit, x, 6
居酒屋, いざかや, Izakaya (pub Jepang), x, 6
すし, すし, Sushi, x, 6
そば, そば, Soba, x, 6
うどん, うどん, Udon, x, 6
ラーメン, ラーメン, Ramen, x, 6
カレー, カレー, Kari, x, 6
牛丼, ぎゅうどん, Gyudon (Nasi daging sapi), x, 6
`;