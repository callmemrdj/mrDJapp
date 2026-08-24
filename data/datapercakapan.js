// ============================================================
// DATA: setiap topik percakapan berisi:
//  - topik   : judul yang tampil di daftar
//  - audio   : URL mp3 (boleh dari domain lain / server luar)
//  - dialog  : array baris percakapan { speaker: 'A' | 'B', text: '...' }
// Tinggal tambah objek baru dengan format yang sama untuk topik lain.
// ============================================================

const percakapanData = [
  {
    id: 1,
    topik: '<ruby>何時<rt>なんじ</rt></ruby>にどこですか',
    tema: 'Jam berapa, di mana?',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-01]_kiku1.mp3',
    dialog: [
      { speaker: 'A', text: 'すみません。<ruby>明日<rt>あした</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>にどこですか？' },
      { speaker: 'B', text: '<ruby>明日<rt>あした</rt></ruby>は、<ruby>朝<rt>あさ</rt></ruby>8<ruby>時<rt>じ</rt></ruby>に<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>門<rt>もん</rt></ruby>の<ruby>前<rt>まえ</rt></ruby><ruby>集合<rt>しゅうごう</rt></ruby>ね。' },
      { speaker: 'A', text: 'わかりました。8<ruby>時<rt>じ</rt></ruby>に<ruby>門<rt>もん</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>ですね。' },
      { speaker: 'B', text: 'じゃあ、また<ruby>明日<rt>あした</rt></ruby>。' },
    ],
    arti: 'A: Maaf, besok jam berapa dan di mana kita bertemu?<br/>B: Besok, kita kumpul jam 8 pagi di depan gerbang perusahaan, ya.<br/>A: Mengerti. Jam 8 di depan gerbang, ya.<br/>B: Kalau begitu, sampai jumpa besok.',
  },
  {
    id: 2,
    topik: '<ruby>何時<rt>なんじ</rt></ruby>来<rt>き</rt></ruby>ますか',
    tema: 'Datang jam berapa?',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-02]_kiku2.mp3',
    dialog: [
      { speaker: 'A', text: 'では、<ruby>金曜日<rt>きんようび</rt></ruby>の10<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てください。' },
      { speaker: 'B', text: '<ruby>金曜日<rt>きんようび</rt></ruby>の10<ruby>時<rt>じ</rt></ruby>ですね。えーと、<ruby>場所<rt>ばしょ</rt></ruby>はどこですか？' },
      { speaker: 'A', text: '<ruby>受付<rt>うけつけ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てください。そのあと、<ruby>部屋<rt>へや</rt></ruby>に<ruby>案内<rt>あんない</rt></ruby>します。' },
      { speaker: 'B', text: 'わかりました。' },
    ],
    arti: 'A: Oya, Silahkan datang pada hari Jumat pukul 10.00. <br/>B: Hari Jumat pukul 10.00, ya. Ehm, lokasinya di mana? <br/>A: Silakan datang ke bagian resepsionis. Setelah itu, Anda akan diantar ke kamar. <br/>B: Mengerti.',
  },
  {
    id: 3,
    topik: '<ruby>何時<rt>なんじ</rt></ruby>にしますか',
    tema: 'Tentukan jam berapa?',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-03]_kiku3.mp3',
    dialog: [
      { speaker: 'A', text: '<ruby>明日<rt>あした</rt></ruby>の<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせは、<ruby>何時<rt>なんじ</rt></ruby>にどこにしますか？' },
      { speaker: 'B', text: 'じゃあ、6<ruby>時半<rt>じはん</rt></ruby>に、<ruby>駅<rt>えき</rt></ruby>の<ruby>改札<rt>かいさつ</rt></ruby>でいい？' },
      { speaker: 'A', text: 'はい。6<ruby>時半<rt>じはん</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>ですね。' },
      { speaker: 'B', text: 'じゃあ、また。' },
    ],
    arti: 'A: Untuk pertemuan besok, jam berapa dan di mana kita akan bertemu?<br/>B: Kalau begitu, bagaimana kalau jam 6.30 di pintu tiket (gerbang) stasiun?<br/>A: Ya. Jam 6.30 di stasiun, ya.<br/>B: Kalau begitu, sampai jumpa.',
  },
  {
    id: 4,
    topik: '<ruby>何時<rt>なんじ</rt></ruby>からですか',
    tema: 'Dari jam berapa?',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-04]_kiku4.mp3',
    dialog: [
      { speaker: 'A', text: 'あ のう、 10<ruby>日<rt>とおか</rt></ruby>の イベ ント、 <ruby>何時<rt>なんじ</rt></ruby>からで す か？' },
      { speaker: 'B', text: '17<ruby>時<rt>じ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まりますが、スタッフは30<ruby>分前<rt>ぷんまえ</rt></ruby>にホールに<ruby>来<rt>き</rt></ruby>てください。' },
      { speaker: 'A', text: 'えーと、じゃあ4<ruby>時半<rt>じはん</rt></ruby>ですね。わかりました。' },
      { speaker: 'B', text: 'よろしくお<ruby>願<rt>ねが</rt></ruby>いします。' },
    ],
    arti: 'A: Mmm, acara tanggal sepuluh, dari jam berapa?. <br/>B: Mulai jam 5, tapi Karyawan datanglah 30 menit sebelumnya. <br/>B: Hee..Oke, setengah lima ya, saya faham. <br/>B: Ok, ditunggu ya.',
  },
  {
    id: 5,
    topik: 'そちらに行きたいんですが、',
    tema: 'Saya ingin pergi ke...',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/06/Y_[06-12]_kiku.mp3',
    dialog: [
      { speaker: 'A', text: 'はい。アジア<ruby>食材<rt>しょくざい</rt></ruby>バグースです。' },
      { speaker: 'B', text: 'すみません。そちらに<ruby>行<rt>い</rt></ruby>きたいんですが、どう行ったらいいですか？ 今、さくら<ruby>駅<rt>えき</rt></ruby>の<ruby>北口<rt>きたぐち</rt></ruby>にいます。' },
      { speaker: 'A', text: '<ruby>駅<rt>えき</rt></ruby>の<ruby>北口<rt>きたぐち</rt></ruby>ですね。<ruby>駅<rt>えき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>の<ruby>道<rt>みち</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>って、<ruby>銀行<rt>ぎんこう</rt></ruby>とコンビニの<ruby>間<rt>あいだ</rt></ruby>の<ruby>道<rt>みち</rt></ruby>をまっすぐ行ってください。' },
      { speaker: 'B', text: 'はい。' },
      { speaker: 'A', text: 'それから、1つ<ruby>目<rt>め</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。' },
      { speaker: 'B', text: '<ruby>右<rt>みぎ</rt></ruby>ですね。' },
      { speaker: 'A', text: 'はい。その<ruby>道<rt>みち</rt></ruby>をまっすぐ<ruby>行<rt>い</rt></ruby>って、2つ<ruby>目<rt>め</rt></ruby>の<ruby>角<rt>かど</rt></ruby>を<ruby>左<rt>ひだり</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。' },
      { speaker: 'B', text: 'はい。' },
      { speaker: 'A', text: 'そうすると、<ruby>黒<rt>くろ</rt></ruby>いビルが<ruby>見<rt>み</rt></ruby>えます。その<ruby>隣<rt>となり</rt></ruby>です。' },
      { speaker: 'B', text: '<ruby>黒<rt>くろ</rt></ruby>いビルの<ruby>隣<rt>となり</rt></ruby>ですね。わかりました。ありがとうございます。' },
      { speaker: 'A', text: 'お<ruby>待<rt>ま</rt></ruby>ちしております。' },
    ],
    arti: 'A: Ya. Ini adalah Toko Bahan Makanan Asia "Bagus". <br/>B: Permisi. Saya ingin pergi ke sana, bagaimana cara mencapainya? Saat ini saya berada di pintu keluar utara Stasiun Sakura. <br/>A: Pintu keluar utara stasiun, ya. Seberangi jalan di depan stasiun, lalu jalan lurus melalui jalan di antara bank dan minimarket. <br/>B: Ya. <br/>A: Kemudian, belok kanan di lampu lalu lintas pertama. <br/>B: Belok kanan, ya. <br/>A: Ya. Jalan lurus di jalan tersebut, lalu belok kiri di persimpangan kedua. <br/>B: Ya. <br/>A: Nanti Anda akan melihat sebuah gedung berwarna hitam. Tokonya berada tepat di sebelah gedung tersebut. <br/>B: Di sebelah gedung berwarna hitam, ya. Mengerti. Terima kasih banyak. <br/>A: Kami menantikan kedatangan Anda.',
  },
    {
    id: 6,
    topik: '何が好きですか',
    tema: 'Kamu suka apa?',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/02/Y_[02-13]_kaiwa.mp3',
    dialog: [
      { speaker: 'Eko', text: 'フオンさんは、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしますか？' },
      { speaker: 'Fon', text: '<ruby>私<rt>わたし</rt></ruby>は、たいてい<ruby>友<rt>とも</rt></ruby>だちとバドミントンをします。<ruby>私<rt>わたし</rt></ruby>はスポーツが<ruby>大好<rt>だいす</rt></ruby>きです。' },
      { speaker: 'Ishi', text: 'へえ、バドミントン。どこで？' },
      { speaker: 'Fon', text: '<ruby>市<rt>し</rt></ruby>の<ruby>体育館<rt>たいいくかん</rt></ruby>でします。<ruby>毎週<rt>まいしゅう</rt></ruby>、<ruby>夕方<rt>ゆうがた</rt></ruby>までバドミントンをして、そのあと、みんなで<ruby>ご飯<rt>ごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しいです。' },
      { speaker: 'Eko', text: 'いいですね。' },
      { speaker: 'Ishi', text: 'エコさんは？' },
      { speaker: 'Eko', text: 'ぼくは、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は、たいてい<ruby>家<rt>いえ</rt></ruby>でアニメを<ruby>見<rt>み</rt></ruby>ます。' },
      { speaker: 'Fon', text: 'どこにも<ruby>出<rt>で</rt></ruby>かけませんか？' },
      { speaker: 'Eko', text: '<ruby>出<rt>で</rt></ruby>かけるのは、あまり<ruby>好<rt>す</rt></ruby>きじゃありません。うちで、ゆっくりするのが<ruby>好<rt>す</rt></ruby>きです。' },
      { speaker: 'Fon', text: 'どんなアニメを<ruby>見<rt>み</rt></ruby>るの？' },
      { speaker: 'Eko', text: '<ruby>日本<rt>にほん</rt></ruby>のアニメです。<ruby>特<rt>とく</rt></ruby>に、ジブリの<ruby>映画<rt>えいが</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。' },
      { speaker: 'Fon', text: 'そうですか。' },
      { speaker: 'Eko', text: '<ruby>石川<rt>いしかわ</rt></ruby>さんは、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしますか？' },
      { speaker: 'Ishi', text: 'うーん、ぼくは、<ruby>子<rt>こ</rt></ruby>どもと<ruby>公園<rt>こうえん</rt></ruby>。' },
      { speaker: 'Fon', text: 'そうですか。<ruby>公園<rt>こうえん</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をしますか？' },
      { speaker: 'Ishi', text: 'キャッチボール。ぼくは、<ruby>野球<rt>やきゅう</rt></ruby>が<ruby>好<rt>す</rt></ruby>きでね。<ruby>見<rt>み</rt></ruby>るのもするのも。' },
      { speaker: 'Fon', text: 'そうですか。お<ruby>子<rt>こ</rt></ruby>さんは<ruby>何歳<rt>なんさい</rt></ruby>ですか？' },
      { speaker: 'Ishi', text: '8<ruby>歳<rt>さい</rt></ruby>と5<ruby>歳<rt>さい</rt></ruby>。<ruby>子<rt>こ</rt></ruby>どもとキャッチボール、<ruby>楽<rt>たの</rt></ruby>しいよ。' },
    ],
    arti: 'A: Fon, kamu biasanya melakukan apa di hari libur? <br/>B: Saya biasanya bermain bulu tangkis dengan teman-teman. Saya sangat menyukai olahraga. <br/>C: Wah, bulu tangkis. Di mana? <br/>B: Saya bermain di gedung olahraga kota. Setiap minggu, saya bermain bulu tangkis sampai sore, dan setelah itu, kami semua makan bersama. Benar-benar menyenangkan. <br/>A: Bagus juga ya. <br/>C: Kalau kamu, Eko? <br/>A: Saya, di hari libur, biasanya menonton anime di rumah. <br/>B: Kamu tidak pergi ke mana-mana? <br/>A: Saya tidak terlalu suka pergi keluar. Saya lebih suka bersantai di rumah. <br/>C: Anime seperti apa yang kamu tonton? <br/>A: Anime Jepang. Terutama, saya suka film-film Ghibli. <br/>B: Oh, begitu. <br/>A: Kalau kamu, Ishikawa, biasanya melakukan apa di hari libur? <br/>C: Hmm, saya ke taman bersama anak-anak. <br/>B: Oh, begitu. Kalian melakukan apa di taman? <br/>C: Bermain lempar tangkap bola. Saya suka baseball, lho. Baik menonton maupun ',
  },
  {
   id: 7,
    topik: 'どの<ruby>季節<rt>きせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか',
    tema: 'Kamu suka musim apa?',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/03/Y_[03-12]_kaiwa.mp3',
    dialog: [
        { speaker: '', text: 'Kawano：アラムさん、<ruby>好<rt>す</rt></ruby>きな<ruby>季節<rt>きせつ</rt></ruby>はいつですか？<br/>Aram：そうですね。<ruby>秋<rt>あき</rt></ruby>がいちばん<ruby>好<rt>す</rt></ruby>きです。<br/>Kawano：どうしてですか？<br/>Aram：<ruby>私<rt>わたし</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>いのが<ruby>苦手<rt>にがて</rt></ruby>ですから。<ruby>秋<rt>あき</rt></ruby>はすずしいですから<ruby>好<rt>す</rt></ruby>きです。<ruby>メリ<rt>―</rt></ruby>さんは？<br/>Meri：<ruby>私<rt>わたし</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>いのが<ruby>大好<rt>だいす</rt></ruby>きですから、<ruby>夏<rt>なつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。<br/>Kawano：へー、そうですか。<br/>Meri：<ruby>海<rt>うみ</rt></ruby>や<ruby>山<rt>やま</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>ぶのも<ruby>楽<rt>たの</rt></ruby>しいです。<ruby>川野<rt>かわの</rt></ruby>さんは？どの<ruby>季節<rt>きせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか？<br/>Kawano：<ruby>私<rt>わたし</rt></ruby>も<ruby>秋<rt>あき</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですね。<br/>Aram：どうしてですか？<br/>Kawano：もみじの<ruby>景色<rt>けしき</rt></ruby>がきれいですから。<br/>Aram：そうですね。<br/>Kawano：それに、<ruby>果物<rt>くだもの</rt></ruby>もおいしいですよね。ぶどうとか<ruby>梨<rt>なし</rt></ruby>とか。' },
  ]
    arti:'Kawano: Aram, musim apa yang paling kamu sukai? <br/>Aram: Hmm, sepertinya musim gugur. Saya paling suka musim gugur. <br/>Kawano: Kenapa begitu? <br/>Aram: Karena saya tidak terlalu tahan dengan udara panas. Saya suka musim gugur karena udaranya sejuk. Kalau kamu, Meri? <br/>Meri: Saya sangat suka udara panas, jadi saya suka musim panas. <br/>Kawano: Oh, begitu ya. <br/>Meri: Bermain di pantai atau di pegunungan juga menyenangkan. Kalau kamu, Kawano? Kamu suka musim apa? <br/>Kawano: Saya juga suka musim gugur. <br/>Aram: Kenapa begitu? <br/>Kawano: Karena pemandangan daun maple (momiji) sangat indah. <br/>Aram: Benar juga. <br/>Kawano: Selain itu, buah-buahannya juga enak, kan? <br/>Kawano: Seperti anggur dan pir.',
  },
];

