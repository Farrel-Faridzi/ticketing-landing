import { cn } from '@/lib/utils';
import type { ComponentType } from 'react';
import type { IconProps } from './icons';
import { PillButton } from './pill-button';

export interface ServiceCardProps {
    id: string;
    tone: 'accent' | 'info' | 'warn';
    icon: ComponentType<IconProps>;
    iconVariant?: { withDivider?: boolean; withCenterLine?: boolean };
    title: string;
    description: string;
    steps: string[];
    outlineLabel: string;
    solidLabel: string;
    solidHref?: string;
}

const toneClasses = {
    accent: { bg: 'bg-mkt-accent-soft', text: 'text-mkt-accent-dark' },
    info: { bg: 'bg-info-soft', text: 'text-info' },
    warn: { bg: 'bg-warn-soft', text: 'text-warn' },
};

export function ServiceCard({
    id,
    tone,
    icon: Icon,
    iconVariant,
    title,
    description,
    steps,
    outlineLabel,
    solidLabel,
    solidHref,
}: ServiceCardProps) {
    const toneClass = toneClasses[tone];

    return (
        <div
            id={id}
            className="border-mkt-border bg-mkt-card flex flex-col overflow-hidden rounded-[18px] border"
        >
            <div className="px-7 pt-7">
                <div
                    className={cn(
                        'mb-4.5 flex h-11.5 w-11.5 items-center justify-center rounded-[14px]',
                        toneClass.bg,
                    )}
                >
                    <Icon
                        {...iconVariant}
                        size={22}
                        className={toneClass.text}
                    />
                </div>
                <h3 className="mb-2 text-[18px] font-bold">{title}</h3>
                <p className="text-text-muted mb-4.5 text-[14px] leading-[1.6]">
                    {description}
                </p>
            </div>

            <div className="text-text-muted flex flex-col gap-2 px-7 pb-6 text-[13px]">
                {steps.map((step, index) => (
                    <div key={step}>
                        {index + 1}. {step}
                    </div>
                ))}
            </div>

            <div className="border-mkt-border-soft mt-auto flex gap-2.5 border-t px-7 py-5">
                <PillButton
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-center"
                >
                    {outlineLabel}
                </PillButton>
                {solidHref ? (
                    <a
                        href={solidHref}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1"
                    >
                        <PillButton size="sm" className="w-full justify-center">
                            {solidLabel}
                        </PillButton>
                    </a>
                ) : (
                    <PillButton size="sm" className="flex-1 justify-center">
                        {solidLabel}
                    </PillButton>
                )}
            </div>
        </div>
    );
}
