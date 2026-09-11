import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CoreServices } from '../core-services';

describe('CoreServices', () => {
    it('renders all three service cards with the section heading', () => {
        render(<CoreServices />);
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: '3 cara dapetin tiket impianmu',
            }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'Reservation / Jastip' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'Rent Membership' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'Ready Stock' }),
        ).toBeInTheDocument();
        expect(
            screen.getAllByRole('button', { name: 'Cara Kerja' }),
        ).toHaveLength(2);
        expect(
            screen.getByRole('button', { name: 'Lihat Stock' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'WhatsApp' }),
        ).toBeInTheDocument();
    });

    it('wires each service card to its correct icon variant', () => {
        // Locks down iconVariant wiring, which TypeScript can't verify since
        // it's spread from a data array: a swap/regression here would
        // compile fine and pass every other test silently.
        const { container } = render(<CoreServices />);

        // reservation -> TicketIcon with withDivider: true -> 2 <path>s
        const reservationCard = container.querySelector('#reservation');
        expect(reservationCard).toBeInTheDocument();
        expect(reservationCard?.querySelectorAll('path')).toHaveLength(2);

        // membership -> KeyIcon (no variant) -> 1 <path>
        const membershipCard = container.querySelector('#membership');
        expect(membershipCard).toBeInTheDocument();
        expect(membershipCard?.querySelectorAll('path')).toHaveLength(1);

        // stock -> PackageIcon with withCenterLine: true -> 3 <path>s
        const stockCard = container.querySelector('#stock');
        expect(stockCard).toBeInTheDocument();
        expect(stockCard?.querySelectorAll('path')).toHaveLength(3);
    });
});
