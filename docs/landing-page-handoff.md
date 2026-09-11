# Landing Page Handoff — Ticketing Website (Reservation / Rent Membership / Ready Stock)

Dokumen ini untuk dibawa ke Claude Code (stack Laravel Inertia + React, frontend only). Isinya: konteks proyek, design tokens dari mockup, dan breakdown konten per section. Sumber alur bisnis: `Ticketing_Website_Client_Flow_Overview.pdf` (taruh juga file itu di repo, misal di `docs/`).

Mockup referensi visual: canvas Claude Design (light theme, aksen violet, terinspirasi dari bunnyticket.co) — export PNG per section dari canvas itu dan taruh di `docs/design/` sebagai referensi visual tambahan.

## 1. Konteks Proyek

Website untuk layanan jastip tiket konser dengan 3 core service:

- **Reservation / Jastip** — customer bayar di website, tim yang proses ticketing secara manual (ambil antrean, dsb).
- **Rent Membership** — bukan subscription. Customer beli akses berupa satu kode membership untuk satu event, kode di-assign otomatis oleh sistem.
- **Ready Stock** — katalog ticket yang sudah tersedia. Closing transaksi tetap manual lewat WhatsApp (bukan checkout online).

Tujuan utama landing page: mengurangi pertanyaan berulang (harga, T&C, cara kerja, status order) dengan menaruh semua informasi itu di website, plus memberi customer akun untuk memantau status order sendiri.

Scope halaman ini: **halaman publik, bisa diakses tanpa login** (Home). Area akun customer (My Orders, dsb) dan area admin adalah scope terpisah, belum dikerjakan di sini.

## 2. Tech Stack

- Laravel + Inertia.js + React (frontend only, backend/API di luar scope kerjaan ini)
- Belum ada design system / komponen existing — dibangun dari nol

## 3. Design Tokens

Font: **Plus Jakarta Sans** (Google Fonts), weight 400–800. Satu font family untuk heading dan body.

```css
--bg: oklch(99% 0.002 264);          /* putih agak hangat */
--bg-alt: oklch(96.5% 0.004 264);    /* section background alternatif */
--card: oklch(100% 0 0);             /* putih murni untuk card */
--border: oklch(90% 0.006 264);
--border-soft: oklch(93% 0.004 264);

--text: oklch(22% 0.012 264);        /* teks utama */
--text-muted: oklch(48% 0.012 264);  /* teks sekunder / deskripsi */
--text-faint: oklch(62% 0.01 264);   /* teks tersier / caption */

--accent: oklch(58% 0.19 292);       /* violet, warna utama CTA */
--accent-dark: oklch(48% 0.19 292);  /* hover / teks di atas accent-soft */
--accent-soft: oklch(58% 0.19 292 / 10%);   /* background ikon/badge */
--accent-soft-2: oklch(58% 0.19 292 / 18%);

--warn: oklch(64% 0.16 40);          /* amber, dipakai utk Ready Stock */
--warn-soft: oklch(64% 0.16 40 / 12%);
--good: oklch(62% 0.15 150);         /* hijau, status PAID/SUBMITTED */
--good-soft: oklch(62% 0.15 150 / 14%);
--info: oklch(62% 0.13 220);         /* biru, status PROCESSING */
--info-soft: oklch(62% 0.13 220 / 14%);
```

Komponen dasar:
- **Button**: pill shape (`border-radius: 999px`), padding ±13px/26px, font-weight 700. Variant solid (background accent, teks putih) dan outline (border 1px `--border`, background card).
- **Badge**: pill kecil, padding ±7px/16px, font-weight 700, font-size 13px. Warna mengikuti konteks (accent-soft untuk eyebrow label, good/info/warn-soft untuk status).
- **Card**: border 1px `--border`, border-radius 18px (card besar) / 12–14px (card kecil seperti FAQ item).
- Radius besar (14–20px) dan warna lembut/soft-tint konsisten dipakai untuk kesan "clean & trustworthy", bukan flat/tajam.

## 4. Breakdown Halaman & Copy

### Nav
Logo `[NAMA BRAND]` (placeholder, ganti sesuai brand asli) + link: Reservation, Rent Membership, Ready Stock, FAQ. Kanan: link "Masuk" + button pill "Daftar".

