# ☁️ Website Pameran DTP - Stand Cloud Engineer

Website statis interaktif yang dirancang khusus untuk pameran **Digital Talent Program (DTP)** SMK konsentrasi **Cloud Engineer**, ditujukan bagi pengunjung awam, siswa SMK, dan guru.

---

## 🎨 Konsep & Desain
- **Gaya Desain**: Mengikuti referensi foto 1 (*Deflexai*) — tampilan modern, *ultra-clean*, berlatar terang dengan aksen *concentric orbital rings*, *floating tool badges*, dan *card notification*.
- **Konten**: Mengacu penuh pada slide kurikulum materi di foto 2 (Core Skills, Kompetensi Pendukung, Prospek Karir, dan Ekosistem Tools).
- **Tujuan**: Informatif & edukatif (bukan pendaftaran). Bahasa disesuaikan agar mudah dipahami orang awam dengan analogi dunia nyata.
- **Interaksi Tambahan**: Terintegrasi langsung dengan mini-game pameran `Cloud Catcher` melalui tombol & modal interaktif!

---

## 📁 Struktur File di VS Code

```
e/
├── index.html                           # Halaman utama pameran
├── style.css                            # Gaya visual & animasi orbit/float
├── script.js                            # Logika interaktif (filter tab, accordion, modal game)
├── Cloud Catcher – CLOUDHUB (1).html    # Game stand pameran
└── README.md                            # Panduan ini
```

---

## 🚀 Cara Menjalankan di Local / VS Code

Kamu bisa menjalankannya dengan salah satu dari 2 cara mudah berikut:

### Cara 1 (Paling Cepat):
1. Buka folder proyek ini di **File Explorer**.
2. Klik ganda (double click) file **`index.html`**.
3. File akan langsung terbuka di browser (Chrome, Edge, Firefox, dll).

### Cara 2 (Menggunakan VS Code Live Server):
1. Buka folder ini di **VS Code**.
2. Klik kanan pada file `index.html`.
3. Pilih **"Open with Live Server"** (jika ekstensi Live Server terpasang).
4. Browser akan terbuka otomatis di alamat `http://127.0.0.1:5500/index.html`.

---

## 🛠️ Tech Stack
- **HTML5**: Semantik, terstruktur rapi dengan komentar penjelas.
- **Tailwind CSS (CDN)**: Desain responsif, clean font (*Plus Jakarta Sans*), dan palet warna netral/biru lembut.
- **Vanilla JavaScript**: Tanpa framework berat, ringan untuk komputer lokal di stand pameran.
