import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from './icons';

export interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const isDark = resolvedAppearance === 'dark';

    return (
        <button
            type="button"
            aria-label={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
            className={cn(
                'border-mkt-border hover:border-mkt-accent flex h-9 w-9 items-center justify-center rounded-full border transition-colors',
                className,
            )}
        >
            {isDark ? <SunIcon size={17} /> : <MoonIcon size={17} />}
        </button>
    );
}
