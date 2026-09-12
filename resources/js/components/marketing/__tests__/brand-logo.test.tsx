import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrandLogo } from '../brand-logo';

describe('BrandLogo', () => {
    it('renders the brand wordmark with an accent-colored segment', () => {
        render(<BrandLogo />);
        expect(screen.getByText('Konser')).toBeInTheDocument();
        const accentSpan = screen.getByText('in');
        expect(accentSpan.className).toContain('text-mkt-accent');
    });
});
