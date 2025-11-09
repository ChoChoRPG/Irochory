const dataString = `
症状, しょうじょう, Gejala, y, 15
のど, のど, Tenggorokan, y, 15
痛い, いたい, Sakit, y, 15
お腹, おなか, Perut, y, 15
熱, ねつ, Demam, y, 15
せき, せき, Batuk, y, 15
出る (せき/鼻水が出る), でる (せき/はなみずがでる), Keluar (batuk/ingus), y, 15
鼻水, はなみず/はなみず, Ingus, y, 15
吐き気, はきけ, Mual, y, 15
吐き気がする, はきけがする, Merasa mual, y, 15
食欲, しょくよく/しょくよく, Nafsu makan, y, 15
目, め, Mata, y, 15
かゆい, かゆい, Gatal, y, 15
足, あし, Kaki, y, 15
くじく, くじく, Terkilir, y, 15
頭, あたま, Kepala, y, 15
ぶつける, ぶつける, Terbentur, y, 15
おととい, おととい/おととい, Kemarin lusa, y, 15
転ぶ, ころぶ, Jatuh, y, 15
こう, こう, Begini, y, 15
レントゲン, レントゲン, Rontgen, y, 15
~週間(1週間), ~しゅうかん (いっしゅうかん), ~ minggu (1 minggu), y, 15
花粉症, かふんしょう, Alergi serbuk bunga, y, 15
どうしましたか?, どうしましたか?, Ada apa? / Kenapa?, y, 15
どうされましたか?, どうされましたか?, Ada apa? (sopan), y, 15
保険証, ほけんしょう, Kartu asuransi, y, 15
問診票, もんしんひょう, Formulir kuesioner medis, y, 15
薬, くすり, Obat, y, 15
飲む (薬を飲む), のむ (くすりをのむ), Minum (minum obat), y, 15
会う, あう, Bertemu, y, 15
やわらかい, やわらかい, Lembut, y, 15
辛い, からい, Pedas, y, 15
診察券, しんさつけん, Kartu registrasi (klinik), y, 15
処方せん, しょほうせん, Resep (obat), y, 15
記入する, きにゅうする, Mengisi (formulir), y, 15
医者, いしゃ, Dokter, y, 15
~度~分(38度5分), ~ど~ぶ (さんじゅうはちどごぶ), ~ derajat ~ (38,5 derajat), y, 15
口, くち, Mulut, y, 15
インフルエンザ, インフルエンザ, Influenza, y, 15
検査する, けんさする, Memeriksa, y, 15
A型, エーがた, Tipe A, y, 15
下がる (熱が下がる), さがる (ねつがさがる), Turun (demam turun), y, 15
おかゆ, おかゆ, Bubur (nasi), y, 15
薬局, やっきょく, Apotek, y, 15
もらう, もらう, Menerima, y, 15
お大事に, おだいじに, Semoga lekas sembuh., y, 15
お持ちですか?, おもちですか?, Apakah Anda membawa?, y, 15
フリガナ, フリガナ, Furigana, y, 15
性別, せいべつ, Jenis kelamin, y, 15
病気にかかる, びょうきにかかる, Jatuh sakit, y, 15
現在, げんざい, Saat ini, y, 15
女性, じょせい, Wanita, y, 15
妊娠する, にんしんする, Hamil, y, 15
記入例, きにゅうれい, Contoh pengisian, y, 15
記入日, きにゅうび, Tanggal pengisian, y, 15
大正/大, たいしょう, Taisho / T, y, 15
昭和/昭, しょうわ/しょうわ, Showa / S, y, 15
平成/平, へいせい, Heisei / H, y, 15
令和/令, れいわ, Reiwa / R, y, 15
~歳 (27歳), ~さい (にじゅうななさい), ~ tahun (umur 27), y, 15
今までに, いままでに, Sampai sekarang, y, 15
病気, びょうき, Penyakit, y, 15
病名, びょうめい, Nama penyakit, y, 15
~本(1本), ~ほん/ぽん/ぼん (いっぽん), ~ batang (1 batang), y, 15
~の方 (女性の方), ~のかた (じょせいのかた), (Orang) ~ (Wanita), y, 15
答える, こたえる/こたえる, Menjawab, y, 15
~週目 (10週目), ~しゅうめ (じゅっしゅうめ), Minggu ke-~ (Minggu ke-10), y, 15
お答えください, おこたえください, Silakan jawab., y, 15
下げる (熱を下げる), さげる (ねつをさげる), Menurunkan (menurunkan demam), y, 15
抑える, おさえる/おさえる, Menekan / Meredakan, y, 15
痛み止め, いたみどめ, Pereda nyeri, y, 15
くしゃみ, くしゃみ, Bersin, y, 15
つらい, つらい/つらい, Menderita / Berat, y, 15
がまんする, がまんする, Menahan, y, 15
がまんできない, がまんできない, Tidak tertahankan, y, 15
間をあける, あいだをあける, Memberi jeda, y, 15
~以上 (38度5分以上), ~いじょう (さんじゅうはちどごぶいじょう), ~ ke atas (38,5 derajat ke atas), y, 15
胃, い, Lambung, y, 15
守る, まもる, Melindungi, y, 15
運転する, うんてんする, Mengemudi, y, 15
食後, しょくご, Setelah makan, y, 15
眠い, ねむい/ねむい, Mengantuk, y, 15
解熱剤, げねつざい/げねつざい, Penurun demam, y, 15
熱が高い, ねつがたかい, Demam tinggi, y, 15
それと, それと, Dan, y, 15
こっち, こっち, Ini, y, 15
夕方/タ, ゆうがた, Sore, y, 15
寝る前/寝前, ねるまえ, Sebelum tidur, y, 15
用法, ようほう, Cara penggunaan, y, 15
用量, ようりょう, Dosis, y, 15
説明書, せつめいしょ/せつめいしょ, Buku petunjuk, y, 15
効能, こうのう, Khasiat, y, 15
注意事項, ちゅういじこう, Hal-hal yang perlu diperhatikan, y, 15
夕食後, ゆうしょくご, Setelah makan malam, y, 15
~錠(2錠), ~じょう (にじょう), ~ tablet (2 tablet), y, 15
~日分 (5日分), ~にちぶん (いつかぶん), Untuk ~ hari (Untuk 5 hari), y, 15
毎食後, まいしょくご, Setelah setiap makan, y, 15
`;