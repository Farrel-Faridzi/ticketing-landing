import {
    CalendarCheckIcon,
    DotIcon,
    KeyIcon,
    PackageIcon,
    SearchIcon,
    ShieldIcon,
    TicketIcon,
} from './icons';
import { PillBadge } from './pill-badge';
import { PillButton } from './pill-button';

const trustItems = [
    'Order ID di setiap transaksi',
    'Full refund jika ticketing gagal',
    'Semua status bisa dipantau sendiri',
];

export function Hero() {
    return (
        <div className="flex flex-col items-center px-6 py-16 text-center md:px-16 md:py-20">
            <PillBadge className="mb-5">
                <DotIcon size={11} />
                Layanan Tiket Konser Terpercaya
            </PillBadge>

            <h1 className="mb-5 max-w-[760px] text-[36px] leading-[1.15] font-extrabold md:text-[50px] md:leading-[1.12]">
                Nonton konser favoritmu,
                <br />
                <span className="text-mkt-accent">
                    tanpa nunggu balasan chat berkali-kali
                </span>
            </h1>

            <p className="text-text-muted mb-8 max-w-[560px] text-[16px] leading-[1.6] md:text-[17px]">
                Reservation, Rent Membership, dan Ready Stock ada di satu
                tempat. Harga, T&amp;C, dan status order bisa kamu cek sendiri
                lewat akun.
            </p>

            <div className="mb-7 flex flex-wrap justify-center gap-3.5">
                <PillButton>
                    <SearchIcon size={17} />
                    Lihat Event Sekarang
                </PillButton>
                <PillButton variant="outline">
                    <CalendarCheckIcon size={17} />
                    Cek Status Order
                </PillButton>
            </div>

            <div className="text-text-faint mb-10 flex flex-wrap items-center justify-center gap-5 text-[13.5px]">
                {trustItems.map((item, index) => (
                    <div key={item} className="flex items-center gap-3.5">
                        {index > 0 && (
                            <span
                                className="bg-mkt-border h-1 w-1 rounded-full"
                                aria-hidden
                            />
                        )}
                        <span className="flex items-center gap-1.5">
                            <ShieldIcon size={16} className="text-good" />
                            {item}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mb-2.5 flex flex-wrap justify-center gap-2.5">
                <PillButton size="sm">
                    <TicketIcon size={16} />
                    Reservation / Jastip
                </PillButton>
                <PillButton variant="outline" size="sm">
                    <KeyIcon size={16} />
                    Rent Membership
                </PillButton>
                <PillButton variant="outline" size="sm">
                    <PackageIcon size={16} />
                    Ready Stock
                </PillButton>
            </div>
            <a
                href="#reservation"
                className="text-text-faint text-[13.5px] font-semibold"
            >
                Apa bedanya? &rarr;
            </a>
        </div>
    );
}
