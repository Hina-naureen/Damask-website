import { site } from "@/lib/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      className="whatsapp-float"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
