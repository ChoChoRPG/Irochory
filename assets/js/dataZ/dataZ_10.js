const dataString = `
葬式, そうしき, Pemakaman, z, 10
スーツ, スーツ, Setelan (jas), z, 10
暗い, くらい, Gelap, z, 10
地味（な）, じみ（な）, Sederhana / Polos, z, 10
ジャケット, ジャケット, Jaket, z, 10
香典, こうでん, Uang belasungkawa, z, 10
香典袋, こうでんぶくろ, Amplop uang belasungkawa, z, 10
～用, ～よう, Untuk ～, z, 10
披露宴, ひろうえん, Resepsi (pernikahan), z, 10
招待状, しょうたいじょう, Surat undangan, z, 10
だったら, だったら, Kalau begitu, z, 10
カジュアル（な）, カジュアル（な）, Kasual, z, 10
感じ, かんじ, Kesan / Penampilan, z, 10
白, しろ, Putih, z, 10
花嫁, はなよめ, Mempelai wanita, z, 10
見舞い, みまい, Menjenguk (orang sakit), z, 10
同僚, どうりょう, Rekan kerja, z, 10
骨, ほね, Tulang, z, 10
折る, おる, Mematahkan (tulang), z, 10
入院する, にゅういんする, Masuk rumah sakit, z, 10
鉢植え, はちうえ, Tanaman pot, z, 10
イメージ, イメージ, Citra / Gambaran, z, 10
花束, はなたば, Buket bunga, z, 10
本人, ほんにん, Orangnya (yang bersangkutan), z, 10
まあ, まあ, Wah!, z, 10
あら, あら, Oh!, z, 10
どうすればいいですか？, どうすればいいですか？, Sebaiknya saya bagaimana?, z, 10
新築祝い, しんちくいわい, Hadiah pindah rumah baru, z, 10
習慣, しゅうかん, Kebiasaan / Adat, z, 10
全員, ぜんいん, Semua orang, z, 10
くり返す, くりかえす, Mengulang, z, 10
オトーリ, オトーリ, Otoori, z, 10
待つ, まつ, Menunggu, z, 10
流す, ながす, Menyiram (flush), z, 10
ごみ箱, ごみばこ, Tempat sampah, z, 10
捨てる, すてる, Membuang, z, 10
電話, でんわ, Telepon, z, 10
片づける, かたづける, Membereskan, z, 10
掃除の人, そうじのひと, Petugas kebersihan, z, 10
不思議（な）, ふしぎ（な）, Aneh, z, 10
めんどくさい, めんどくさい, Merepotkan, z, 10
まじめ（な）, まじめ（な）, Serius, z, 10
まねをする, まねをする, Meniru, z, 10
ルール, ルール, Aturan, z, 10
守る, まもる, Mematuhi (aturan), z, 10
貼り紙, はりがみ, Tanda / Pengumuman tempel, z, 10
もちろん, もちろん, Tentu saja, z, 10
つまる, つまる, Tersumbat, z, 10
それじゃあ, それじゃあ, Kalau begitu, z, 10
臭い, くさい, Bau, z, 10
普通に, ふつうに, Secara normal / Biasa saja, z, 10
うるさい, うるさい, Berisik, z, 10
～終わる, ～おわる, Selesai ～, z, 10
席, せき, Kursi, z, 10
確かにねえ, たしかにねえ, Benar juga ya., z, 10
どうしてかなあ, どうしてかなあ, Kenapa ya?, z, 10
～かな？, ～かな？, ...ya?, z, 10
のどが渇く, のどがかわく, Haus, z, 10
かご, かご, Keranjang, z, 10
空, から, Kosong, z, 10
ボトル, ボトル, Botol, z, 10
そうしたら, そうしたら, Lalu / Setelah itu, z, 10
怒る, おこる, Marah, z, 10
ちゃんと, ちゃんと, Dengan benar, z, 10
店長, てんちょう, Manajer toko, z, 10
泥棒, どろぼう, Pencuri, z, 10
イメージ, イメージ, Kesan / Citra, z, 10
袋, ふくろ, Kantong, z, 10
あとから, あとから, Belakangan, z, 10
どうしたの？, どうしたの？, Ada apa?, z, 10
そうなの？, そうなの？, Oh ya?, z, 10
そうかなあ, そうかなあ, Masa sih?, z, 10
だんだん, だんだん, Berangsur-angsur, z, 10
気に入る, きにいる, Mulai suka, z, 10
直接, ちょくせつ, Langsung, z, 10
～杯, ～はい, ～ gelas/cangkir, z, 10
お金を取る, おかねをとる, Memungut biaya, z, 10
ひどい, ひどい, Parah / Kejam, z, 10
信じられない, しんじられない, Tidak bisa dipercaya, z, 10
信じる, しんじる, Percaya, z, 10
チップ, チップ, Tip (uang), z, 10
マナー, マナー, Tata krama, z, 10
ズズズズ, ズズズズ, Sluurp, z, 10
音を立てる, おとをたてる, Menimbulkan suara, z, 10
どんぶり, どんぶり, Mangkuk (besar), z, 10
持ち上げる, もちあげる, Mengangkat, z, 10
口を付ける, くちをつける, Menempelkan ke mulut, z, 10
嫌（な）, いや（な）, Tidak suka / Menjijikkan, z, 10
何杯でも, なんばいでも, Berapa gelas pun, z, 10
おかわり, おかわり, Isi ulang / Tambah, z, 10
おしぼり, おしぼり, Handuk basah (oshibori), z, 10
テーブルチャージ, テーブルチャージ, Biaya meja (cover charge), z, 10
しかも, しかも, Terlebih lagi, z, 10
こういう, こういう, Yang seperti ini, z, 10
ごちそうさま, ごちそうさま, Terima kasih (setelah makan), z, 10
どちらでもない, どちらでもない, Bukan keduanya, z, 10
`;