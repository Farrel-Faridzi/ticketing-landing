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
});
