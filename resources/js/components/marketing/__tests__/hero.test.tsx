import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from '../hero';

describe('Hero', () => {
  it('renders the headline, subheadline, CTAs, and trust row', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Nonton konser favoritmu,');
    expect(
      screen.getByText('Reservation, Rent Membership, dan Ready Stock ada di satu tempat. Harga, T&C, dan status order bisa kamu cek sendiri lewat akun.'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Lihat Event Sekarang/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cek Status Order/ })).toBeInTheDocument();
    expect(screen.getByText('Order ID di setiap transaksi')).toBeInTheDocument();
    expect(screen.getByText('Full refund jika ticketing gagal')).toBeInTheDocument();
    expect(screen.getByText('Semua status bisa dipantau sendiri')).toBeInTheDocument();
  });

  it('renders the three decorative service pill tabs', () => {
    render(<Hero />);
    expect(screen.getByText('Reservation / Jastip')).toBeInTheDocument();
    expect(screen.getByText('Rent Membership')).toBeInTheDocument();
    expect(screen.getByText('Ready Stock')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Apa bedanya/ })).toBeInTheDocument();
  });
});
