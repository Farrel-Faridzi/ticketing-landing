import { CheckIcon } from './icons';
import { SectionHeading } from './section-heading';

const problems = [
    'Customer ramai, banyak pertanyaan yang nggak sempat terjawab.',
    'Pertanyaan harga, T&C, dan cara kerja sering berulang.',
    'Kode membership dikelola dan dikirim manual satu-satu.',
    'Detail order jastip antar-customer suka tertukar.',
];

const solutions = [
    'Harga, T&C, cara kerja, dan FAQ tersedia langsung di website.',
    'Status order bisa dipantau sendiri lewat akunmu.',
    'Kode membership tercatat jelas, kelihatan siapa penerimanya.',
    'Setiap order jastip punya Order ID dan detail sendiri.',
];

export function ProblemSolution() {
    return (
        <div className="border-mkt-border-soft bg-bg-alt border-t border-b px-6 py-16 md:px-16 md:py-20">
            <SectionHeading
                eyebrow="Kenapa kami bikin ini"
                title="Biar kamu nggak nunggu, dan tim kami nggak kebanjiran chat"
            />
            <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-7 md:grid-cols-2">
                <div className="border-mkt-border bg-mkt-card rounded-[18px] border p-8">
                    <h3 className="text-text-muted mb-5 text-[16px] font-bold">
                        Yang sering terjadi
                    </h3>
                    <div className="flex flex-col gap-3.5">
                        {problems.map((item) => (
                            <div
                                key={item}
                                className="text-text-muted flex gap-3 text-[14.5px] leading-[1.6]"
                            >
                                <span className="text-text-faint">&bull;</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-mkt-accent bg-mkt-card rounded-[18px] border-[1.5px] p-8">
                    <h3 className="text-mkt-accent-dark mb-5 text-[16px] font-bold">
                        Yang kami perbaiki
                    </h3>
                    <div className="flex flex-col gap-3.5">
                        {solutions.map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 text-[14.5px] leading-[1.6]"
                            >
                                <CheckIcon
                                    size={17}
                                    className="text-mkt-accent mt-0.5 shrink-0"
                                />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
