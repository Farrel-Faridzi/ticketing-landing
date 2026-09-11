import { BrandLogo } from './brand-logo';

const links = [
    { href: '#reservation', label: 'Reservation' },
    { href: '#membership', label: 'Rent Membership' },
    { href: '#stock', label: 'Ready Stock' },
    { href: '#faq', label: 'FAQ' },
];

export function Footer() {
    return (
        <div className="flex flex-col items-center gap-4.5 px-6 py-11 text-center">
            <BrandLogo size="sm" />
            <div className="flex flex-wrap justify-center gap-6.5">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-text-faint text-[13.5px]"
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#" className="text-text-faint text-[13.5px]">
                    [NOMOR WHATSAPP]
                </a>
            </div>
            <div className="text-text-faint text-[12.5px]">
                &copy; {new Date().getFullYear()} [NAMA BRAND]. Semua hak
                dilindungi.
            </div>
        </div>
    );
}
