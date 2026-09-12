import { buildWhatsAppLink } from '@/lib/whatsapp';
import { KeyIcon, PackageIcon, TicketIcon } from './icons';
import { SectionHeading } from './section-heading';
import { ServiceCard, type ServiceCardProps } from './service-card';

const services: ServiceCardProps[] = [
    {
        id: 'reservation',
        tone: 'accent',
        icon: TicketIcon,
        iconVariant: { withDivider: true },
        title: 'Reservation / Jastip',
        description:
            'Bayar di website, tim kami yang urus proses ticketing-nya sampai selesai.',
        steps: [
            'Pilih event & kategori ticket',
            'Baca T&C, lanjut bayar',
            'Lengkapi data ticketing',
            'Tim proses, kamu pantau statusnya',
        ],
        outlineLabel: 'Cara Kerja',
        solidLabel: 'Mulai',
    },
    {
        id: 'membership',
        tone: 'info',
        icon: KeyIcon,
        title: 'Rent Membership',
        description:
            'Bukan subscription. Pilih satu event, beli akses berupa satu kode membership.',
        steps: [
            'Pilih event, cek cara kerja',
            'Bayar',
            'Sistem assign 1 kode otomatis',
            'Kode langsung muncul di akunmu',
        ],
        outlineLabel: 'Cara Kerja',
        solidLabel: 'Mulai',
    },
    {
        id: 'stock',
        tone: 'warn',
        icon: PackageIcon,
        iconVariant: { withCenterLine: true },
        title: 'Ready Stock',
        description:
            'Katalog ticket yang sudah siap. Closing tetap manual lewat WhatsApp.',
        steps: [
            'Lihat stock, seat & harga',
            'Klik WhatsApp / Hubungi Kami',
            'Closing manual sama tim',
            'Ticket ditandai Sold',
        ],
        outlineLabel: 'Lihat Stock',
        solidLabel: 'WhatsApp',
        solidHref: buildWhatsAppLink(
            'Halo, saya mau tanya soal Ready Stock tiket konser.',
        ),
    },
];

export function CoreServices() {
    return (
        <div className="px-6 py-16 md:px-16 md:py-20">
            <SectionHeading
                eyebrow="Core Services"
                title="3 cara dapetin tiket impianmu"
            />
            <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
                {services.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </div>
    );
}
