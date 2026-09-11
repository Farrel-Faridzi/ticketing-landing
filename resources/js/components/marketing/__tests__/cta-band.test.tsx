import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CtaBand } from '../cta-band';

describe('CtaBand', () => {
  it('renders the heading, description, and CTA button', () => {
    render(<CtaBand />);
    expect(screen.getByRole('heading', { name: 'Siap nonton konser favoritmu?' })).toBeInTheDocument();
    expect(screen.getByText('Cek daftar event yang sedang dibuka, atau tanya langsung kalau masih ada yang mau dipastikan.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Lihat Semua Event/ })).toBeInTheDocument();
  });
});
