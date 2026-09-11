import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OrderTrackingPreview } from '../order-tracking-preview';

describe('OrderTrackingPreview', () => {
    it('renders the order id, overall status, and the three status rows', () => {
        render(<OrderTrackingPreview />);
        expect(screen.getByText('Order ID #RSV-20441')).toBeInTheDocument();
        expect(screen.getAllByText('PROCESSING')).toHaveLength(2);
        expect(screen.getByText('Payment')).toBeInTheDocument();
        expect(screen.getByText('Berhasil')).toBeInTheDocument();
        expect(screen.getByText('PAID')).toBeInTheDocument();
        expect(screen.getByText('Customer Data')).toBeInTheDocument();
        expect(screen.getByText('Lengkap')).toBeInTheDocument();
        expect(screen.getByText('SUBMITTED')).toBeInTheDocument();
        expect(screen.getByText('Order Status')).toBeInTheDocument();
        expect(screen.getByText('Sedang diproses tim')).toBeInTheDocument();
        expect(
            screen.getByText('Contoh tampilan status di halaman "My Orders"'),
        ).toBeInTheDocument();
    });
});
