import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AvailableConcerts } from '../available-concerts';

describe('AvailableConcerts', () => {
    it('renders the section heading and every concert poster card', () => {
        render(<AvailableConcerts />);

        expect(
            screen.getByRole('heading', {
                level: 2,
                name: /Jangan sampai kelewatan/,
            }),
        ).toBeInTheDocument();

        [
            'Ilalang',
            'The Velvet Static',
            'Kirana Ray',
            'Monsoon Radio',
            'Serigala Senja',
            'Nadya Alif',
            'Awan Tropis',
        ].forEach((name) => {
            expect(
                screen.getByRole('heading', { level: 3, name }),
            ).toBeInTheDocument();
        });

        expect(screen.getByText('Rekomendasi')).toBeInTheDocument();
    });

    it('gives Ready Stock concerts a working WhatsApp link with the concert name in the message', () => {
        render(<AvailableConcerts />);

        const waLinks = screen.getAllByRole('link', { name: 'WhatsApp' });
        expect(waLinks).toHaveLength(2); // Monsoon Radio + Awan Tropis

        const hrefs = waLinks.map((link) => link.getAttribute('href'));
        expect(hrefs.some((href) => href?.includes('Monsoon%20Radio'))).toBe(
            true,
        );
        expect(hrefs.some((href) => href?.includes('Awan%20Tropis'))).toBe(
            true,
        );
        hrefs.forEach((href) => {
            expect(href).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
        });
    });

    it('gives non-stock concerts a plain "Mulai" button with no external link', () => {
        render(<AvailableConcerts />);

        const mulaiButtons = screen.getAllByRole('button', { name: 'Mulai' });
        expect(mulaiButtons).toHaveLength(5);
        mulaiButtons.forEach((button) => {
            expect(button.closest('a')).toBeNull();
        });
    });

    it('scrolls the carousel when the nav buttons are clicked', async () => {
        const { container } = render(<AvailableConcerts />);
        const scrollContainer = container.querySelector('.snap-x');
        expect(scrollContainer).toBeInTheDocument();

        // jsdom doesn't implement scrollBy; stub it to confirm the handler fires.
        const scrollBySpy = vi.fn();
        (scrollContainer as HTMLElement).scrollBy = scrollBySpy;

        const user = userEvent.setup();
        await user.click(
            screen.getByRole('button', { name: 'Konser berikutnya' }),
        );
        expect(scrollBySpy).toHaveBeenCalledWith(
            expect.objectContaining({ left: 356 }),
        );

        await user.click(
            screen.getByRole('button', { name: 'Konser sebelumnya' }),
        );
        expect(scrollBySpy).toHaveBeenCalledWith(
            expect.objectContaining({ left: -356 }),
        );
    });
});
