import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TicketIcon } from '../icons';
import { ServiceCard } from '../service-card';

describe('ServiceCard', () => {
    it('renders title, description, numbered steps, and both buttons', () => {
        render(
            <ServiceCard
                id="reservation"
                tone="accent"
                icon={TicketIcon}
                title="Reservation / Jastip"
                description="Bayar di website, tim kami yang urus proses ticketing-nya sampai selesai."
                steps={[
                    'Pilih event & kategori ticket',
                    'Baca T&C, lanjut bayar',
                    'Lengkapi data ticketing',
                    'Tim proses, kamu pantau statusnya',
                ]}
                outlineLabel="Cara Kerja"
                solidLabel="Mulai"
            />,
        );

        expect(
            screen.getByRole('heading', { name: 'Reservation / Jastip' }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Bayar di website, tim kami yang urus proses ticketing-nya sampai selesai.',
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText('1. Pilih event & kategori ticket'),
        ).toBeInTheDocument();
        expect(
            screen.getByText('4. Tim proses, kamu pantau statusnya'),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'Cara Kerja' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'Mulai' }),
        ).toBeInTheDocument();
    });
});
