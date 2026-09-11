import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProblemSolution } from '../problem-solution';

describe('ProblemSolution', () => {
    it('renders both columns with their four items each', () => {
        render(<ProblemSolution />);
        expect(
            screen.getByRole('heading', { name: 'Yang sering terjadi' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'Yang kami perbaiki' }),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Customer ramai, banyak pertanyaan yang nggak sempat terjawab.',
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Detail order jastip antar-customer suka tertukar.',
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Harga, T&C, cara kerja, dan FAQ tersedia langsung di website.',
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                'Setiap order jastip punya Order ID dan detail sendiri.',
            ),
        ).toBeInTheDocument();
    });
});
