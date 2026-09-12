# Struktur Halaman Home — Konserin

Dokumen ini menggambarkan kondisi **aktual** halaman `/` sekarang (bukan spec awal). Untuk konteks bisnis/alur asli, lihat `docs/landing-page-handoff.md` dan `docs/Ticketing_Website_Client_Flow_Overview.pdf` — beberapa detail di sana (palet warna, brand placeholder, belum ada carousel) sudah berubah lewat iterasi desain setelah build awal.

## Stack

- Laravel 13 + Inertia.js + React 19 + TypeScript
- Tailwind CSS v4 (token warna via `@theme` di `resources/css/app.css`)
- Vitest + React Testing Library (33 test, semua di `resources/js/components/marketing/__tests__/` dan `resources/js/__tests__/pages/`)
- Pest/PHPUnit untuk backend (`tests/Feature/HomePageTest.php`)

## Route

Satu route publik: `GET /` → `resources/js/pages/home.tsx` (nama komponen Inertia: `home`). Route lain (`dashboard`, `settings/*`, `auth/*`) adalah bawaan starter kit, di luar scope kerjaan ini (belum ada login/auth beneran, itu scope terpisah per `landing-page-handoff.md`).

## Urutan Section di `home.tsx`

| # | Section | File komponen | Isi |
|---|---|---|---|
| 1 | Nav | `components/marketing/nav.tsx` | Logo "Konserin", link ke 4 section (anchor), toggle dark/light mode, tombol Masuk/Daftar (belum ada tujuan nyata — auth di luar scope), hamburger menu di mobile |
| 2 | Hero | `components/marketing/hero.tsx` | Headline + subheadline, 2 CTA ("Lihat Event Sekarang" → scroll ke `#events`, "Cek Status Order"), trust row, 3 pill tab layanan (dekoratif) |
| 3 | Order Tracking Preview | `components/marketing/order-tracking-preview.tsx` | Contoh kartu status order (Payment/Customer Data/Order Status) |
| 4 | Core Services | `components/marketing/core-services.tsx` + `service-card.tsx` | 3 kartu: Reservation/Jastip, Rent Membership, Ready Stock — tombol WhatsApp di Ready Stock sudah link beneran ke `wa.me` |
| 5 | **Available Concerts** | `components/marketing/available-concerts.tsx` | Carousel horizontal (scroll-snap + tombol panah). Kartu bergaya poster konser (terinspirasi dari section "Don't miss these concerts" di tiket.com) — lebar 3:2, nama artis jadi tipografi besar di atas gradient tone layanan, info bar di bawah (venue/tanggal/harga + CTA). 7 konser fiktif (lihat catatan di bawah); untuk yang Ready Stock, tombol WhatsApp berisi pesan pre-filled sesuai nama konsernya |
| 6 | Problem/Solution | `components/marketing/problem-solution.tsx` | 2 kolom: "Yang sering terjadi" vs "Yang kami perbaiki" |
| 7 | Features Grid | `components/marketing/features-grid.tsx` | 5 fitur akun (harga jelas, pantau status, dst) |
| 8 | FAQ | `components/marketing/faq-accordion.tsx` | Accordion 3 pertanyaan, single-open |
| 9 | CTA Band | `components/marketing/cta-band.tsx` | CTA penutup "Lihat Semua Event" → scroll ke `#events` |
| 10 | Footer | `components/marketing/footer.tsx` | Logo, link nav, kontak WhatsApp (link beneran), copyright dengan tahun dinamis |

Komponen shared/primitive (dipakai di banyak section): `pill-button.tsx`, `pill-badge.tsx`, `brand-logo.tsx`, `section-heading.tsx`, `icons.tsx` (15 ikon hand-rolled, bukan icon library).

## Identitas Brand (Sekarang)

