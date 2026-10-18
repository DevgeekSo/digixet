export const WHATSAPP_PHONE_RAW = "7771983690";
export const WHATSAPP_PHONE_DISPLAY = "+91 77719 83690";
export const WHATSAPP_COUNTRY_CODE = "91";
export const WHATSAPP_FULL_NUMBER = "917771983690";

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "Hi, I would like to enquire about your services and book a strategy call.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_FULL_NUMBER}?text=${text}`;
}
