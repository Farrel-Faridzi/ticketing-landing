import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrandLogo } from '../brand-logo';

describe('BrandLogo', () => {
    it('renders the bracketed brand placeholder with an accent-colored segment', () => {
        render(<BrandLogo />);
        expect(screen.getByText('[NAMA')).toBeInTheDocument();
        const accentSpan = screen.getByText('BRAND]');
        expect(accentSpan.className).toContain('text-mkt-accent');
    });
});
