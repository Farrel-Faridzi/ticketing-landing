import { TicketIcon } from './icons';
import { PillButton } from './pill-button';

export function CtaBand() {
  return (
    <div className="bg-bg-alt px-6 py-16 md:px-16 md:py-18">
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
        <h2 className="text-[26px] font-extrabold md:text-[30px]">Siap nonton konser favoritmu?</h2>
        <p className="text-[15px] leading-[1.6] text-text-muted">
          Cek daftar event yang sedang dibuka, atau tanya langsung kalau masih ada yang mau dipastikan.
        </p>
        <PillButton>
          <TicketIcon size={17} />
          Lihat Semua Event
        </PillButton>
      </div>
    </div>
  );
}
