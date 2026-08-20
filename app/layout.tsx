import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import AIAssistant from "@/components/AIAssistant";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://damasktextilepakistan.com"),
  title: "Damask Textile Pakistan | Wholesale Interior Fabric Supplier",
  description:
    "Damask Textile Pakistan is a premium wholesale supplier of interior fabrics, curtains, upholstery, drapery & jacquard, delivering to retailers and designers across Pakistan.",
  keywords: [
    "wholesale fabric supplier Pakistan",
    "interior fabric wholesaler",
    "curtain fabric supplier Pakistan",
    "upholstery fabric wholesale",
    "jacquard fabric supplier",
    "blackout fabric wholesale",
    "Damask Textile Pakistan",
    "Damask Textile",
  ],
  openGraph: {
    type: "website",
    title: "Damask Textile Pakistan | Premium Wholesale Interior Fabrics",
    description:
      "Delivering premium interior fabrics to retailers and professional buyers across Pakistan.",
    images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"],
    locale: "en_PK",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  telephone: [site.phonePrimaryTel, site.phoneSecondaryTel],
  email: site.email,
  priceRange: "$$$",
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Loader />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
          <AIAssistant />
        </SmoothScroll>
      </body>
    </html>
  );
}
