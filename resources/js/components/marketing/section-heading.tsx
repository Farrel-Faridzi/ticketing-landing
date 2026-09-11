import { cn } from '@/lib/utils';
import { PillBadge } from './pill-badge';

export interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    className?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn('mx-auto mb-12 max-w-[600px] text-center', className)}
        >
            <PillBadge className="mb-4">{eyebrow}</PillBadge>
            <h2 className="text-[32px] font-extrabold">{title}</h2>
        </div>
    );
}
