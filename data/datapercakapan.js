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
    topik: '何時にどこですか',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-01]_kiku1.mp3',
    dialog: [
      { speaker: 'A', text: 'すみません。明日は何時にどこですか？' },
      { speaker: 'B', text: '明日は、朝8時に会社の門の前集合ね。' },
      { speaker: 'A', text: 'わかりました。8時に門の前ですね。' },
      { speaker: 'B', text: 'じゃあ、また明日。' },
    ],
  },
  {
    id: 2,
    topik: '何時に来ますか',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-02]_kiku2.mp3',
    dialog: [
      { speaker: 'A', text: 'では、金曜日の10時に来てください。' },
      { speaker: 'B', text: '金曜日の10時ですね。えーと、場所はどこですか？' },
      { speaker: 'A', text: '受付に来てください。そのあと、部屋に案内します。' },
      { speaker: 'B', text: 'わかりました。' },
    ],
    arti: '',
  },
  {
    id: 3,
    topik: '何時にしますか',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-03]_kiku3.mp3',
    dialog: [
      { speaker: 'A', text: '明日の待ち合わせは、何時にどこにしますか？' },
      { speaker: 'B', text: 'じゃあ、6時半に、駅の改札でいい？' },
      { speaker: 'A', text: 'はい。6時半に駅ですね。' },
      { speaker: 'B', text: 'じゃあ、また。' },
    ],
    arti: '',
  },
  {
    id: 3,
    topik: '何時からですか',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/07/Y_[07-04]_kiku4.mp3',
    dialog: [
      { speaker: 'A', text: 'あ のう、 10日の イベ ント、 何時からで す か？' },
      { speaker: 'B', text: '17時に始きま り ま す が 、 ス タ ッフ は 30 分前にホールに来てくだ さ い 。' },
      { speaker: 'A', text: 'えーと、 じゃあ 4時半ですね。わかりました。' },
      { speaker: 'B', text: 'よろしくお 願いします。' },
    ],
    arti: 'A: Mmm, acara tanggal sepuluh, dari jam berapa?. <br/>B: Mulai jam 5, tapi Karyawan datanglah 30 menit sebelumnya. <br/>B: Hee..Oke, setengah lima ya, saya faham. <br/>B: Ok, ditunggu ya.',
  },
  {
    id: 4,
    topik: 'そちらに行きたいんですが、',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/06/Y_[06-12]_kiku.mp3',
    dialog: [
      { speaker: 'A', text: 'はい。アジア食材バグースです。' },
      { speaker: 'B', text: 'すみません。そちらに行きたいんですが、どう行ったらいいですか？ 今、さくら駅の北口にいます。' },
      { speaker: 'A', text: '駅の北口ですね。駅の前の道を渡って、銀行とコンビニの間の道をまっすぐ行ってください。' },
      { speaker: 'B', text: 'はい。' },
      { speaker: 'A', text: 'それから、1つ目の信号を右に曲がってください。' },
      { speaker: 'B', text: '右ですね。' },
      { speaker: 'A', text: 'はい。その道をまっすぐ行って、2つ目の角を左に曲がってください。' },
      { speaker: 'B', text: 'はい。' },
      { speaker: 'A', text: 'そうすると、黒いビルが見えます。その隣です。' },
      { speaker: 'B', text: '黒いビルの隣ですね。わかりました。ありがとうございます。' },
      { speaker: 'A', text: 'お待ちしております。' },
    ],
    arti: 'A: Ya. Ini adalah Toko Bahan Makanan Asia "Bagus". <br/>B: Permisi. Saya ingin pergi ke sana, bagaimana cara mencapainya? Saat ini saya berada di pintu keluar utara Stasiun Sakura. <br/>A: Pintu keluar utara stasiun, ya. Seberangi jalan di depan stasiun, lalu jalan lurus melalui jalan di antara bank dan minimarket. <br/>B: Ya. <br/>A: Kemudian, belok kanan di lampu lalu lintas pertama. <br/>B: Belok kanan, ya. <br/>A: Ya. Jalan lurus di jalan tersebut, lalu belok kiri di persimpangan kedua. <br/>B: Ya. <br/>A: Nanti Anda akan melihat sebuah gedung berwarna hitam. Tokonya berada tepat di sebelah gedung tersebut. <br/>B: Di sebelah gedung berwarna hitam, ya. Mengerti. Terima kasih banyak. <br/>A: Kami menantikan kedatangan Anda.',
  },
    {
    id: 5,
    topik: '何が好きですか',
    audio: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/audio/02/Y_[02-13]_kaiwa.mp3',
    dialog: [
      { speaker: 'A', text: 'フオンさんは、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしますか？' },
      { speaker: 'B', text: '<ruby>私<rt>わたし</rt></ruby>は、たいてい<ruby>友<rt>とも</rt></ruby>だちとバドミントンをします。<ruby>私<rt>わたし</rt></ruby>はスポーツが<ruby>大好<rt>だいす</rt></ruby>きです。' },
      { speaker: 'C', text: 'へえ、バドミントン。どこで？' },
      { speaker: 'B', text: '<ruby>市<rt>し</rt></ruby>の<ruby>体育館<rt>たいいくかん</rt></ruby>でします。<ruby>毎週<rt>まいしゅう</rt></ruby>、<ruby>夕方<rt>ゆうがた</rt></ruby>までバドミントンをして、そのあと、みんなで<ruby>ご飯<rt>ごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しいです。' },
      { speaker: 'A', text: 'いいですね。' },
      { speaker: 'C', text: 'エコさんは？' },
      { speaker: 'A', text: 'ぼくは、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は、たいてい<ruby>家<rt>いえ</rt></ruby>でアニメを<ruby>見<rt>み</rt></ruby>ます。' },
      { speaker: 'B', text: 'どこにも<ruby>出<rt>で</rt></ruby>かけませんか？' },
      { speaker: 'A', text: '<ruby>出<rt>で</rt></ruby>かけるのは、あまり<ruby>好<rt>す</rt></ruby>きじゃありません。うちで、ゆっくりするのが<ruby>好<rt>す</rt></ruby>きです。' },
      { speaker: 'B', text: 'どんなアニメを<ruby>見<rt>み</rt></ruby>るの？' },
      { speaker: 'A', text: '<ruby>日本<rt>にほん</rt></ruby>のアニメです。<ruby>特<rt>とく</rt></ruby>に、ジブリの<ruby>映画<rt>えいが</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。' },
      { speaker: 'B', text: 'そうですか。' },
      { speaker: 'A', text: '<ruby>石川<rt>いしかわ</rt></ruby>さんは、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしますか？' },
      { speaker: 'C', text: 'うーん、ぼくは、<ruby>子<rt>こ</rt></ruby>どもと<ruby>公園<rt>こうえん</rt></ruby>。' },
      { speaker: 'B', text: 'そうですか。<ruby>公園<rt>こうえん</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をしますか？' },
      { speaker: 'C', text: 'キャッチボール。ぼくは、<ruby>野球<rt>やきゅう</rt></ruby>が<ruby>好<rt>す</rt></ruby>きでね。<ruby>見<rt>み</rt></ruby>るのもするのも。' },
      { speaker: 'B', text: 'そうですか。お<ruby>子<rt>こ</rt></ruby>さんは<ruby>何歳<rt>なんさい</rt></ruby>ですか？' },
      { speaker: 'C', text: '8<ruby>歳<rt>さい</rt></ruby>と5<ruby>歳<rt>さい</rt></ruby>。<ruby>子<rt>こ</rt></ruby>どもとキャッチボール、<ruby>楽<rt>たの</rt></ruby>しいよ。' },
    ],
    arti: 'A: Fon, kamu biasanya melakukan apa di hari libur? <br/>B: Saya biasanya bermain bulu tangkis dengan teman-teman. Saya sangat menyukai olahraga. <br/>C: Wah, bulu tangkis. Di mana? <br/>B: Saya bermain di gedung olahraga kota. Setiap minggu, saya bermain bulu tangkis sampai sore, dan setelah itu, kami semua makan bersama. Benar-benar menyenangkan. <br/>A: Bagus juga ya. <br/>C: Kalau kamu, Eko? <br/>A: Saya, di hari libur, biasanya menonton anime di rumah. <br/>B: Kamu tidak pergi ke mana-mana? <br/>A: Saya tidak terlalu suka pergi keluar. Saya lebih suka bersantai di rumah. <br/>C: Anime seperti apa yang kamu tonton? <br/>A: Anime Jepang. Terutama, saya suka film-film Ghibli. <br/>B: Oh, begitu. <br/>A: Kalau kamu, Ishikawa, biasanya melakukan apa di hari libur? <br/>C: Hmm, saya ke taman bersama anak-anak. <br/>B: Oh, begitu. Kalian melakukan apa di taman? <br/>C: Bermain lempar tangkap bola. Saya suka baseball, lho. Baik menonton maupun ',
  },      
];
