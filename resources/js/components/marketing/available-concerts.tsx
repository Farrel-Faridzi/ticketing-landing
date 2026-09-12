import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';
import { PillButton } from './pill-button';

interface Concert {
    id: string;
    name: string;
    genre: string;
    venue: string;
    date: string;
    priceFrom: string;
    service: 'reservation' | 'membership' | 'stock';
    recommended?: boolean;
}

const serviceMeta: Record<
    Concert['service'],
    { label: string; gradient: string; cta: string }
> = {
    reservation: {
        label: 'Reservation / Jastip',
        gradient: 'from-mkt-accent to-black/90',
        cta: 'Mulai',
    },
    membership: {
        label: 'Rent Membership',
        gradient: 'from-info to-black/90',
        cta: 'Mulai',
    },
    stock: {
        label: 'Ready Stock',
        gradient: 'from-warn to-black/90',
        cta: 'WhatsApp',
    },
};

const concerts: Concert[] = [
    {
        id: 'ilalang-jakarta',
        name: 'Ilalang',
        genre: 'Indie Folk',
        venue: 'Distrik Hall, Jakarta',
        date: '18 Okt 2026',
        priceFrom: 'Rp 275rb',
        service: 'reservation',
        recommended: true,
    },
    {
        id: 'velvet-static-bandung',
        name: 'The Velvet Static',
        genre: 'Alternatif Rock',
        venue: 'Amphitheater Riverside, Bandung',
        date: '25 Okt 2026',
        priceFrom: 'Rp 320rb',
        service: 'membership',
    },
    {
        id: 'kirana-ray-surabaya',
        name: 'Kirana Ray',
        genre: 'Pop',
        venue: 'Grha Sabha, Surabaya',
        date: '2 Nov 2026',
        priceFrom: 'Rp 190rb',
        service: 'reservation',
    },
    {
        id: 'monsoon-radio-jakarta',
        name: 'Monsoon Radio',
        genre: 'Elektronik',
        venue: 'Skyline Arena, Jakarta',
        date: '9 Nov 2026',
        priceFrom: 'Rp 350rb',
        service: 'stock',
    },
    {
        id: 'serigala-senja-yogyakarta',
        name: 'Serigala Senja',
        genre: 'Rock',
        venue: 'Taman Budaya, Yogyakarta',
        date: '16 Nov 2026',
        priceFrom: 'Rp 210rb',
        service: 'membership',
    },
    {
        id: 'nadya-alif-bali',
        name: 'Nadya Alif',
        genre: 'R&B / Soul',
        venue: 'Bali Convention Grounds',
        date: '23 Nov 2026',
        priceFrom: 'Rp 260rb',
        service: 'reservation',
    },
    {
        id: 'awan-tropis-jakarta',
        name: 'Awan Tropis',
        genre: 'Synth Pop',
        venue: 'Kasablanka Live House, Jakarta',
        date: '30 Nov 2026',
        priceFrom: 'Rp 230rb',
        service: 'stock',
    },
];

function ConcertPosterCard({ concert }: { concert: Concert }) {
    const meta = serviceMeta[concert.service];
    const ctaHref =
        concert.service === 'stock'
            ? buildWhatsAppLink(
                  `Halo, saya mau tanya soal tiket ${concert.name} (${concert.date}).`,
              )
            : undefined;

    return (
        <div className="w-[300px] shrink-0 snap-start overflow-hidden rounded-[16px] sm:w-[340px]">
            <div
                className={cn(
                    'relative flex aspect-[3/2] flex-col justify-between bg-gradient-to-br p-5',
                    meta.gradient,
                )}
            >
                <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] font-bold text-white">
                        {meta.label}
                    </span>
                    {concert.recommended && (
                        <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] font-bold text-white">
                            Rekomendasi
                        </span>
                    )}
                </div>
                <div>
                    <div className="text-[11px] font-semibold tracking-wide text-white/70 uppercase">
                        {concert.genre}
                    </div>
                    <h3 className="text-[28px] leading-[1.05] font-extrabold text-white">
                        {concert.name}
                    </h3>
                </div>
            </div>
            <div className="border-mkt-border bg-mkt-card flex items-center justify-between gap-3 border border-t-0 px-5 py-4">
                <div className="text-text-muted text-[12.5px]">
                    <div>{concert.venue}</div>
                    <div className="text-text-faint">
                        {concert.date} &middot; mulai {concert.priceFrom}
                    </div>
                </div>
                {ctaHref ? (
                    <a href={ctaHref} target="_blank" rel="noreferrer">
                        <PillButton size="sm">{meta.cta}</PillButton>
                    </a>
                ) : (
                    <PillButton size="sm">{meta.cta}</PillButton>
                )}
            </div>
        </div>
    );
}

export function AvailableConcerts() {
    const scrollRef = useRef<HTMLDivElement>(null);

    function scrollByCard(direction: -1 | 1) {
        scrollRef.current?.scrollBy({
            left: direction * 356,
            behavior: 'smooth',
        });
    }

    return (
        <div id="events" className="px-6 py-16 md:px-16 md:py-20">
            <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-6">
                <h2 className="text-[28px] font-extrabold md:text-[32px]">
                    Jangan sampai kelewatan{' '}
                    <span aria-hidden="true">&#127908;</span>
                </h2>
                <div className="hidden shrink-0 items-center gap-2.5 md:flex">
                    <button
                        type="button"
                        aria-label="Konser sebelumnya"
                        onClick={() => scrollByCard(-1)}
                        className="border-mkt-border bg-mkt-card hover:border-mkt-accent flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
                    >
                        <ArrowLeftIcon size={18} />
                    </button>
                    <button
                        type="button"
                        aria-label="Konser berikutnya"
                        onClick={() => scrollByCard(1)}
                        className="border-mkt-border bg-mkt-card hover:border-mkt-accent flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
                    >
                        <ArrowRightIcon size={18} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="mx-auto mt-8 flex max-w-[1100px] snap-x snap-mandatory scrollbar-none gap-6 overflow-x-auto pb-2"
            >
                {concerts.map((concert) => (
                    <ConcertPosterCard key={concert.id} concert={concert} />
                ))}
            </div>
        </div>
    );
}
