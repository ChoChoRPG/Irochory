document.addEventListener("DOMContentLoaded", () => {
  // === Global State ===
  let allCards = []; // Akan diisi saat load
  let isShuffled = false;

  // === DOM Element Selectors ===
  const screens = {
    selection: document.getElementById("selection-screen"),
    // (DIHAPUS) flashcard dan results
  };
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const dataSelectionContainer = document.getElementById(
    "data-selection-container"
  );
  const initialLoading = document.getElementById("initial-loading"); // Loader awal
  const startButton = document.getElementById("start-button");
  const shuffleButton = document.getElementById("shuffle-toggle");
  const selectionError = document.getElementById("selection-error");
  // (DIHAPUS) elemen-elemen flashcard

  // (PERBAIKAN) Parser ini akan mengekstrak data dari `const dataString = \`...\``
  function parseDataString(dataString) {
    // Cari data di antara backtick pertama dan terakhir
    const startIndex = dataString.indexOf("`");
    const endIndex = dataString.lastIndexOf("`");

    let cleanedString = dataString; // default jika backtick tidak ditemukan

    if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
      cleanedString = dataString.substring(startIndex + 1, endIndex);
    } else {
      // console.warn("Format backtick tidak ditemukan, mencoba parse teks mentah.");
    }

    return cleanedString
      .trim()
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith("//"))
      .map((line) => {
        const parts = line.split(",").map((s) => s.trim());
        if (parts.length >= 5) {
          return {
            kanji: parts[0],
            furigana: parts[1],
            arti: parts[2],
            type: parts[3],
            bagian: parseInt(parts[4], 10),
          };
        }
        return null;
      })
      .filter(
        (card) =>
          card !== null && card.kanji && card.type && !isNaN(card.bagian)
      );
  }

  // Mengisi layar pemilihan SETELAH data dimuat
  function populateSelectionScreen() {
    if (initialLoading) {
      initialLoading.classList.add("hidden"); // Sembunyikan loader awal
    }

    const dataMap = new Map();
    dataMap.set("x", { name: "Irodori X", parts: new Map() });
    dataMap.set("y", { name: "Irodori Y", parts: new Map() });
    dataMap.set("z", { name: "Irodori Z", parts: new Map() });

    allCards.forEach((card) => {
      if (dataMap.has(card.type)) {
        const parts = dataMap.get(card.type).parts;
        if (!parts.has(card.bagian)) {
          parts.set(card.bagian, 0);
        }
        parts.set(card.bagian, parts.get(card.bagian) + 1);
      }
    });

    dataMap.forEach((data, type) => {
      if (data.parts.size === 0) return;

      const accordionWrapper = document.createElement("div");
      accordionWrapper.className = "accordion-item";

      const header = document.createElement("button");
      header.className = "accordion-header";
      header.innerHTML = `
                <span>${data.name}</span>
                <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            `;

      const content = document.createElement("div");
      content.className = "accordion-content";

      const grid = document.createElement("div");
      grid.className = "selection-grid";

      const sortedParts = Array.from(data.parts.keys()).sort((a, b) => a - b);

      sortedParts.forEach((bagian) => {
        const count = data.parts.get(bagian);
        const id = `chk-${type}-${bagian}`;
        grid.innerHTML += `
                    <div>
                        <input type="checkbox" id="${id}" value="${type}_${bagian}" class="hidden-checkbox">
                        <label for="${id}" class="selection-label">
                            <span class="label-top">Bagian</span>
                            <span class="label-middle">${bagian}</span>
                            <span class="label-bottom">(${count} kata)</span>
                        </label>
                     </div>`;
      });

      content.appendChild(grid);
      accordionWrapper.appendChild(header);
      accordionWrapper.appendChild(content);
      dataSelectionContainer.appendChild(accordionWrapper);
    });
  }

  // === Event Listeners Setup ===
  function setupEventListeners() {
    if (hamburgerButton) {
      hamburgerButton.addEventListener("click", () => {
        const isOpen = hamburgerButton.classList.toggle("open");
        hamburgerButton.setAttribute("aria-expanded", isOpen);
        mobileMenu.classList.toggle("active");
      });
    }

    if (mobileMenu) {
      mobileMenu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          hamburgerButton.classList.remove("open");
          hamburgerButton.setAttribute("aria-expanded", "false");
          mobileMenu.classList.remove("active");
        }
      });
    }

    if (dataSelectionContainer) {
      dataSelectionContainer.addEventListener("click", (e) => {
        const header = e.target.closest(".accordion-header");
        if (header) {
          const content = header.nextElementSibling;
          header.classList.toggle("open");
          content.classList.toggle("open");
        }
      });
    }

    if (startButton) {
      startButton.addEventListener("click", handleStartGame);
    }

    if (shuffleButton) {
      shuffleButton.addEventListener("click", () => {
        isShuffled = !isShuffled;
        /* (DIHAPUS) const span = shuffleButton.querySelector('span'); */
        shuffleButton.classList.toggle("active", isShuffled);
        /* (DIHAPUS) span.textContent = isShuffled ? 'Acak Kartu (Aktif)' : 'Acak Kartu (Mati)'; */

        // (BARU) Update title untuk accessibility
        shuffleButton.setAttribute(
          "title",
          isShuffled ? "Acak Kartu (Aktif)" : "Acak Kartu (Mati)"
        );
      });
    }
  }

  // === (PERUBAHAN BESAR) Logika Game ===

  function handleStartGame() {
    const checkboxes = document.querySelectorAll(
      '#data-selection-container input[type="checkbox"]:checked'
    );

    if (checkboxes.length === 0) {
      selectionError.classList.remove("hidden");
      return;
    }
    selectionError.classList.add("hidden");

    let currentDeck = [];

    checkboxes.forEach((chk) => {
      const [type, bagian] = chk.value.split("_");
      const bagianNum = parseInt(bagian, 10);

      const cardsFromPart = allCards.filter(
        (card) => card.type === type && card.bagian === bagianNum
      );
      currentDeck.push(...cardsFromPart);
    });

    if (currentDeck.length === 0) {
      selectionError.textContent = "Gagal memuat data. (Deck kosong)";
      selectionError.classList.remove("hidden");
      return;
    }

    if (isShuffled) {
      for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
      }
    }

    // (BARU) Simpan ke localStorage dan alihkan halaman
    try {
      // Kita hanya menyimpan deck yang sudah jadi, bukan semua 54 file
      localStorage.setItem("irochoriDeck", JSON.stringify(currentDeck));

      // Alihkan ke session.html
      window.location.href = "session.html";
    } catch (e) {
      console.error("Gagal menyimpan ke localStorage: ", e);
      selectionError.textContent =
        "Gagal memulai sesi. (Penyimpanan browser penuh?)";
      selectionError.classList.remove("hidden");
    }
  }

  // (DIHAPUS) showScreen, displayCard, handleFlip, handleAnswer, handleTTS, showResults, handleExit, handleRestart
  // Semua logika itu dipindahkan ke session.html

  // Fungsi untuk memuat SEMUA data saat awal
  async function loadAllData() {
    const filePaths = [];
    const types = ["X", "Y", "Z"];

    types.forEach((type) => {
      for (let i = 1; i <= 18; i++) {
        filePaths.push(`assets/js/data${type}/data${type}_${i}.js`);
      }
    });

    const results = await Promise.allSettled(
      filePaths.map((url) =>
        fetch(url).then((res) => {
          if (!res.ok) {
            throw new Error(`Gagal memuat ${url}`);
          }
          return res.text();
        })
      )
    );

    allCards = [];
    results.forEach((result) => {
      if (result.status === "fulfilled" && result.value) {
        const cards = parseDataString(result.value);
        allCards.push(...cards);
      } else if (result.status === "rejected") {
        // console.warn(result.reason); // Aman jika file tidak ada
      }
    });

    if (allCards.length === 0) {
      console.error("Tidak ada data kartu yang berhasil dimuat!");
      if (initialLoading) {
        initialLoading.textContent =
          "Gagal memuat data. Periksa folder assets/js/dataX, dataY, dataZ.";
        initialLoading.style.color = "red";
      }
    }
  }

  // --- Inisialisasi Aplikasi ---
  async function initializeApp() {
    setupEventListeners();
    // Tampilkan layar pemilihan (dengan loader)
    if (screens.selection) {
      screens.selection.classList.add("active");
    }
    await loadAllData(); // Mulai unduh semua data
    populateSelectionScreen(); // Setelah selesai, baru isi tombol-tombolnya
  }

  initializeApp(); // Jalankan inisialisasi
});
