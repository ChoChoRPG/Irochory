const dataString = `
消す, けす, Mematikan (lampu), z, 15
忘れずに, わすれずに, Jangan lupa, z, 15
クールビズ, クールビズ, "Cool Biz", z, 15
実施中, じっしちゅう, Sedang diberlakukan, z, 15
軽装, けいそう, Pakaian ringan, z, 15
ノー～, ノー～, Tanpa ～, z, 15
設定, せってい, Pengaturan, z, 15
ご理解とご協力のほど、よろしくお願いします, ごりかいとごきょうりょくのほど、よろしくおねがいします, Mohon pengertian dan kerja samanya., z, 15
節電, せつでん, Hemat listrik, z, 15
両面印刷, りょうめんいんさつ, Cetak bolak-balik, z, 15
マイバッグ, マイバッグ, Tas (belanja) sendiri, z, 15
レジ袋, レジぶくろ, Kantong plastik, z, 15
有料化, ゆうりょうか, Menjadi berbayar, z, 15
持参, じさん, Membawa sendiri, z, 15
環境, かんきょう, Lingkungan, z, 15
エコ, エコ, Ramah lingkungan, z, 15
節電する, せつでんする, Menghemat listrik, z, 15
節水する, せっすいする, Menghemat air, z, 15
紙, かみ, Kertas, z, 15
節約する, せつやくする, Menghemat, z, 15
リサイクルする, リサイクルする, Mendaur ulang, z, 15
ごみ, ごみ, Sampah, z, 15
分別する, ぶんべつする, Memilah, z, 15
減らす, へらす, Mengurangi, z, 15
設定温度, せっていおんど, Suhu yang diatur, z, 15
下げる, さげる, Menurunkan, z, 15
もったいない, もったいない, Sayang (jika dibuang) / Boros, z, 15
缶, かん, Kaleng, z, 15
まとめる, まとめる, Mengumpulkan, z, 15
出す, だす, Mengeluarkan (air), z, 15
洗剤, せんざい, Deterjen, z, 15
止める, とめる, Menghentikan (air), z, 15
すすぐ, すすぐ, Membilas, z, 15
ストロー, ストロー, Sedotan, z, 15
マイ～, マイ～, ...pribadi, z, 15
持ち歩く, もちあるく, Membawa-bawa, z, 15
マイボトル, マイボトル, Botol (minum) sendiri, z, 15
ペットボトル, ペットボトル, Botol plastik, z, 15
資源, しげん, Sumber daya (dapat didaur ulang), z, 15
分け方, わけかた, Cara memilah, z, 15
出し方, だしかた, Cara membuang, z, 15
集積所, しゅうせきじょ, Tempat pengumpulan, z, 15
収集日, しゅうしゅうび, Hari pengumpulan, z, 15
資源ごみ, しげんごみ, Sampah daur ulang, z, 15
～種類, ～しゅるい, ～ jenis, z, 15
分ける, わける, Memisahkan, z, 15
ひも, ひも, Tali, z, 15
しばる, しばる, Mengikat, z, 15
新聞, しんぶん, Koran, z, 15
雑誌, ざっし, Majalah, z, 15
中身, なかみ, Isi, z, 15
びん, びん, Botol (kaca), z, 15
キャップ, キャップ, Tutup (botol plastik), z, 15
ラベル, ラベル, Label, z, 15
つぶす, つぶす, Meremukkan, z, 15
紙パック, かみパック, Karton (minuman), z, 15
切り開く, きりひらく, Membuka (dengan memotong), z, 15
食品トレイ, しょくひんトレイ, Nampan makanan, z, 15
可燃ごみ, かねんごみ, Sampah mudah terbakar, z, 15
生ごみ, なまごみ, Sampah dapur, z, 15
水を切る, みずをきる, Meniriskan air, z, 15
布, ぬの, Kain, z, 15
しみこませる, しみこませる, Meresapkan, z, 15
固める, かためる, Membekukan / Mengeraskan, z, 15
プラスチック, プラスチック, Plastik, z, 15
再生（する）, さいせい（する）, Mendaur ulang, z, 15
少量, しょうりょう, Jumlah sedikit, z, 15
植木, うえき, Tanaman pot, z, 15
枝, えだ, Ranting, z, 15
葉, は, Daun, z, 15
使い古し, つかいふるし, Bekas pakai, z, 15
凝固剤, ぎょうこざい, Bahan penggumpal, z, 15
ビニール, ビニール, Vinil / Plastik, z, 15
～類, ～るい, Jenis ～, z, 15
ラップ, ラップ, Plastik pembungkus, z, 15
容器, ようき, Wadah, z, 15
発泡スチロール, はっぽうスチロール, Styrofoam, z, 15
不燃ごみ, ふねんごみ, Sampah tidak mudah terbakar, z, 15
割れる, われる, Pecah, z, 15
包む, つつむ, Membungkus, z, 15
危険, きけん, Bahaya, z, 15
乾電池, かんでんち, Baterai kering, z, 15
刃物, はもの, Benda tajam, z, 15
ガラス, ガラス, Kaca, z, 15
陶磁器, とうじき, Keramik, z, 15
電球, でんきゅう, Bohlam, z, 15
アルミ製品, アルミせいひん, Produk aluminium, z, 15
金属, きんぞく, Logam, z, 15
家電製品, かでんせいひん, Produk elektronik, z, 15
粗大ごみ, そだいごみ, Sampah besar, z, 15
家具, かぐ, Mebel, z, 15
寝具, しんぐ, Peralatan tidur, z, 15
牛乳パック, ぎゅうにゅうパック, Karton susu, z, 15
使い切る, つかいきる, Menghabiskan, z, 15
燃える, もえる, Terbakar, z, 15
取る, とる, Melepas, z, 15
出す, だす, Membuang (sampah), z, 15
粗大ごみ受付センター, そだいごみうけつけセンター, Pusat penerimaan sampah besar, z, 15
大きさ, おおきさ, Ukuran, z, 15
シール, シール, Stiker, z, 15
貼る, はる, Menempelkan, z, 15
`;