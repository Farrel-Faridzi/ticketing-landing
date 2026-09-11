import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('test tooling smoke test', () => {
    it('renders a basic component', () => {
        render(<div>ok</div>);
        expect(screen.getByText('ok')).toBeInTheDocument();
    });
});
