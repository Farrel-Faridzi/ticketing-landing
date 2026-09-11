import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from '../footer';

describe('Footer', () => {
    it('renders nav links, the WhatsApp placeholder, and the copyright line', () => {
        render(<Footer />);
        ['Reservation', 'Rent Membership', 'Ready Stock', 'FAQ'].forEach(
            (label) => {
                expect(
                    screen.getByRole('link', { name: label }),
                ).toBeInTheDocument();
            },
        );
        expect(
            screen.getByRole('link', { name: '[NOMOR WHATSAPP]' }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(new RegExp(`© ${new Date().getFullYear()}`)),
        ).toBeInTheDocument();
    });
});