### Hero
- Badge eyebrow: "Layanan Tiket Konser Terpercaya"
- Headline (dua baris, baris kedua warna accent): "Nonton konser favoritmu," / "tanpa nunggu balasan chat berkali-kali"
- Subheadline: "Reservation, Rent Membership, dan Ready Stock ada di satu tempat. Harga, T&C, dan status order bisa kamu cek sendiri lewat akun."
- CTA primary: "Lihat Event Sekarang" (solid). CTA secondary: "Cek Status Order" (outline).
- Trust row (3 item, dipisah dot): "Order ID di setiap transaksi" · "Full refund jika ticketing gagal" · "Semua status bisa dipantau sendiri"
- Service pill tabs (visual switcher, non-fungsional di mockup): Reservation/Jastip (aktif), Rent Membership, Ready Stock — plus link "Apa bedanya? →"

### Order Tracking Preview (card)
Contoh tampilan status "My Orders": Order ID #RSV-20441, badge PROCESSING. 3 baris status: Payment → Berhasil (PAID), Customer Data → Lengkap (SUBMITTED), Order Status → Sedang diproses tim (PROCESSING).

### Core Services (3 card)
Tiap card: icon, judul, 1 kalimat deskripsi, 4 langkah alur, 2 button di footer card (outline + solid).

1. **Reservation / Jastip** — "Bayar di website, tim kami yang urus proses ticketing-nya sampai selesai." Langkah: Pilih event & kategori ticket → Baca T&C, lanjut bayar → Lengkapi data ticketing → Tim proses, kamu pantau statusnya. Button: "Cara Kerja" / "Mulai".
2. **Rent Membership** — "Bukan subscription. Pilih satu event, beli akses berupa satu kode membership." Langkah: Pilih event, cek cara kerja → Bayar → Sistem assign 1 kode otomatis → Kode langsung muncul di akunmu. Button: "Cara Kerja" / "Mulai".
3. **Ready Stock** — "Katalog ticket yang sudah siap. Closing tetap manual lewat WhatsApp." Langkah: Lihat stock, seat & harga → Klik WhatsApp/Hubungi Kami → Closing manual sama tim → Ticket ditandai Sold. Button: "Lihat Stock" / "WhatsApp".

### Problem / Solution (2 kolom)
**Yang sering terjadi**: Customer ramai, banyak pertanyaan nggak sempat terjawab · Pertanyaan harga/T&C/cara kerja sering berulang · Kode membership dikelola & dikirim manual satu-satu · Detail order jastip antar-customer suka tertukar.

**Yang kami perbaiki**: Harga, T&C, cara kerja, dan FAQ tersedia langsung di website · Status order bisa dipantau sendiri lewat akun · Kode membership tercatat jelas, kelihatan siapa penerimanya · Setiap order jastip punya Order ID dan detail sendiri.

### Features grid (5 item)
Harga & T&C jelas · Pantau status sendiri · Kode membership tercatat · Order ID sendiri-sendiri · WhatsApp buat yang khusus aja (Ready Stock + pertanyaan di luar FAQ).

### FAQ (3 item, style accordion)
1. "Setelah bayar, apakah saya harus konfirmasi lewat chat?" → "Nggak perlu. Order otomatis masuk ke tim begitu pembayaran berhasil dan data ticketing kamu sudah lengkap."
2. "Kalau proses ticketing gagal, apa saya dapat refund?" → "Full refund diberikan kalau proses ticketing gagal. Untuk kondisi lain berlaku ketentuan yang ada di T&C."
3. "Apa Rent Membership itu subscription bulanan?" → "Bukan. Kamu beli akses berupa satu kode membership untuk satu event, bukan langganan rutin."

### CTA band
"Siap nonton konser favoritmu?" + deskripsi singkat + button "Lihat Semua Event".

### Footer
Logo + link nav yang sama + placeholder kontak `[NOMOR WHATSAPP]` + copyright `[NAMA BRAND]`.

## 5. Yang Masih Placeholder (isi sebelum go-live)

- `[NAMA BRAND]` — nama brand/logo asli
- `[NOMOR WHATSAPP]` — kontak WhatsApp asli
- Belum ada data event/ticket asli (mockup tidak menampilkan listing event nyata, sengaja dihindari supaya nggak ada data fiktif)
- Metode pembayaran, alur refund detail, dan beberapa gap lain masih perlu dikonfirmasi ke client (lihat catatan review flow sebelumnya)

## 6. Catatan Implementasi untuk Claude Code

- Ini styling reference (HTML + inline style dari canvas), bukan kode React — perlu ditulis ulang sebagai komponen React + Tailwind (atau CSS module) sesuai konvensi project, bukan copy-paste langsung.
- Icon di mockup adalah inline SVG stroke-based (24px grid, stroke-width ~1.6–2, round cap/join) — kalau mau konsisten, pertahankan gaya ini atau ganti dengan icon library yang gaya serupa (misal Lucide).
- Semua warna di atas pakai `oklch()` — kalau Tailwind versi project belum support oklch di config, convert ke hex/hsl terlebih dulu.
