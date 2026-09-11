import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';
import { PillBadge, type PillBadgeProps } from './pill-badge';
import { PillButton } from './pill-button';

interface Concert {
    id: string;
    name: string;
    genre: string;
    venue: string;
    date: string;
    priceFrom: string;
    imageSeed: string;
    service: 'reservation' | 'membership' | 'stock';
    recommended?: boolean;
}

const serviceMeta: Record<
    Concert['service'],
    { label: string; tone: PillBadgeProps['tone']; tint: string; cta: string }
> = {
    reservation: {
        label: 'Reservation / Jastip',
        tone: 'accent',
        tint: 'bg-mkt-accent/30',
        cta: 'Mulai',
    },
    membership: {
        label: 'Rent Membership',
        tone: 'info',
        tint: 'bg-info/25',
        cta: 'Mulai',
    },
    stock: {
        label: 'Ready Stock',
        tone: 'warn',
        tint: 'bg-warn/25',
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
        imageSeed: 'ilalang-indie-folk-stage-jakarta',
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
        imageSeed: 'velvet-static-rock-bandung',
        service: 'membership',
    },
    {
        id: 'kirana-ray-surabaya',
        name: 'Kirana Ray',
        genre: 'Pop',
        venue: 'Grha Sabha, Surabaya',
        date: '2 Nov 2026',
        priceFrom: 'Rp 190rb',
        imageSeed: 'kirana-ray-pop-surabaya',
        service: 'reservation',
    },
    {
        id: 'monsoon-radio-jakarta',
        name: 'Monsoon Radio',
        genre: 'Elektronik',
        venue: 'Skyline Arena, Jakarta',
        date: '9 Nov 2026',
        priceFrom: 'Rp 350rb',
        imageSeed: 'monsoon-radio-electronic-jakarta',
        service: 'stock',
    },
    {
        id: 'serigala-senja-yogyakarta',
        name: 'Serigala Senja',
        genre: 'Rock',
        venue: 'Taman Budaya, Yogyakarta',
        date: '16 Nov 2026',
        priceFrom: 'Rp 210rb',
        imageSeed: 'serigala-senja-rock-yogyakarta',
        service: 'membership',
    },
    {
        id: 'nadya-alif-bali',
        name: 'Nadya Alif',
        genre: 'R&B / Soul',
        venue: 'Bali Convention Grounds',
        date: '23 Nov 2026',
        priceFrom: 'Rp 260rb',
        imageSeed: 'nadya-alif-rnb-bali',
        service: 'reservation',
    },
    {
        id: 'awan-tropis-jakarta',
        name: 'Awan Tropis',
        genre: 'Synth Pop',
        venue: 'Kasablanka Live House, Jakarta',
        date: '30 Nov 2026',
        priceFrom: 'Rp 230rb',
        imageSeed: 'awan-tropis-synth-pop-jakarta',
        service: 'stock',
    },
];

function ConcertCard({ concert }: { concert: Concert }) {
    const meta = serviceMeta[concert.service];

    return (
        <div className="border-mkt-border bg-mkt-card flex w-[270px] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] border sm:w-[300px]">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={`https://picsum.photos/seed/${concert.imageSeed}/700/560`}
                    alt=""
                    width={700}
                    height={560}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
                <div
                    className={cn(
                        'absolute inset-0 mix-blend-multiply',
                        meta.tint,
                    )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-2">
                    <PillBadge tone={meta.tone}>{meta.label}</PillBadge>
                    {concert.recommended && (
                        <PillBadge tone="accent">Rekomendasi</PillBadge>
                    )}
                </div>
                <div>
                    <h3 className="text-[17px] font-bold">{concert.name}</h3>
                    <p className="text-text-faint text-[13px]">
                        {concert.genre}
                    </p>
                </div>
                <div className="text-text-muted flex flex-col gap-1 text-[13.5px]">
                    <span>{concert.venue}</span>
                    <span>{concert.date}</span>
                </div>
                <div className="mt-auto flex items-center justify-between pt-2">
                    <div>
                        <div className="text-text-faint text-[11.5px]">
                            Mulai dari
                        </div>
                        <div className="text-[15px] font-bold">
                            {concert.priceFrom}
                        </div>
                    </div>
                    <PillButton size="sm">{meta.cta}</PillButton>
                </div>
            </div>
        </div>
    );
}

export function AvailableConcerts() {
    const scrollRef = useRef<HTMLDivElement>(null);

    function scrollByCard(direction: -1 | 1) {
        scrollRef.current?.scrollBy({
            left: direction * 316,
            behavior: 'smooth',
        });
    }

    return (
        <div id="events" className="px-6 py-16 md:px-16 md:py-20">
            <div className="mx-auto flex max-w-[1100px] items-end justify-between gap-6">
                <div>
                    <h2 className="text-[28px] font-extrabold md:text-[32px]">
                        Event yang lagi dibuka
                    </h2>
                    <p className="text-text-muted mt-2 max-w-[440px] text-[15px] leading-[1.6]">
                        Geser buat lihat konser lainnya, klik kartunya buat cek
                        harga dan cara pesannya.
                    </p>
                </div>
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
                    <ConcertCard key={concert.id} concert={concert} />
                ))}
            </div>
        </div>
    );
}
