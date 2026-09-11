import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@inertiajs/react', () => ({ Head: () => null }));

import Home from '../home';

describe('Home page', () => {
    it('renders every landing-page section in order', () => {
        render(<Home />);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
        expect(screen.getByText('Order ID #RSV-20441')).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: '3 cara dapetin tiket impianmu',
            }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: 'Yang sering ditanyakan',
            }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                name: 'Siap nonton konser favoritmu?',
            }),
        ).toBeInTheDocument();
        expect(screen.getByText('[NOMOR WHATSAPP]')).toBeInTheDocument();
    });
});
