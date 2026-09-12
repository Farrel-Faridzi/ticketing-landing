import { useState } from 'react';
import { BrandLogo } from './brand-logo';
import { PillButton } from './pill-button';
import { ThemeToggle } from './theme-toggle';

const links = [
    { href: '#reservation', label: 'Reservation' },
    { href: '#membership', label: 'Rent Membership' },
    { href: '#stock', label: 'Ready Stock' },
    { href: '#faq', label: 'FAQ' },
];

export function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-mkt-border-soft border-b">
            <div className="flex items-center justify-between px-6 py-5 md:px-16">
                <BrandLogo />

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-text-muted hover:text-text text-[14.5px] font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-4 md:flex">
                    <ThemeToggle />
                    <a
                        href="#"
                        className="text-text text-[14.5px] font-semibold"
                    >
                        Masuk
                    </a>
                    <PillButton size="sm">Daftar</PillButton>
                </div>

                <div className="flex items-center gap-2.5 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        aria-label={open ? 'Tutup menu' : 'Buka menu'}
                        className="border-mkt-border flex h-9 w-9 items-center justify-center rounded-full border"
                        onClick={() => setOpen((value) => !value)}
                    >
                        <div className="flex flex-col gap-1" aria-hidden>
                            <span className="bg-text h-[2px] w-4" />
                            <span className="bg-text h-[2px] w-4" />
                        </div>
                    </button>
                </div>
            </div>

            {open && (
                <div
                    data-testid="mobile-nav-menu"
                    className="border-mkt-border-soft flex flex-col gap-4 border-t px-6 py-5 md:hidden"
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-text-muted text-[14.5px] font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="text-text text-[14.5px] font-semibold"
                    >
                        Masuk
                    </a>
                    <PillButton size="sm" className="w-full justify-center">
                        Daftar
                    </PillButton>
                </div>
            )}
        </div>
    );
}
