import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionHeading } from '../section-heading';

describe('SectionHeading', () => {
  it('renders the eyebrow badge and the heading text', () => {
    render(<SectionHeading eyebrow="Core Services" title="3 cara dapetin tiket impianmu" />);
    expect(screen.getByText('Core Services')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: '3 cara dapetin tiket impianmu' })).toBeInTheDocument();
  });
});
