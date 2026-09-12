import { cn } from '@/lib/utils';

export interface BrandLogoProps {
    size?: 'default' | 'sm';
}

export function BrandLogo({ size = 'default' }: BrandLogoProps) {
    return (
        <span
            className={cn(
                'text-text font-extrabold',
                size === 'default' ? 'text-[21px]' : 'text-[17px]',
            )}
        >
            <span>Konser</span>
            <span className="text-mkt-accent">in</span>
        </span>
    );
}
