import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { ThemeToggle } from '../theme-toggle';

describe('ThemeToggle', () => {
    afterEach(() => {
        document.documentElement.classList.remove('dark');
    });

    it('toggles the dark class and its own label on successive clicks', async () => {
        const user = userEvent.setup();
        render(<ThemeToggle />);

        // Starting state resolves from system preference (stubbed to light
        // in tests), so the button should offer to switch to dark first.
        const toggle = screen.getByRole('button', {
            name: /Ganti ke mode (gelap|terang)/,
        });
        const startedDark = document.documentElement.classList.contains('dark');
        expect(toggle).toHaveAccessibleName(
            startedDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap',
        );

        await user.click(toggle);
        expect(document.documentElement.classList.contains('dark')).toBe(
            !startedDark,
        );
        expect(
            screen.getByRole('button', {
                name: startedDark
                    ? 'Ganti ke mode gelap'
                    : 'Ganti ke mode terang',
            }),
        ).toBeInTheDocument();

        await user.click(
            screen.getByRole('button', {
                name: startedDark
                    ? 'Ganti ke mode gelap'
                    : 'Ganti ke mode terang',
            }),
        );
        expect(document.documentElement.classList.contains('dark')).toBe(
            startedDark,
        );
    });
});
