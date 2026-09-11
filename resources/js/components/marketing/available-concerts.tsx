import { cn } from '@/lib/utils';
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
    featured?: boolean;
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
        featured: true,
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
];

function ConcertImage({
    seed,
    tint,
    className,
}: {
    seed: string;
    tint: string;
    className?: string;
}) {
    return (
        <div className={cn('relative overflow-hidden', className)}>
            <img
                src={`https://picsum.photos/seed/${seed}/900/700`}
                alt=""
                width={900}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover"
            />
            <div className={cn('absolute inset-0 mix-blend-multiply', tint)} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
    );
}

function ConcertCard({ concert }: { concert: Concert }) {
    const meta = serviceMeta[concert.service];

    return (
        <div className="border-mkt-border bg-mkt-card flex flex-col overflow-hidden rounded-[18px] border">
            <ConcertImage
                seed={concert.imageSeed}
                tint={meta.tint}
                className="aspect-[4/3]"
            />
            <div className="flex flex-1 flex-col gap-3 p-6">
                <PillBadge tone={meta.tone} className="self-start">
                    {meta.label}
                </PillBadge>
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
    const [featured, ...rest] = concerts;
    const featuredMeta = serviceMeta[featured.service];

    return (
        <div id="events" className="px-6 py-16 md:px-16 md:py-20">
            <div className="mx-auto mb-10 max-w-[600px] text-center">
                <h2 className="text-[32px] font-extrabold">
                    Event yang lagi dibuka
                </h2>
                <p className="text-text-muted mt-3 text-[15px] leading-[1.6]">
                    Cek jadwal konser minggu ini, lalu klik buat lihat harga dan
                    cara pesannya.
                </p>
            </div>

            <div className="mx-auto max-w-[1100px]">
                <div className="border-mkt-border bg-mkt-card grid grid-cols-1 overflow-hidden rounded-[20px] border md:grid-cols-2">
                    <ConcertImage
                        seed={featured.imageSeed}
                        tint={featuredMeta.tint}
                        className="aspect-[4/3] md:aspect-auto"
                    />
                    <div className="flex flex-col justify-center gap-4 p-8">
                        <PillBadge
                            tone={featuredMeta.tone}
                            className="self-start"
                        >
                            {featuredMeta.label}
                        </PillBadge>
                        <div>
                            <h3 className="text-[24px] font-extrabold">
                                {featured.name}
                            </h3>
                            <p className="text-text-faint text-[14px]">
                                {featured.genre}
                            </p>
                        </div>
                        <div className="text-text-muted flex flex-col gap-1 text-[14.5px]">
                            <span>{featured.venue}</span>
                            <span>{featured.date}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <div>
                                <div className="text-text-faint text-[12px]">
                                    Mulai dari
                                </div>
                                <div className="text-[18px] font-bold">
                                    {featured.priceFrom}
                                </div>
                            </div>
                            <PillButton>{featuredMeta.cta}</PillButton>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {rest.map((concert) => (
                        <ConcertCard key={concert.id} concert={concert} />
                    ))}
                </div>
            </div>
        </div>
    );
}
