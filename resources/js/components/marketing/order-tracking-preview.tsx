import { cn } from '@/lib/utils';
import { CheckIcon, ClockIcon } from './icons';
import { PillBadge } from './pill-badge';

const rows = [
  { label: 'Payment', value: 'Berhasil', badge: 'PAID', tone: 'good' as const, icon: CheckIcon },
  { label: 'Customer Data', value: 'Lengkap', badge: 'SUBMITTED', tone: 'good' as const, icon: CheckIcon },
  { label: 'Order Status', value: 'Sedang diproses tim', badge: 'PROCESSING', tone: 'accent' as const, icon: ClockIcon },
];

export function OrderTrackingPreview() {
  return (
    <div className="flex justify-center px-6 py-10 md:px-16">
      <div className="w-full max-w-[640px] rounded-[20px] border border-mkt-border bg-mkt-card p-7 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-[13.5px] font-semibold text-text-faint">Order ID #RSV-20441</div>
          <PillBadge tone="info">PROCESSING</PillBadge>
        </div>

        <div className="flex flex-col gap-3.5">
          {rows.map((row) => (
            <div
              key={row.label}
              className={cn(
                'flex items-center gap-3.5 rounded-xl p-3.5',
                row.tone === 'accent' ? 'bg-mkt-accent-soft' : 'bg-bg-alt',
              )}
            >
              <div
                className={cn(
                  'flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full',
                  row.tone === 'accent' ? 'bg-mkt-accent-soft-2' : 'bg-good-soft',
                )}
              >
                <row.icon size={16} className={row.tone === 'accent' ? 'text-mkt-accent-dark' : 'text-good'} />
              </div>
              <div className="flex-1">
                <div className="text-[13.5px] text-text-muted">{row.label}</div>
                <div className="text-[14.5px] font-bold">{row.value}</div>
              </div>
              <PillBadge tone={row.tone} className="px-3 py-1 text-[11.5px]">
                {row.badge}
              </PillBadge>
            </div>
          ))}
        </div>

        <div className="mt-4.5 text-center text-[12.5px] text-text-faint">
          Contoh tampilan status di halaman &quot;My Orders&quot;
        </div>
      </div>
    </div>
  );
}
