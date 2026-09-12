export const WHATSAPP_DISPLAY = '+62 812-3456-7890';

const WHATSAPP_INTL_NUMBER = '6281234567890';

export function buildWhatsAppLink(message?: string) {
    const base = `https://wa.me/${WHATSAPP_INTL_NUMBER}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
