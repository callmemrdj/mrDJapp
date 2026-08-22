// ============================================================
// DATA: setiap kata WAJIB punya field "bab" (nomor bab Irodori)
// supaya bisa difilter per-bab. Tinggal tambahkan ribuan entri
// lain dengan format yang sama, tidak perlu ubah kode di app.js.
// File ini HARUS dimuat SEBELUM js/app.js di index.html.
// ============================================================
const irodoriGoi = {
  kosakataIrodori: [
    { kanji: '合気道', hiragana: 'あいきどう', romaji: 'aikido', arti: 'aikido' },
    { kanji: 'あいさつ', hiragana: 'あいさつ', romaji: 'aisastu', arti: 'ucapan salam' },
    { kanji: 'アイス', hiragana: 'アイス', romaji: 'aisu', arti: 'es' },
    { kanji: 'アイスクリーム', hiragana: 'アイスクリーム', romaji: 'aisukuriimu', arti: 'es krim' },
    { kanji: 'アイスコーヒー', hiragana: 'アイスコーヒー', romaji: 'aisu-koohii', arti: 'es kopi' },


    //Kalau ingin ditampilkan per BAB maka ikuti penulisan berikut
    /*
    { bab: 1, kanji: '間　（～と～の間）', hiragana: 'あいだ　（～と～のあいだ）', romaji: 'aida', arti: 'antara' },
    { bab: 1, kanji: '間をあける', hiragana: 'あいだをあける', romaji: 'aida o akeru', arti: 'membuka ruang' },
    { bab: 2, kanji: '間をあける', hiragana: 'あいだをあける', romaji: 'aida o akeru', arti: 'membuka ruang' },
    { bab: 2, kanji: '間をあける', hiragana: 'あいだをあける', romaji: 'aida o akeru', arti: 'membuka ruang' },
    { bab: 3, kanji: '間をあける', hiragana: 'あいだをあける', romaji: 'aida o akeru', arti: 'membuka ruang' },
    { bab: 3, kanji: '間をあける', hiragana: 'あいだをあける', romaji: 'aida o akeru', arti: 'membuka ruang' },
     dan seterusnya...
    */
  ],
};
