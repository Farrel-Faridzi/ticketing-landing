import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const pillButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-colors',
  {
    variants: {
      variant: {
        solid: 'bg-mkt-accent text-white hover:bg-mkt-accent-dark',
        outline: 'border border-mkt-border bg-mkt-card text-text hover:border-mkt-accent',
      },
      size: {
        default: 'px-[26px] py-[13px] text-[14.5px]',
        sm: 'px-[14px] py-[10px] text-[13px]',
      },
    },
    defaultVariants: { variant: 'solid', size: 'default' },
  },
);

export interface PillButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pillButtonVariants> {
  children: ReactNode;
}

export function PillButton({ className, variant, size, children, ...props }: PillButtonProps) {
  return (
    <button className={cn(pillButtonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
