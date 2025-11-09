const dataString = `
おみこし, おみこし, Tandu (Dewa), z, 7
かつぐ, かつぐ, Memikul, z, 7
海岸, かいがん, Pantai, z, 7
ごみ, ごみ, Sampah, z, 7
拾う, ひろう, Memungut, z, 7
出る, でる, (Air) Mengalir / Keluar, z, 7
地震, じしん, Gempa bumi, z, 7
火事, かじ, Kebakaran, z, 7
訓練, くんれん, Latihan, z, 7
断水（する）, だんすい（する）, Air mati / Pasokan air terputus, z, 7
水道工事, すいどうこうじ, Perbaikan saluran air, z, 7
濁る, にごる, Menjadi keruh, z, 7
使用する, しようする, Menggunakan, z, 7
お知らせ, おしらせ, Pengumuman, z, 7
下記の通り, かきのとおり, Sebagai berikut, z, 7
しばらく, しばらく, Sebentar, z, 7
出す, だす, Mengeluarkan (air), z, 7
迷惑, めいわく, Ketidaknyamanan, z, 7
ご協力お願いいたします, ごきょうりょくおねがいいたします, Mohon kerja samanya., z, 7
防災, ぼうさい, Kesiapan bencana, z, 7
小学校, しょうがっこう, Sekolah dasar, z, 7
校庭, こうてい, Lapangan sekolah, z, 7
雨天, うてん, Cuaca hujan, z, 7
場合, ばあい, Jika / Dalam kasus, z, 7
内容, ないよう, Isi / Detail, z, 7
通報訓練, つうほうくんれん, Latihan melapor, z, 7
避難訓練, ひなんくんれん, Latihan evakuasi, z, 7
消火訓練, しょうかくうれん, Latihan pemadaman api, z, 7
AED訓練, エーイーディーくんれん, Latihan AED, z, 7
隣近所の人, となりきんじょのひと, Tetangga, z, 7
声をかけあう, こえをかけあう, Saling menyapa, z, 7
条件, じょうけん, Syarat / Kondisi, z, 7
運動靴, うんどうぐつ, Sepatu olahraga, z, 7
動きやすい, うごきやすい, Mudah bergerak, z, 7
はっぴ, はっぴ, Mantel Happi, z, 7
貸し出し, かしだし, Peminjaman / Rental, z, 7
希望, きぼう, Harapan / Keinginan, z, 7
申し込む, もうしこむ, Mendaftar, z, 7
集合, しゅうごう, Berkumpul, z, 7
ジーンズ, ジーンズ, Jins, z, 7
当日, とうじつ, Pada hari H, z, 7
おいでください, おいでください, Silakan datang., z, 7
延期する, えんきする, Menunda, z, 7
持ち物, もちもの, Barang bawaan, z, 7
汚れる, よごれる, Menjadi kotor, z, 7
軍手, ぐんて, Sarung tangan kerja, z, 7
～程度, ～ていど, Sekitar ～, z, 7
作業, さぎょう, Pekerjaan / Tugas, z, 7
世話役, せわやく, Fasilitator / Penyelenggara, z, 7
会, かい, Perkumpulan / Grup, z, 7
ガス, ガス, Gas, z, 7
点検, てんけん, Inspeksi / Pemeriksaan, z, 7
フリーマーケット, フリーマーケット, Pasar loak, z, 7
祭, まつり, Festival, z, 7
寄付, きふ, Donasi, z, 7
お願い, おねがい, Permintaan, z, 7
花火大会, はなびたいかい, Festival kembang api, z, 7
今月, こんげつ, Bulan ini, z, 7
来月, らいげつ, Bulan depan, z, 7
ポスト, ポスト, Kotak pos, z, 7
ガス会社, ガスがいしゃ, Perusahaan gas, z, 7
間, あいだ, Antara, z, 7
封筒, ふうとう, Amplop, z, 7
手紙, てがみ, Surat, z, 7
～だけ, ～だけ, Hanya ～, z, 7
中止, ちゅうし, Batal, z, 7
広場, ひろば, Alun-alun / Lapangan, z, 7
～回目, ～かいめ, Ke-～, z, 7
食器, しょっき, Alat makan, z, 7
おもちゃ, おもちゃ, Mainan, z, 7
コンサート, コンサート, Konser, z, 7
販売会, はんばいかい, Acara penjualan, z, 7
カラオケ大会, カラオケたいかい, Lomba karaoke, z, 7
ブラスバンド, ブラスバンド, Drimben, z, 7
演奏, えんそう, Penampilan musik, z, 7
踊り, おどり, Tarian, z, 7
練習, れんしゅう, Latihan, z, 7
道の駅, みちのえき, Michi-no-eki (Rest area), z, 7
公民館, こうみんかん, Balai warga, z, 7
市民センター, しみんセンター, Pusat kegiatan warga, z, 7
～において, ～において, Di ～, z, 7
開催する, かいさいする, Mengadakan, z, 7
入場券, にゅうじょうけん, Tiket masuk, z, 7
販売中, はんばいちゅう, Sedang dijual, z, 7
ピアノの夕べ, ピアノのゆうべ, Malam alunan piano, z, 7
および, および, Dan, z, 7
～からお知らせします, ～からおしらせします, Pengumuman dari ～., z, 7
皆様のご来場をお待ちしています, みなさまのごらいじょうをおまちしています, Kami menantikan kedatangan Anda., z, 7
明日, あす, Besok, z, 7
行う, おこなう, Melakukan, z, 7
見学（する）, けんがく（する）, Observasi / Melihat-lihat, z, 7
どなたでも, どなたでも, Siapa saja (sopan), z, 7
～からのお知らせです, ～からのおしらせです, Ini pengumuman dari ～., z, 7
お気軽にお越しください, おきがるにおこしください, Silakan mampir., z, 7
～について, ～について, Tentang ～, z, 7
本日, ほんじつ, Hari ini (formal), z, 7
開く, ひらく, Mengadakan / Membuka, z, 7
予定する, よていする, Dijadwalkan, z, 7
～についてお知らせします, ～についておしらせします, Mengumumkan tentang ～., z, 7
お誘い合わせの上、お出かけください, おさそいあわせのうえ、おでかけください, Silakan ajak teman/keluarga dan datang., z, 7
地元, じもと, Lokal / Setempat, z, 7
農家, のうか, Petani, z, 7
生産する, せいさんする, Memproduksi, z, 7
町役場, まちやくば, Balai kota (kecil), z, 7
盆踊り, ぼんおどり, Tarian Bon Odori, z, 7
輪になる, わになる, Membentuk lingkaran, z, 7
～に合わせて, ～にあわせて, Sesuai dengan ～, z, 7
だれでも, だれでも, Siapa saja, z, 7
～たち, ～たち, (Jamak untuk orang), z, 7
一人で, ひとりで, Sendirian, z, 7
`;