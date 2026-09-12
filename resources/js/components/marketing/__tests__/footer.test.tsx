import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from '../footer';

describe('Footer', () => {
    it('renders nav links, a working WhatsApp link, and the copyright line', () => {
        render(<Footer />);
        ['Reservation', 'Rent Membership', 'Ready Stock', 'FAQ'].forEach(
            (label) => {
                expect(
                    screen.getByRole('link', { name: label }),
                ).toBeInTheDocument();
            },
        );
        const whatsappLink = screen.getByRole('link', {
            name: '+62 812-3456-7890',
        });
        expect(whatsappLink).toBeInTheDocument();
        expect(whatsappLink).toHaveAttribute(
            'href',
            expect.stringContaining('https://wa.me/6281234567890'),
        );
        expect(
            screen.getByText(new RegExp(`© ${new Date().getFullYear()}`)),
        ).toBeInTheDocument();
    });
});
