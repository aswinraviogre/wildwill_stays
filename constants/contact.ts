/**
 * Central Contact and WhatsApp Enquiry Configuration for Wildvill Stays
 * Single source of truth for all inquiry routing across the website.
 */

export const CONTACT_CONFIG = {
  // Raw WhatsApp number with country code (India +91)
  whatsappNumber: "919526459920",
  
  // Clean phone number without country code
  phoneTenDigits: "9526459920",
  
  // Formatted display phone number
  displayPhone: "+91 95264 59920",
  
  // Standard tel: link
  telLink: "tel:+919526459920",
  
  // Official reservations email
  email: "reservations@wildvill.com",
  
  // Default greeting for generic inquiries
  defaultGreeting: "Hello Wildvill Concierge! I would like to inquire about booking a stay in Wayanad."
};

/**
 * Builds a direct WhatsApp click-to-chat URL with the configured business number and optional pre-filled message.
 */
export function buildWhatsAppUrl(message?: string): string {
  const text = message ? encodeURIComponent(message) : encodeURIComponent(CONTACT_CONFIG.defaultGreeting);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${text}`;
}