- **Nama:** Konserin (`APP_NAME` di `.env`, dan di `brand-logo.tsx`)
- **Kontak WhatsApp:** `+62 812-3456-7890` — nomor contoh/placeholder yang formatnya realistis, **bukan nomor asli**, didefinisikan satu tempat di `resources/js/lib/whatsapp.ts` (`buildWhatsAppLink()` dipakai di Footer, Ready Stock service card, dan kartu konser Ready Stock)
- **Font:** Plus Jakarta Sans (400–800)

## Design Tokens Saat Ini (`resources/css/app.css`)

Warna aksen sudah diganti dari ungu (spec awal) ke pink/magenta vivid — satu perubahan di sini otomatis nyebar ke semua tombol/badge/highlight:

```css
--color-bg: oklch(99% 0.002 264);
--color-bg-alt: oklch(96.5% 0.004 264);
--color-mkt-card: oklch(100% 0 0);
--color-mkt-border: oklch(90% 0.006 264);
--color-mkt-border-soft: oklch(93% 0.004 264);

--color-text: oklch(22% 0.012 264);
--color-text-muted: oklch(48% 0.012 264);
--color-text-faint: oklch(62% 0.01 264);

--color-mkt-accent: oklch(56% 0.22 345);       /* pink/magenta, dulunya ungu */
--color-mkt-accent-dark: oklch(45% 0.21 345);
--color-mkt-accent-soft: oklch(56% 0.22 345 / 10%);
--color-mkt-accent-soft-2: oklch(56% 0.22 345 / 18%);

--color-warn: oklch(64% 0.16 40);   /* dipakai tone "Ready Stock" */
--color-good: oklch(62% 0.15 150);  /* dipakai status PAID/SUBMITTED */
--color-info: oklch(62% 0.13 220);  /* dipakai tone "Rent Membership" */
```

Token `mkt-*` sengaja dipisah dari token shadcn bawaan starter kit (`--color-border`, `--color-card`, `--color-accent` tanpa prefix) supaya nggak numpuk/nabrak sama styling komponen `resources/js/components/ui/*` (dashboard, login, dll — area yang belum digarap).

## Dark Mode

Toggle-nya ada di `components/marketing/theme-toggle.tsx` (ikon sun/moon hand-rolled, dipasang di Nav — desktop & mobile), pakai hook bawaan starter kit `resources/js/hooks/use-appearance.tsx` (`useAppearance()`) yang sudah handle persist ke `localStorage` + cookie dan dukungan `system` preference. Semua token `mkt-*` di atas punya override di blok `.dark { ... }` (`resources/css/app.css`) dengan nilai yang disesuaikan (background off-black bukan `#000` murni, aksen pink dinaikkan lightness-nya biar tetap kebaca di background gelap) — satu perubahan token nyebar otomatis ke semua section, sama seperti waktu ganti palet ungu → pink.

## Data Konser (Available Concerts)

7 konser di `available-concerts.tsx` semuanya **data fiktif untuk demo** (nama band, venue, tanggal, harga — semuanya rekaan), karena `landing-page-handoff.md` eksplisit minta jangan tampilkan data event asli sebelum ada data beneran dari client. Kalau nanti sudah ada data event asli, tinggal ganti array `concerts` di file itu.

Visual kartu konser pakai gradient poster + ikon (bukan foto), supaya nggak salah tampil foto yang nggak nyambung — bisa diganti foto asli nanti kalau sudah ada.

## Yang Masih Belum Real / Di Luar Scope

- Tombol Nav "Masuk" / "Daftar" belum ke mana-mana — halaman auth/akun customer scope terpisah
- Data konser masih fiktif (lihat di atas)
- Nomor WhatsApp masih contoh, ganti ke nomor asli client sebelum go-live
- Belum ada backend/API — semua di frontend, sesuai scope "frontend only" awal

## Testing

- `npm run test` — 28 test Vitest (satu file test per komponen di `__tests__/`, plus `resources/js/__tests__/pages/home.test.tsx` untuk integrasi seluruh halaman)
- `php artisan test` — 40 test PHPUnit (termasuk `HomePageTest.php` yang cek route `/` render komponen `home`)
- `npm run check` — format + lint (Tailwind class sorting otomatis via `sortTailwindcss`)
