/* ======================================================
   STATE
   ====================================================== */
let currentPage = 'home';
let kosakataTab = 'kataKerja';
let fcUsed = new Set();
let fcTotal = 0;
let fcCurrentCard = null;
let quizQuestions = [];
let quizIdx = 0;
let quizScore = 0;
let quizTimer = null;
let quizTimeLeft = 30;
const QUIZ_TIME = 30;
const QUIZ_COUNT = 50;

/* ======================================================
   NAVIGASI
   ====================================================== */
function goTo(page) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  currentPage = page;

  const nav = document.getElementById('bottom-nav');
  if (page === 'home') {
    nav.classList.remove('show');
  } else {
    nav.classList.add('show');
    nav.querySelectorAll('.nav-item').forEach((n) => n.classList.toggle('active', n.dataset.page === page));
  }

  if (page === 'kosakata') (initKosakata(), endQuiz());
  if (page === 'tatabahasa') (initTatabahasa(),endQuiz());
  if (page === 'flashcard') (initFlashcard(),endQuiz());
  if (page === 'percakapan') (initPercakapan(), endQuiz());
  if (page === 'quiz') initQuiz();
  if (page === 'irodori') (initIrodorigoi(), endQuiz());

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ======================================================
   TOAST
   ====================================================== */
let toastTimeout = null;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => (t.className = 'toast'), 2200);
}

/* ======================================================
   工具函数
   ====================================================== */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ======================================================
   KOSAKATA
   ====================================================== */
const tabLabels = {
  kataBantu: 'Bantu',
  kataKerja: 'Kerja',
  kataBenda: 'Benda',
  kataSifat: 'Sifat',
  kataKeterangan: 'Lainnya',
};

function initKosakata() {

  const tabBar = document.getElementById('kosakataTabs');
  tabBar.innerHTML = '';
  for (const [key, label] of Object.entries(tabLabels)) {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (key === kosakataTab ? ' active' : '');
    btn.textContent = label;
    btn.setAttribute('role', 'tab');
    btn.onclick = () => {
      kosakataTab = key;
      document.getElementById('searchInput').value = '';
      initKosakata();
    };
    tabBar.appendChild(btn);
  }
  renderKosakata();
}

function renderKosakata() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const list = kosakataData[kosakataTab] || [];
  const container = document.getElementById('kosakataList');

  const filtered = list.filter((item) => {
    if (!query) return true;
    const searchStr = (item.kanji + ' ' + item.hiragana + ' ' + item.romaji + ' ' + item.arti + (item.explain || '') + ' ' + (item.contoh ? item.contoh.map((c) => c.jp + ' ' + c.id).join(' ') : '')).toLowerCase();
    return searchStr.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>Tidak ditemukan kosakata yang cocok</p></div>';
    return;
  }

  if (kosakataTab === 'kataBantu') {
    container.innerHTML = filtered
      .map(
        (item, i) => `
            <div class="ket-item" id="ket-${i}" style="animation-delay:${i * 0.03}s">
                <div class="ket-header" onclick="toggleKet(${i})" role="button" tabindex="0" aria-expanded="false">
                    <div class="ket-left">
                        <span class="ket-kanji">${item.kanji}</span>
                        <span class="ket-hiragana">${item.hiragana} / ${item.romaji}</span>
                    </div>
                    <div class="ket-right">
                        <span class="ket-arti">${item.arti}</span>
                        <i class="fas fa-chevron-down ket-arrow"></i>
                    </div>
                </div>
                <div class="ket-body" id="ket-body-${i}">
                    <p class="ket-explain">${item.explain}</p>
                    <div class="example-label">Contoh Kalimat</div>
                    ${item.contoh
                      .map(
                        (c) => `
                        <div class="ket-example">
                            <div class="jp">${c.jp}</div>
                            <div class="jp">${c.rj}</div>
                            <div class="id">${c.id}</div>
                        </div>
                    `,
                      )
                      .join('')}
                </div>
            </div>
        `,
      )
      .join('');
  } else {
    container.innerHTML = filtered
      .map(
        (item, i) => `
            <div class="word-item" style="animation-delay:${i * 0.03}s" role="listitem">
                <div class="word-left">
                    <span class="word-kanji">${item.kanji}</span>
                    <span class="word-hiragana">${item.hiragana} / ${item.romaji}</span>
                </div>
                <span class="word-arti">${item.arti}</span>
            </div>
        `,
      )
      .join('');
  }
}

