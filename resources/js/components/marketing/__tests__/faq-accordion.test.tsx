import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { FaqAccordion } from '../faq-accordion';

describe('FaqAccordion', () => {
  it('opens the first item by default and shows its answer', () => {
    render(<FaqAccordion />);
    const firstButton = screen.getByRole('button', { name: /Setelah bayar, apakah saya harus konfirmasi lewat chat/ });
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/Nggak perlu\. Order otomatis masuk ke tim/)).toBeInTheDocument();
  });

  it('keeps other items closed by default', () => {
    render(<FaqAccordion />);
    const secondButton = screen.getByRole('button', { name: /Kalau proses ticketing gagal/ });
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(/Full refund diberikan kalau proses ticketing gagal/)).not.toBeInTheDocument();
  });

  it('toggles an item open on click and closes the previously open one', async () => {
    const user = userEvent.setup();
    render(<FaqAccordion />);
    const secondButton = screen.getByRole('button', { name: /Kalau proses ticketing gagal/ });

    await user.click(secondButton);

    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/Full refund diberikan kalau proses ticketing gagal/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Setelah bayar, apakah saya harus konfirmasi lewat chat/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
