import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Nav } from '../nav';

describe('Nav', () => {
    it('renders the four section links and auth actions', () => {
        render(<Nav />);
        ['Reservation', 'Rent Membership', 'Ready Stock', 'FAQ'].forEach(
            (label) => {
                expect(
                    screen.getByRole('link', { name: label }),
                ).toBeInTheDocument();
            },
        );
        expect(screen.getByRole('link', { name: 'Masuk' })).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'Daftar' }),
        ).toBeInTheDocument();
    });

    it('toggles the mobile menu open and closed', async () => {
        const user = userEvent.setup();
        render(<Nav />);
        const toggle = screen.getByRole('button', { name: 'Buka menu' });
        expect(screen.queryByTestId('mobile-nav-menu')).not.toBeInTheDocument();

        await user.click(toggle);
        expect(screen.getByTestId('mobile-nav-menu')).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'Tutup menu' }));
        expect(screen.queryByTestId('mobile-nav-menu')).not.toBeInTheDocument();
    });
});
