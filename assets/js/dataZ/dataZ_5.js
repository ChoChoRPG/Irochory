const dataString = `
自然, しぜん, Alam, z, 5
豊か（な）, ゆたか（な）, Kaya / Berlimpah, z, 5
暖かい, あたたかい, Hangat, z, 5
込んでいる, こんでいる, Ramai / Penuh sesak, z, 5
遊ぶ, あそぶ, Bermain / Bersenang-senang, z, 5
海外, かいがい, Luar negeri, z, 5
観光客, かんこうきゃく, Wisatawan, z, 5
人気がある, にんきがある, Populer, z, 5
北海道, ほっかいどう, Hokkaido, z, 5
沖縄, おきなわ, Okinawa, z, 5
一日中, いちにちじゅう, Sepanjang hari, z, 5
新鮮（な）, しんせん（な）, Segar, z, 5
ウニ, ウニ, Bulu babi, z, 5
シュノーケリング, シュノーケリング, Snorkeling, z, 5
番組, ばんぐみ, Program (TV/radio), z, 5
いつか, いつか, Suatu hari nanti, z, 5
やっぱり, やっぱり, Ternyata / Seperti diduga, z, 5
ラッシュ, ラッシュ, Jam sibuk, z, 5
水族館, すいぞくかん, Akuarium, z, 5
ボート, ボート, Perahu, z, 5
サイクリング, サイクリング, Bersepeda, z, 5
遊園地, ゆうえんち, Taman hiburan, z, 5
温泉, おんせん, Pemandian air panas, z, 5
行き先, いきさき, Tujuan, z, 5
湖, みずうみ, Danau, z, 5
レンタサイクル, レンタサイクル, Rental sepeda, z, 5
先輩, せんぱい, Senior, z, 5
出発する, しゅっぱつする, Berangkat, z, 5
ごめんなさい, ごめんなさい, Maaf., z, 5
旅行, りょこう, Perjalanan / Wisata, z, 5
泊まる, とまる, Menginap, z, 5
ホテル, ホテル, Hotel, z, 5
旅館, りょかん, Penginapan (Jepang), z, 5
民宿, みんしゅく, Penginapan (rumah warga), z, 5
交通手段, こうつうしゅだん, Alat transportasi, z, 5
バス, バス, Bus, z, 5
電車, でんしゃ, Kereta, z, 5
船, ふね, Kapal, z, 5
飛行機, ひこうき, Pesawat terbang, z, 5
車, くるま, Mobil, z, 5
準備する, じゅんびする, Mempersiapkan, z, 5
スキー板, スキーいた, Papan ski, z, 5
スキーウェア, スキーウェア, Pakaian ski, z, 5
手袋, てぶくろ, Sarung tangan, z, 5
サングラス, サングラス, Kacamata hitam, z, 5
水着, みずぎ, Pakaian renang, z, 5
日光, にっこう, Nikko, z, 5
紅葉, こうよう, Momiji (daun musim gugur), z, 5
かなり, かなり, Cukup, z, 5
厚い, あつい, Tebal, z, 5
上着, うわぎ, Jaket / Pakaian luar, z, 5
奈良, なら, Nara, z, 5
小さな, ちいさな, Kecil, z, 5
宿, やど, Penginapan, z, 5
時期, じき, Musim / Waktu, z, 5
込む, こむ, Ramai / Penuh, z, 5
計画, けいかく, Rencana, z, 5
立てる, たてる, Membuat (rencana), z, 5
調べる, しらべる, Mencari tahu / Memeriksa, z, 5
富山, とやま, Toyama, z, 5
くわしい, くわしい, Detail / Tahu betul, z, 5
回転ずし, かいてんずし, Sushi putar, z, 5
並ぶ, ならぶ, Mengantre / Berbaris, z, 5
長野, ながの, Nagano, z, 5
日焼けする, ひやけする, Terbakar matahari, z, 5
スキー, スキー, Ski, z, 5
スキー場, スキーじょう, Resor ski, z, 5
こっち, こっち, Sini, z, 5
撮る, とる, Mengambil (foto/video), z, 5
オルゴール, オルゴール, Kotak musik, z, 5
美術館, びじゅつかん, Museum seni, z, 5
ロープウェイ, ロープウェイ, Kereta gantung, z, 5
湖, みずうみ, Danau, z, 5
そば, そば, Di samping ～, z, 5
露天風呂, ろてんぶろ, Pemandian (terbuka), z, 5
日帰り, ひがえり, Pergi pulang hari, z, 5
まったく～ない, まったく～ない, Sama sekali tidak ～, z, 5
寄る, よる, Mampir, z, 5
意外に, いがいに, Ternyata, z, 5
楽しむ, たのしむ, Menikmati, z, 5
宿泊, しゅくはく, Akomodasi / Penginapan, z, 5
観光, かんこう, Wisata / Tamasya, z, 5
グルメ, グルメ, Kuliner, z, 5
旅券, りょけん, Tiket transportasi, z, 5
口コミ, くちコミ, Ulasan / Dari mulut ke mulut, z, 5
投稿する, とうこうする, Memposting, z, 5
～のまわり, ～のまわり, Di sekitar ～, z, 5
帰り, かえり, Saat pulang, z, 5
`;