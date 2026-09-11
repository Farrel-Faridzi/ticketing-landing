import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const pillBadgeVariants = cva(
    'inline-flex items-center gap-1.5 rounded-full px-4 py-[7px] text-[13px] font-bold',
    {
        variants: {
            tone: {
                accent: 'bg-mkt-accent-soft text-mkt-accent-dark',
                good: 'bg-good-soft text-good',
                info: 'bg-info-soft text-info',
                warn: 'bg-warn-soft text-warn',
            },
        },
        defaultVariants: { tone: 'accent' },
    },
);

export interface PillBadgeProps extends VariantProps<typeof pillBadgeVariants> {
    children: ReactNode;
    className?: string;
}

export function PillBadge({ tone, children, className }: PillBadgeProps) {
    return (
        <span className={cn(pillBadgeVariants({ tone }), className)}>
            {children}
        </span>
    );
}
