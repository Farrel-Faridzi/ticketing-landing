# Konserin — Landing Page

Landing page publik untuk layanan jastip tiket konser (Reservation/Jastip, Rent Membership, Ready Stock). Frontend-only sesuai scope awal — belum ada backend/API/auth beneran.

Untuk struktur halaman secara detail (urutan section, file komponen, design token), lihat [`docs/webpage-structure.md`](docs/webpage-structure.md). Untuk spec bisnis/alur asli dari client, lihat [`docs/landing-page-handoff.md`](docs/landing-page-handoff.md) dan [`docs/Ticketing_Website_Client_Flow_Overview.pdf`](docs/Ticketing_Website_Client_Flow_Overview.pdf).

## Stack

- Laravel 13 + Inertia.js + React 19 + TypeScript
- Tailwind CSS v4
- Vitest + React Testing Library (frontend), PHPUnit (backend)

## Menjalankan Secara Lokal

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
composer run dev   # jalanin artisan serve + vite + queue listener sekaligus
```

Buka `http://localhost:8000`.

Testing:

```bash
npm run test        # 33 test Vitest
php artisan test    # 40 test PHPUnit
npm run check:fix   # format + lint
```

## Apa Saja yang Telah Dilakukan

### 1. Scaffold awal

Project di-scaffold dari Laravel React starter kit resmi (Inertia + React 19 + TypeScript + Tailwind v4 + shadcn-style primitives). Dokumen referensi client (handoff + PDF alur bisnis + mockup canvas) disalin ke `docs/`.

### 2. Design system & komponen inti

- Design token warna (oklch) dan font Plus Jakarta Sans dipasang di `resources/css/app.css`, dengan token `mkt-*` yang sengaja dipisah dari token shadcn bawaan starter kit supaya nggak nabrak styling dashboard/auth.
- 4 komponen primitive (`PillButton`, `PillBadge`, `BrandLogo`, `SectionHeading`) dan 1 set ikon hand-rolled (bukan icon library) dibangun sebagai fondasi semua section.
- Vitest + React Testing Library dipasang, satu test per komponen sejak awal.

### 3. Sembilan section halaman Home

Nav, Hero, Order Tracking Preview, Core Services, Problem/Solution, Features Grid, FAQ Accordion, CTA Band, dan Footer dibangun satu per satu (masing-masing dengan test-nya sendiri), lalu dirakit jadi satu halaman `home.tsx` dan route `/` di-wire ke situ.

### 4. Perbaikan pasca-review

Review menyeluruh terhadap branch menemukan dan memperbaiki: file yang gagal format-check bawaan repo, satu rule CSS global yang secara nggak sengaja merusak dark mode di halaman dashboard/auth bawaan starter kit, test suite frontend yang belum ke-wire ke CI, dan lebar grid Core Services yang nggak konsisten sama section lain.

### 5. Fitur "Available Concerts"

Ditambahkan section baru yang nggak ada di spec awal — daftar konser yang bisa di-scroll, dengan data fiktif (nama band/venue rekaan, sesuai instruksi client buat nggak nampilin data event asli sebelum ada data beneran).

### 6. Redesign visual

- Palet warna aksen diganti dari ungu ke pink/magenta (satu token berubah, nyebar otomatis ke semua section).
- Tampilan konser diubah jadi carousel horizontal dengan tombol navigasi.
- Placeholder `[NAMA BRAND]` dan `[NOMOR WHATSAPP]` diganti jadi identitas beneran ("Konserin" + nomor contoh), dan tombol WhatsApp di-wire jadi link `wa.me` yang beneran jalan (termasuk pesan pre-filled sesuai nama konser untuk kartu Ready Stock).
- Foto stock generik yang nggak nyambung sama konten diganti jadi kartu poster (gradient tone layanan + tipografi), sebelum akhirnya di-redesign ulang meniru pola kartu poster landscape di section "Don't miss these concerts" milik tiket.com (riset langsung ke situsnya, bukan dari ingatan).

### 7. Dark mode

Toggle light/dark ditambahkan di Nav, memakai hook `useAppearance` bawaan starter kit yang sebelumnya cuma dipakai halaman dashboard. Semua token warna marketing (`mkt-*`) diberi nilai dark-mode yang konsisten dengan brand (bukan cuma invert warna).

### 8. Dokumentasi

`docs/webpage-structure.md` dibuat dan terus di-update supaya selalu mencerminkan kondisi halaman yang sebenarnya (beda dari `landing-page-handoff.md` yang merupakan spec awal sebelum semua iterasi di atas).

## Yang Masih Belum Real / Di Luar Scope

- Tombol Nav "Masuk" / "Daftar" belum ke mana-mana — area akun customer & admin scope terpisah
- Data konser masih fiktif, tinggal ganti array `concerts` di `available-concerts.tsx` kalau sudah ada data asli
- Nomor WhatsApp (`resources/js/lib/whatsapp.ts`) masih nomor contoh, ganti ke nomor asli client sebelum go-live
- Belum ada backend/API — frontend only sesuai scope awal
