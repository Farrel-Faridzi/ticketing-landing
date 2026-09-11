import type { ComponentType } from 'react';
import type { IconProps } from './icons';
import { ChatIcon, ClockIcon, IdCardIcon, KeyIcon, PriceTagIcon } from './icons';
import { SectionHeading } from './section-heading';

interface Feature {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: PriceTagIcon, title: 'Harga & T&C jelas', description: 'Semua ketentuan layanan bisa dibaca sebelum kamu order.' },
  { icon: ClockIcon, title: 'Pantau status sendiri', description: 'Cek perkembangan order lewat "My Orders", kapan saja.' },
  { icon: KeyIcon, title: 'Kode membership tercatat', description: 'Kode yang kamu dapat langsung tersimpan di akunmu.' },
  { icon: IdCardIcon, title: 'Order ID sendiri-sendiri', description: 'Detail order jastip nggak akan tertukar sama customer lain.' },
  { icon: ChatIcon, title: 'WhatsApp buat yang khusus aja', description: 'Dipakai untuk Ready Stock dan pertanyaan di luar FAQ.' },
];

export function FeaturesGrid() {
  return (
    <div className="px-6 py-16 md:px-16 md:py-20">
      <SectionHeading eyebrow="Akun kamu, kendali kamu" title="Nggak perlu chat berkali-kali buat tau ini" />
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-4">
            <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[11px] bg-mkt-accent-soft">
              <feature.icon size={19} className="text-mkt-accent-dark" />
            </div>
            <div>
              <div className="mb-1 text-[15px] font-bold">{feature.title}</div>
              <div className="text-[13.5px] leading-[1.6] text-text-muted">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
