import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FeaturesGrid } from '../features-grid';

describe('FeaturesGrid', () => {
  it('renders all five feature items', () => {
    render(<FeaturesGrid />);
    ['Harga & T&C jelas', 'Pantau status sendiri', 'Kode membership tercatat', 'Order ID sendiri-sendiri', 'WhatsApp buat yang khusus aja'].forEach(
      (title) => {
        expect(screen.getByText(title)).toBeInTheDocument();
      },
    );
    expect(screen.getByText('Semua ketentuan layanan bisa dibaca sebelum kamu order.')).toBeInTheDocument();
  });
});
