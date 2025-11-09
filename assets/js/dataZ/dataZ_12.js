const dataString = `
電気製品, でんきせいひん, Produk elektronik, z, 12
冷蔵庫, れいぞうこ, Kulkas, z, 12
洗濯機, せんたくき, Mesin cuci, z, 12
電子レンジ, でんしレンジ, Microwave, z, 12
掃除機, そうじき, Penyedot debu, z, 12
ポット, ポット, Teko (listrik), z, 12
パソコン, パソコン, Komputer pribadi / Laptop, z, 12
タブレット, タブレット, Tablet, z, 12
イヤホン, イヤホン, Earphone, z, 12
扇風機, せんぷうき, Kipas angin, z, 12
ストーブ, ストーブ, Kompor (pemanas), z, 12
ヒーター, ヒーター, Pemanas, z, 12
ドライヤー, ドライヤー, Pengering rambut, z, 12
アイロン, アイロン, Setrika, z, 12
モデル, モデル, Model, z, 12
音, おと, Suara, z, 12
デザイン, デザイン, Desain, z, 12
商品, しょうひん, Produk, z, 12
送料, そうりょう, Ongkos kirim, z, 12
無料, むりょう, Gratis, z, 12
お店の人, おみせのひと, Pegawai toko, z, 12
相談（する）, そうだん（する）, Berkonsultasi, z, 12
届く, とどく, Terkirim / Sampai, z, 12
店員, てんいん, Pegawai toko, z, 12
便利（な）, べんり（な）, Praktis, z, 12
すぐ, すぐ, Segera, z, 12
見つかる, みつかる, Ditemukan, z, 12
高く, たかく, (Harga) Tinggi, z, 12
売れる, うれる, Terjual, z, 12
手続き, てつづき, Prosedur, z, 12
簡単（な）, かんたん（な）, Mudah, z, 12
メーカー, メーカー, Pabrikan, z, 12
ワイヤレス, ワイヤレス, Nirkabel, z, 12
手もと, てもと, Di tangan (saya), z, 12
電気屋, でんきや, Toko elektronik, z, 12
国道沿い, こくどうぞい, Sepanjang jalan nasional, z, 12
開店, かいてん, Pembukaan toko, z, 12
車を出す, くるまをだす, Memberi tumpangan, z, 12
フリマサイト, フリマサイト, Situs flea market, z, 12
家電, かでん, Peralatan rumah tangga, z, 12
カテゴリー, カテゴリー, Kategori, z, 12
ブランド, ブランド, Merek, z, 12
ホーム, ホーム, Beranda, z, 12
出品, しゅっぴん, (Barang) Dijual, z, 12
マイページ, マイページ, Halaman saya, z, 12
住まい, すまい, Untuk rumah, z, 12
絞り込み, しぼりこみ, Persempit (pencarian), z, 12
販売中, はんばいちゅう, Sedang dijual, z, 12
表示, ひょうじ, Tampilan, z, 12
～順, ～じゅん, Urutkan berdasarkan ～, z, 12
価格, かかく, Harga, z, 12
状態, じょうたい, Kondisi, z, 12
配送料, はいそうりょう, Biaya pengiriman, z, 12
販売状況, はんばいじょうきょう, Status penjualan, z, 12
指定する, していする, Menentukan, z, 12
取り消し, とりけし, Batal, z, 12
完了, かんりょう, Selesai, z, 12
購入（する）, こうにゅう（する）, Membeli, z, 12
傷, きず, Goresan / Luka, z, 12
汚れ, よごれ, Noda / Kotoran, z, 12
～込み, ～こみ, Termasuk ～, z, 12
～合, ～ごう, ～ go (satuan ukur beras), z, 12
出品する, しゅっぴんする, Menjual (di market), z, 12
問題なく, もんだいなく, Tanpa masalah, z, 12
炊ける, たける, (Nasi) Matang, z, 12
詳細, しょうさい, Detail, z, 12
～製, ～せい, Buatan ～, z, 12
幅, はば, Lebar, z, 12
奥行, おくゆき, Kedalaman, z, 12
高さ, たかさ, Tinggi, z, 12
重さ, おもさ, Berat, z, 12
説明書, せつめいしょ, Buku panduan, z, 12
～つき, ～つき, Dilengkapi ～, z, 12
購入手続き, こうにゅうてつづき, Prosedur pembelian, z, 12
重さ, おもさ, Berat, z, 12
連続, れんぞく, Berkelanjutan, z, 12
充電, じゅうでん, Mengisi daya, z, 12
しっかり, しっかり, Dengan baik, z, 12
使用時間, しようじかん, Waktu penggunaan, z, 12
こんな, こんな, Seperti ini, z, 12
モード, モード, Mode, z, 12
多機能, たきのう, Multifungsi, z, 12
長持ち, ながもち, Tahan lama, z, 12
超軽量, ちょうけいりょう, Super ringan, z, 12
お手入れ, おていれ, Perawatan, z, 12
吸引（する）, きゅういん（する）, (Daya) Hisap, z, 12
吸引力, きゅういんりょく, Kekuatan hisap, z, 12
コンパクト（な）, コンパクト（な）, Ringkas, z, 12
持ち運ぶ, もちはこぶ, Membawa, z, 12
重視する, じゅうしする, Mengutamakan, z, 12
すみずみ, すみずみ, Sudut-sudut, z, 12
税別, ぜいべつ, Sebelum pajak, z, 12
広告の品, こうこくのしな, Barang iklan, z, 12
特別価格, とくべつかかく, Harga spesial, z, 12
コードレス, コードレス, Nirkabel, z, 12
希望小売価格, きぼうこうりかかく, Harga eceran yang disarankan, z, 12
軽い, かるい, Ringan, z, 12
動かす, うごかす, Menggerakkan, z, 12
持つ, もつ, Membawa / Memiliki, z, 12
比べる, くらべる, Membandingkan, z, 12
パワフル（な）, パワフル（な）, Bertenaga, z, 12
機能, きのう, Fungsi, z, 12
つく, つく, Terdapat / Terpasang, z, 12
カーペット, カーペット, Karpet, z, 12
畳, たたみ, Tatami, z, 12
エコモード, エコモード, Mode hemat, z, 12
ですから, ですから, Makanya / Oleh karena itu, z, 12
～に合わせて, ～にあわせて, Menyesuaikan dengan ～, z, 12
複雑（な）, ふくざつ（な）, Rumit, z, 12
重い, おもい, Berat, z, 12
予算オーバー, よさんオーバー, Melebihi anggaran, z, 12
シンプル（な）, シンプル（な）, Sederhana, z, 12
消費税, しょうひぜい, Pajak konsumsi, z, 12
～抜き, ～ぬき, Tanpa ～, z, 12
～引き, ～びき, Diskon ～, z, 12
配送, はいそう, Pengiriman, z, 12
合わせて, あわせて, Totalnya, z, 12
ポイント, ポイント, Poin, z, 12
貯まる, たまる, Terkumpul, z, 12
変わる, かわる, Berubah, z, 12
安くなりますか？, やすくなりますか？, Apa bisa lebih murah?, z, 12
おいくらぐらいでお探しですか？, おいくらぐらいでおさがしですか？, Anda mencari di kisaran harga berapa?, z, 12
どちらにお住まいですか？, どちらにおすまいですか？, Anda tinggal di mana?, z, 12
ご利用になりますか？, ごりようになりますか？, Apakah Anda akan menggunakan...?, z, 12
`;