const dataString = `
色, いろ, Warna, z, 11
サイズ, サイズ, Ukuran, z, 11
赤, あか, Merah, z, 11
青, あお, Biru, z, 11
緑, みどり, Hijau, z, 11
黄色, きいろ, Kuning, z, 11
黒, くろ, Hitam, z, 11
白, しろ, Putih, z, 11
ベージュ, ベージュ, Krem, z, 11
ピンク, ピンク, Merah muda, z, 11
茶色, ちゃいろ, Cokelat, z, 11
グレー, グレー, Abu-abu, z, 11
カーキ, カーキ, Khaki, z, 11
S, エス, S (Kecil), z, 11
M, エム, M (Sedang), z, 11
L, エル, L (Besar), z, 11
XL, エックスエル, XL (Ekstra Besar), z, 11
フリー, フリー, Satu ukuran, z, 11
～cm, ～センチ, ～ cm, z, 11
ただいま, ただいま, Saat ini, z, 11
全品, ぜんぴん, Semua barang, z, 11
～％オフ, ～パーセントオフ, Diskon ～ %, z, 11
セーター, セーター, Sweter, z, 11
試着室, しちゃくしつ, Kamar pas, z, 11
派手（な）, はで（な）, Mencolok, z, 11
試着（する）, しちゃく（する）, Mencoba (pakaian), z, 11
よろしければ, よろしければ, Jika berkenan, z, 11
ごゆっくりごらんください, ごゆっくりごらんください, Silakan lihat-lihat dengan santai., z, 11
ご案内いたします, ごあんないいたします, Akan saya antarkan., z, 11
駐輪場, ちゅうりんじょう, Tempat parkir sepeda, z, 11
インフォメーション, インフォメーション, Pusat informasi, z, 11
フードコート, フードコート, Pujasera, z, 11
探す, さがす, Mencari, z, 11
レシート, レシート, Struk, z, 11
救急車, きゅうきゅうしゃ, Ambulans, z, 11
盗む, ぬすむ, Mencuri, z, 11
停める, とめる, Memarkir, z, 11
移動する, いどうする, Berpindah, z, 11
急に, きゅうに, Tiba-tiba, z, 11
ソファ, ソファ, Sofa, z, 11
さっき, さっき, Tadi, z, 11
もしかしたら, もしかしたら, Mungkin, z, 11
とる, とる, Mengambil / Mencuri, z, 11
ポイントカード, ポイントカード, Kartu poin, z, 11
スタンプ, スタンプ, Cap, z, 11
押す, おす, Menekan / Mengecap, z, 11
どうなさいましたか？, どうなさいましたか？, Ada yang bisa dibantu?, z, 11
お持ちください, おもちください, Silakan bawa., z, 11
警察, けいさつ, Polisi, z, 11
気分が悪い, きぶんがわるい, Merasa tidak enak badan, z, 11
会員証, かいいんしょう, Kartu anggota, z, 11
お書きください, おかきください, Silakan tulis., z, 11
どうなさいますか？, どうなさいますか？, Mau bagaimana?, z, 11
特徴, とくちょう, Ciri-ciri, z, 11
値段, ねだん, Harga, z, 11
機種, きしゅ, Model, z, 11
なくす, なくす, Menghilangkan, z, 11
届く, とどく, Diserahkan / Sampai, z, 11
スマートフォン／スマホ, スマートフォン／スマホ, Ponsel pintar, z, 11
カバー, カバー, Casing / Penutup, z, 11
ついている, ついている, Ada / Terpasang, z, 11
買い物する, かいものする, Berbelanja, z, 11
気づく, きづく, Menyadari, z, 11
そのような, そのような, Yang seperti itu, z, 11
つながる, つながる, Tersambung, z, 11
見つかる, みつかる, Ditemukan, z, 11
遺失物届, いしつぶつとどけ, Laporan kehilangan barang, z, 11
連絡をとる, れんらくをとる, Menghubungi, z, 11
お調べいたします, おしらべいたします, Akan saya periksa., z, 11
落とし物, おとしもの, Barang tertinggal, z, 11
案内, あんない, Informasi, z, 11
呼び出し, よびだし, Panggilan, z, 11
営業時間, えいぎょうじかん, Jam operasional, z, 11
セール, セール, Obral, z, 11
延長する, えんちょうする, Memperpanjang, z, 11
営業する, えいぎょうする, Beroperasi / Buka, z, 11
レストラン街, レストランがい, Area restoran, z, 11
開催中, かいさいちゅう, Sedang berlangsung, z, 11
通常どおり, つうじょうどおり, Seperti biasa, z, 11
くり返しご案内いたします, くりかえしごあんないいたします, Sekali lagi kami umumkan., z, 11
先ほど, さきほど, Tadi (formal), z, 11
婦人服, ふじんふく, Pakaian wanita, z, 11
～売り場, ～うりば, Area penjualan ～, z, 11
お買い上げ, おかいあげ, Pembelian, z, 11
恐れ入りますが, おそれいりますが, Maaf merepotkan, tapi..., z, 11
お呼び出しを申し上げます, およびだしをもうしあげます, Kami panggilkan (seseorang)., z, 11
お伝えしたいことがございます, おつたえしたいことがございます, Ada yang ingin kami sampaikan., z, 11
お越しください, おこしください, Silakan datang ke ～., z, 11
男性用, だんせいよう, Untuk pria, z, 11
かぎ, かぎ, Kunci, z, 11
心当たり, こころあたり, Ingat / Tahu, z, 11
インフォメーションカウンター, インフォメーションカウンター, Meja informasi, z, 11
～フェア, ～フェア, Pameran ～, z, 11
海の幸, うみのさち, Hasil laut, z, 11
スイーツ, スイーツ, Makanan manis (Sweets), z, 11
秋の味覚, あきのみかく, Cita rasa musim gugur, z, 11
～限り, ～かぎり, Hanya ～, z, 11
札幌, さっぽろ, Sapporo, z, 11
機会, きかい, Kesempatan, z, 11
ご来場を心からお待ちしております, ごらいじょうをこころからおまちしております, Kami tunggu kedatangan Anda., z, 11
`;