import Link from "next/link";
import { site } from "@/lib/data/site";

export default function FabricContactNote() {
  return (
    <div className="fabric-contact-note">
      <p>For pricing, availability, samples, or further details, please contact Damask Textile Pakistan.</p>
      <div className="fabric-contact-person">
        <i className="fa-solid fa-headset" />
        <span>
          <strong>Azeem</strong>
          <a href={`tel:${site.phonePrimaryTel}`}>{site.phonePrimary}</a>
        </span>
      </div>
      <div className="fabric-contact-actions">
        <a href={site.whatsappWithMessage} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
          <i className="fa-brands fa-whatsapp" /> Request Sample / Wholesale Inquiry
        </a>
        <Link href="/#contact" className="btn btn-dark btn-sm">
          Get Pricing
        </Link>
      </div>
    </div>
  );
}
