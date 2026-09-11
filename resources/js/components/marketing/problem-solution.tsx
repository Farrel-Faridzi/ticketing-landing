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
    <div className="border-t border-b border-mkt-border-soft bg-bg-alt px-6 py-16 md:px-16 md:py-20">
      <SectionHeading eyebrow="Kenapa kami bikin ini" title="Biar kamu nggak nunggu, dan tim kami nggak kebanjiran chat" />
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-7 md:grid-cols-2">
        <div className="rounded-[18px] border border-mkt-border bg-mkt-card p-8">
          <h3 className="mb-5 text-[16px] font-bold text-text-muted">Yang sering terjadi</h3>
          <div className="flex flex-col gap-3.5">
            {problems.map((item) => (
              <div key={item} className="flex gap-3 text-[14.5px] leading-[1.6] text-text-muted">
                <span className="text-text-faint">&bull;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[18px] border-[1.5px] border-mkt-accent bg-mkt-card p-8">
          <h3 className="mb-5 text-[16px] font-bold text-mkt-accent-dark">Yang kami perbaiki</h3>
          <div className="flex flex-col gap-3.5">
            {solutions.map((item) => (
              <div key={item} className="flex gap-3 text-[14.5px] leading-[1.6]">
                <CheckIcon size={17} className="mt-0.5 shrink-0 text-mkt-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
