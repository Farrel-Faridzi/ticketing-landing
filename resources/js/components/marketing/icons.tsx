import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

function baseProps({ size = 20, className, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className: cn('shrink-0', className),
    ...props,
  };
}

export function DotIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)} fill="currentColor">
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function strokeProps(props: IconProps) {
  return {
    ...baseProps(props),
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function CalendarCheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={2}>
      <path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5l-8-3Z" />
    </svg>
  );
}

export function TicketIcon({ withDivider, ...props }: IconProps & { withDivider?: boolean }) {
  return (
    <svg {...strokeProps(props)} strokeWidth={1.6}>
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 1 0 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 1 0 0-4V8Z" />
      {withDivider && <path d="M9 6v12" strokeDasharray="2 3" />}
    </svg>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={1.6}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l3 3M14 9l2 2" />
    </svg>
  );
}

export function PackageIcon({ withCenterLine, ...props }: IconProps & { withCenterLine?: boolean }) {
  return (
    <svg {...strokeProps(props)} strokeWidth={1.6}>
      <path d="M3 8l9-5 9 5-9 5-9-5Z" />
      <path d="M3 8v9l9 5 9-5V8" />
      {withCenterLine && <path d="M12 13v9" />}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={2}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

export function PriceTagIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={1.6}>
      <path d="M20 12 12 20 4 12V4h8l8 8Z" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IdCardIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={1.6}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M6 16c0-1.7 1.3-3 3-3s3 1.3 3 3" />
      <path d="M13 9h5M13 13h5" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...strokeProps(props)} strokeWidth={1.6}>
      <path d="M4 4h16v13H8l-4 4V4Z" />
    </svg>
  );
}

export function ChevronIcon({ open, ...props }: IconProps & { open?: boolean }) {
  return (
    <svg {...strokeProps(props)} strokeWidth={2} className={cn('transition-transform', open && 'rotate-180', props.className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