function toggleKet(idx) {
  const item = document.getElementById('ket-' + idx);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.ket-item').forEach((g) => g.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ======================================================
   TATABAHASA
   ====================================================== */
function initTatabahasa() {
  const container = document.getElementById('grammarList');
  container.innerHTML = tatabahasaData
    .map(
      (item, i) => `
        <div class="grammar-item" id="grammar-${i}">
            <div class="grammar-header" onclick="toggleGrammar(${i})" role="button" tabindex="0" aria-expanded="false">
                <span class="grammar-pattern">${item.pola}</span>
                <i class="fas fa-chevron-down grammar-arrow"></i>
            </div>
            <div class="grammar-body" id="grammar-body-${i}">
                <p class="grammar-explain">${item.explain}</p>
                <div class="example-label">Contoh Kalimat</div>
                ${item.contoh
                  .map(
                    (c) => `
                    <div class="grammar-example">
                        <div class="jp">${c.jp}</div>
                        <div class="jp">${c.rj}</div>
                        <div class="id">${c.id}</div>

                    </div>
                `,
                  )
                  .join('')}
            </div>
        </div>
    `,
    )
    .join('');
}

function toggleGrammar(idx) {
  const item = document.getElementById('grammar-' + idx);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.grammar-item').forEach((g) => g.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ======================================================
   FLASHCARD
   ====================================================== */
function initFlashcard() {

  updateFcStatus();
  if (!fcCurrentCard) {
    document.getElementById('fcEmpty').style.display = 'block';
    document.getElementById('flipCard').style.display = 'none';
  }
}

function resetFlashcard() {
  fcUsed.clear();
  fcCurrentCard = null;
  fcTotal = flashcardData[document.getElementById('fcCategory').value].length;
  document.getElementById('flipCard').classList.remove('flipped');
  document.getElementById('fcEmpty').style.display = 'block';
  document.getElementById('flipCard').style.display = 'none';
  document.getElementById('btnShuffle').disabled = false;
  updateFcStatus();
}

function updateFcStatus() {
  const cat = document.getElementById('fcCategory').value;
  fcTotal = flashcardData[cat].length;
  document.getElementById('fcCount').textContent = fcUsed.size + ' / ' + fcTotal;
}

function shuffleCard() {
  const cat = document.getElementById('fcCategory').value;
  const cards = flashcardData[cat];
  const available = [];
  cards.forEach((c, i) => {
    if (!fcUsed.has(i)) available.push(i);
  });

  if (available.length === 0) {
    showToast('Semua kartu sudah ditampilkan!', 'success');
    document.getElementById('btnShuffle').disabled = true;
    return;
  }

  const randIdx = available[Math.floor(Math.random() * available.length)];
  fcUsed.add(randIdx);
  fcCurrentCard = cards[randIdx];

  const flipCard = document.getElementById('flipCard');
  flipCard.classList.remove('flipped');
  document.getElementById('fcKanji').textContent = fcCurrentCard.kanji;
  //document.getElementById('fcOnyomi').textContent = fcCurrentCard.onyomi;
  document.getElementById('fcKunyomi').textContent = fcCurrentCard.kunyomi;
  document.getElementById('fcArti').textContent = fcCurrentCard.arti;
  //document.getElementById('fcContoh').textContent = fcCurrentCard.contoh;

  document.getElementById('fcEmpty').style.display = 'none';
  flipCard.style.display = 'block';
  flipCard.style.animation = 'none';
  flipCard.offsetHeight;
  flipCard.style.animation = 'pageIn .35s ease';

  updateFcStatus();
  if (fcUsed.size >= fcTotal) {
    document.getElementById('btnShuffle').disabled = true;
  }
}

function flipCard() {
  document.getElementById('flipCard').classList.toggle('flipped');
}

/* ======================================================
   QUIZ
   ====================================================== */
function initQuiz() {
  const selected = shuffle(quizPool).slice(0, QUIZ_COUNT);
  quizQuestions = selected.map((item) => {
    const options = shuffle([item.a, ...item.w]);
    return { question: item.q, options, correctIdx: options.indexOf(item.a) };
  });
  quizIdx = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById('quizArea');
  if (quizIdx >= quizQuestions.length) {
    renderQuizResult();
    return;
  }

  const q = quizQuestions[quizIdx];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const circ = 2 * Math.PI * 20;

  area.innerHTML = `
        <div class="quiz-header">
            <span class="quiz-progress">Soal <b>${quizIdx + 1}</b> / ${quizQuestions.length}</span>
            <div class="timer-wrap">
                <div class="timer-outer">
                    <svg class="timer-ring" width="44" height="44" viewBox="0 0 44 44">
                        <circle class="timer-ring-bg" cx="22" cy="22" r="20"/>
                        <circle class="timer-ring-fg" id="timerCircle" cx="22" cy="22" r="20" stroke-dasharray="${circ}" stroke-dashoffset="0"/>
                    </svg>
                    <span class="timer-text" id="timerText">${QUIZ_TIME}</span>
                </div>
            </div>
        </div>
        <div class="quiz-card"><p class="quiz-question">${q.question}</p></div>
        <div class="quiz-options" id="quizOptions">
            ${q.options
              .map(
                (opt, i) => `
                <div class="quiz-opt" onclick="selectAnswer(${i})" role="button" tabindex="0">
                    <span class="opt-letter">${letters[i]}</span>
                    <span>${opt}</span>
                </div>
            `,
              )
              .join('')}
        </div>
    `;

  quizTimeLeft = QUIZ_TIME;
  updateTimerDisplay(circ);
  clearInterval(quizTimer);
  quizTimer = setInterval(() => {
    quizTimeLeft--;
    updateTimerDisplay(circ);
    if (quizTimeLeft <= 0) {
      clearInterval(quizTimer);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay(circ) {
  const circle = document.getElementById('timerCircle');
  const text = document.getElementById('timerText');
  if (!circle || !text) return;
  circle.style.strokeDashoffset = circ * ((QUIZ_TIME - quizTimeLeft) / QUIZ_TIME);
  text.textContent = quizTimeLeft;
  const danger = quizTimeLeft <= 5;
  circle.classList.toggle('danger', danger);
  text.classList.toggle('danger', danger);
}

function selectAnswer(idx) {
  clearInterval(quizTimer);
  const q = quizQuestions[quizIdx];
  const opts = document.querySelectorAll('#quizOptions .quiz-opt');
  opts.forEach((o) => o.classList.add('disabled'));
  opts[q.correctIdx].classList.add('correct');
  if (idx !== q.correctIdx) opts[idx].classList.add('wrong');
  else quizScore++;
  setTimeout(() => {
    quizIdx++;
    renderQuizQuestion();
  }, 1000);
}

function timeUp() {
  const q = quizQuestions[quizIdx];
  const opts = document.querySelectorAll('#quizOptions .quiz-opt');
  opts.forEach((o) => o.classList.add('disabled'));
  opts[q.correctIdx].classList.add('correct');
  showToast('Waktu habis!', 'error');
  setTimeout(() => {
    quizIdx++;
    renderQuizQuestion();
  }, 1200);
}

function renderQuizResult() {
  clearInterval(quizTimer);
  const pct = Math.round((quizScore / quizQuestions.length) * 100);
  let msg = '';
  if (pct >= 80) msg = 'Luar biasa! Kamu menguasai materi ini!';
  else if (pct >= 60) msg = 'Bagus! Terus tingkatkan lagi!';
  else if (pct >= 40) msg = 'Cukup baik, ayo belajar lebih giat!';
  else msg = 'Jangan menyerah, coba lagi ya!';

  document.getElementById('quizArea').innerHTML = `
        <div class="quiz-result">
            <div class="score-circle">
                <span class="score-num">${quizScore}</span>
                <span class="score-label">dari ${quizQuestions.length}</span>
            </div>
            <h2>Skor: ${pct}%</h2>
            <p>${msg}</p>
            <button class="btn-restart" onclick="initQuiz()"><i class="fas fa-rotate-right"></i> Ulangi Quiz</button>
        </div>
    `;
}

function endQuiz() {
  clearInterval(quizTimer);
}

// ============================================================
// MODUL: Kosakata Irodori (tab bab + pencarian + list mobile)
// ============================================================
const IrodoriGoiModule = (function () {
  const ALL = irodoriGoi.kosakataIrodori;
  const CHUNK_SIZE = 40;

  let currentBab = 'semua';
  let currentQuery = '';
  let visibleCount = CHUNK_SIZE;
  let searchDebounceTimer = null;
  let isSetup = false; // guard supaya listener tidak dipasang berkali-kali

  let tabsEl, listEl, countEl, searchInputEl;

  function getDaftarBab() {
    const set = new Set(ALL.map((item) => item.bab).filter((b) => b !== undefined && b !== null));
    return Array.from(set).sort((a, b) => a - b);
  }

  function buildTabs() {
    const babList = getDaftarBab();
    const tabs = [{ id: 'semua', label: 'Semua' }].concat(babList.map((b) => ({ id: b, label: 'Bab ' + b })));

    tabsEl.innerHTML = tabs
      .map(
        (tab) =>
          `<button type="button" class="irodori-tab-item${tab.id === currentBab ? ' active' : ''}"
                    data-bab="${tab.id}" role="tab" aria-selected="${tab.id === currentBab}">
             ${tab.label}
           </button>`,
      )
      .join('');

    tabsEl.querySelectorAll('.irodori-tab-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-bab');
        currentBab = val === 'semua' ? 'semua' : Number(val);
        visibleCount = CHUNK_SIZE;
        buildTabs();
        renderIrodorigoi();
      });
    });
  }

  function normalize(str) {
    return (str || '').toString().toLowerCase();
  }

  function getFilteredData() {
    const query = normalize(currentQuery).trim();
    return ALL.filter((item) => {
      const cocokBab = currentBab === 'semua' || item.bab === currentBab;
      if (!cocokBab) return false;
      if (!query) return true;
      return normalize(item.kanji).includes(query) || normalize(item.hiragana).includes(query) || normalize(item.romaji).includes(query) || normalize(item.arti).includes(query);
    });
  }

  function renderWordItem(item) {
    return `
      <div class="irodori-word-item" role="listitem">
        <div class="irodori-word-main">
          <div class="irodori-word-kanji">${item.kanji}</div>
          <div class="irodori-word-hiragana">${item.hiragana}</div>
          <div class="irodori-word-romaji">${item.romaji}</div>
          ${item.bab !== undefined ? `<span class="irodori-word-bab">Bab ${item.bab}</span>` : ''}
        </div>
        <div class="irodori-word-arti">${item.arti}</div>
      </div>`;
  }

  function renderIrodorigoi() {
    const filtered = getFilteredData();
    const totalFiltered = filtered.length;
    const toShow = filtered.slice(0, visibleCount);

    if (totalFiltered === 0) {
      listEl.innerHTML = `<div class="irodori-empty">Kata tidak ditemukan.</div>`;
      countEl.textContent = '0 kata';
      return;
    }

    countEl.textContent = `${totalFiltered} kata ditemukan`;
    let html = toShow.map(renderWordItem).join('');

    if (visibleCount < totalFiltered) {
      html += `<button type="button" class="irodori-load-more" id="irodoriLoadMore">
                 Muat lebih banyak (${totalFiltered - visibleCount} tersisa)
               </button>`;
    }
    listEl.innerHTML = html;

    const loadMoreBtn = document.getElementById('irodoriLoadMore');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        visibleCount += CHUNK_SIZE;
        renderIrodorigoi();
      });
    }
  }

  function handleSearchInput() {
    currentQuery = searchInputEl.value;
    visibleCount = CHUNK_SIZE;
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(renderIrodorigoi, 200);
  }

  // Ini yang dipanggil dari goTo('irodorigoi')
  function init() {
    tabsEl = document.getElementById('irodoriTabs');
    listEl = document.getElementById('irodoriList');
    countEl = document.getElementById('irodoriResultCount');
    searchInputEl = document.getElementById('irodoriSearchInput');

    if (!isSetup) {
      searchInputEl.removeAttribute('oninput');
      searchInputEl.addEventListener('input', handleSearchInput);
      isSetup = true;
    }

    buildTabs();
    renderIrodorigoi();
  }

  return { init, render: renderIrodorigoi };
})();

