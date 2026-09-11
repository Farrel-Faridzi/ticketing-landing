import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PillBadge } from '../pill-badge';

describe('PillBadge', () => {
  it('renders with accent tone by default', () => {
    render(<PillBadge>Core Services</PillBadge>);
    const badge = screen.getByText('Core Services');
    expect(badge.className).toContain('bg-mkt-accent-soft');
  });

  it('renders good tone for PAID-style statuses', () => {
    render(<PillBadge tone="good">PAID</PillBadge>);
    expect(screen.getByText('PAID').className).toContain('bg-good-soft');
  });
});
