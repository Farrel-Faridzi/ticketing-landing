import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronIcon } from './icons';
import { SectionHeading } from './section-heading';

const faqs = [
    {
        question: 'Setelah bayar, apakah saya harus konfirmasi lewat chat?',
        answer: 'Nggak perlu. Order otomatis masuk ke tim begitu pembayaran berhasil dan data ticketing kamu sudah lengkap.',
    },
    {
        question: 'Kalau proses ticketing gagal, apa saya dapat refund?',
        answer: 'Full refund diberikan kalau proses ticketing gagal. Untuk kondisi lain berlaku ketentuan yang ada di T&C.',
    },
    {
        question: 'Apa Rent Membership itu subscription bulanan?',
        answer: 'Bukan. Kamu beli akses berupa satu kode membership untuk satu event, bukan langganan rutin.',
    },
];

export function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div
            id="faq"
            className="border-mkt-border-soft bg-bg-alt border-t border-b px-6 py-16 md:px-16 md:py-20"
        >
            <SectionHeading eyebrow="FAQ" title="Yang sering ditanyakan" />
            <div className="mx-auto flex max-w-[700px] flex-col gap-3">
                {faqs.map((faq, index) => {
                    const open = openIndex === index;
                    return (
                        <div
                            key={faq.question}
                            className={cn(
                                'bg-mkt-card rounded-[14px] border px-6.5 py-5.5',
                                open
                                    ? 'border-mkt-accent border-[1.5px]'
                                    : 'border-mkt-border',
                            )}
                        >
                            <button
                                type="button"
                                aria-expanded={open}
                                className="flex w-full items-center justify-between gap-4 text-left"
                                onClick={() => setOpenIndex(open ? -1 : index)}
                            >
                                <span className="text-[15px] font-bold">
                                    {faq.question}
                                </span>
                                <ChevronIcon
                                    open={open}
                                    size={18}
                                    className={
                                        open
                                            ? 'text-mkt-accent'
                                            : 'text-text-faint'
                                    }
                                />
                            </button>
                            {open && (
                                <div className="text-text-muted mt-3 text-[14px] leading-[1.6]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
