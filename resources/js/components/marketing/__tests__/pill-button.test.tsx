import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PillButton } from '../pill-button';

describe('PillButton', () => {
    it('renders solid variant by default with rounded-full pill shape', () => {
        render(<PillButton>Daftar</PillButton>);
        const button = screen.getByRole('button', { name: 'Daftar' });
        expect(button.className).toContain('rounded-full');
        expect(button.className).toContain('bg-mkt-accent');
    });

    it('renders outline variant', () => {
        render(<PillButton variant="outline">Cek Status Order</PillButton>);
        const button = screen.getByRole('button', { name: 'Cek Status Order' });
        expect(button.className).toContain('border-mkt-border');
    });
});
