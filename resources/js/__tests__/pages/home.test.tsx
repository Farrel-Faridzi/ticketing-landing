import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@inertiajs/react', () => ({ Head: () => null }));

import Home from '../../pages/home';

describe('Home page', () => {
    it('renders every landing-page section in order', () => {
        render(<Home />);
        // Both Nav and Footer render a "Reservation" link (#reservation),
        // so two matches confirms Nav rendered rather than just Footer.
        expect(
            screen.getAllByRole('link', { name: 'Reservation' }),
        ).toHaveLength(2);
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
                name: 'Biar kamu nggak nunggu, dan tim kami nggak kebanjiran chat',
            }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                name: 'Nggak perlu chat berkali-kali buat tau ini',
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
        expect(screen.getByText('+62 812-3456-7890')).toBeInTheDocument();
    });
});
