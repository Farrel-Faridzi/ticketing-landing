// resources/js/components/marketing/__tests__/icons.test.tsx
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CheckIcon, ChevronIcon, PackageIcon, TicketIcon } from '../icons';

describe('icon set', () => {
    it('renders TicketIcon without the divider line by default', () => {
        const { container } = render(<TicketIcon />);
        expect(container.querySelector('svg')).toBeInTheDocument();
        expect(container.querySelectorAll('path')).toHaveLength(1);
    });

    it('renders TicketIcon with the divider line when withDivider is set', () => {
        const { container } = render(<TicketIcon withDivider />);
        expect(container.querySelectorAll('path')).toHaveLength(2);
    });

    it('renders PackageIcon with the center line when withCenterLine is set', () => {
        const { container } = render(<PackageIcon withCenterLine />);
        expect(container.querySelectorAll('path')).toHaveLength(3);
    });

    it('rotates ChevronIcon when open', () => {
        const { container } = render(<ChevronIcon open />);
        expect(container.querySelector('svg')?.getAttribute('class')).toContain(
            'rotate-180',
        );
    });

    it('renders CheckIcon', () => {
        const { container } = render(<CheckIcon />);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });
});