function initIrodorigoi() {
  IrodoriGoiModule.init();
}

// ============================================================
// MODUL: Percakapan (daftar topik -> layar dialog + audio)
// Data (percakapanData) ada di js/data-percakapan.js -> file itu
// HARUS dimuat SEBELUM app.js di index.html.
// ============================================================
const PercakapanModule = (function () {
  let listViewEl, detailViewEl, listEl, titleEl, dialogEl, audioEl;
  let isSetup = false;

  function renderTopicList() {
    listEl.innerHTML = percakapanData
      .map(
        (item) => `
        <div class="percakapan-topic-card" data-id="${item.id}" role="button" tabindex="0">
          <div class="percakapan-topic-icon"><i class="fas fa-comments"></i></div>
          <div class="percakapan-topic-info">
            <div class="percakapan-topic-title">${item.topik}</div>
            <div class="percakapan-topic-sub">${item.dialog.length} baris percakapan</div>            
          </div>
          <i class="fas fa-chevron-right percakapan-topic-arrow"></i>
        </div>`,
      )
      .join('');

    listEl.querySelectorAll('.percakapan-topic-card').forEach((card) => {
      card.addEventListener('click', () => showDetail(Number(card.getAttribute('data-id'))));
    });
  }

  function renderDialogBubble(line) {
    const sideClass = line.speaker === 'A' ? 'is-a' : 'is-b';
    return `
      <div class="percakapan-bubble-row ${sideClass}">
        <span class="percakapan-bubble-speaker">${line.speaker}</span>
        <div class="percakapan-bubble">${line.text}</div>
      </div>`;
  }

  function showDetail(id) {
    const topic = percakapanData.find((t) => t.id === id);
    if (!topic) return;

    titleEl.textContent = topic.topik;
    dialogEl.innerHTML = topic.dialog.map(renderDialogBubble).join('');
    artiEl.innerHTML = topic.arti || '';

    // audio hanya di-set saat topik dibuka (bukan preload semua), sumbernya boleh dari domain lain
    audioEl.src = topic.audio;
    audioEl.load();

    listViewEl.style.display = 'none';
    detailViewEl.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToList() {
    stopAudio();
    detailViewEl.style.display = 'none';
    listViewEl.style.display = 'block';
  }

  function stopAudio() {
    if (audioEl) {
      audioEl.pause();
      audioEl.currentTime = 0;
    }
  }

  function init() {
    listViewEl = document.getElementById('percakapanListView');
    detailViewEl = document.getElementById('percakapanDetailView');
    listEl = document.getElementById('percakapanList');
    titleEl = document.getElementById('percakapanDetailTitle');
    dialogEl = document.getElementById('percakapanDialog');
    artiEl = document.getElementById('percakapanArti');
    audioEl = document.getElementById('percakapanAudio');

    if (!isSetup) {
      document.getElementById('percakapanBackBtn').addEventListener('click', backToList);
      isSetup = true;
    }

    // selalu mulai dari daftar topik tiap kali halaman ini dibuka
    detailViewEl.style.display = 'none';
    listViewEl.style.display = 'block';
    renderTopicList();
  }

  return { init, stopAudio };
})();

function initPercakapan() {
  PercakapanModule.init();
}

/* 键盘可访问性 */
document.querySelectorAll('.menu-card').forEach((card) => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

/* 初始化 */
fcTotal = flashcardData.kataKerja.length;
