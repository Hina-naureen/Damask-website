"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { site } from "@/lib/data/site";
import Logo from "./Logo";

type Message = {
  role: "bot" | "user";
  text: string;
};

type QuickReply = {
  label: string;
  onSelect: () => void;
};

const MAIN_MENU_PROMPT =
  "Hi, I'm the Damask AI Assistant. I can help with our fabrics, catalogs and consultations — what would you like to know?";

export default function AIAssistant() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: MAIN_MENU_PROMPT }]);
  const [options, setOptions] = useState<QuickReply[]>(() => mainMenuOptions());
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages, options, typing]);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (open) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [open]);

  function say(userText: string | null, botText: string, nextOptions: QuickReply[]) {
    if (userText) {
      setMessages((prev) => [...prev, { role: "user", text: userText }]);
    }
    setOptions([]);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
      setTyping(false);
      setOptions(nextOptions);
    }, 550);
  }

  function mainMenuOptions(): QuickReply[] {
    return [
      { label: "About Damask Textile", onSelect: showAboutBusiness },
      { label: "Browse Our Fabric Catalogs", onSelect: showCatalogInfo },
      { label: "Book a Consultation", onSelect: showBooking },
      { label: "Help me choose curtains", onSelect: showCurtainIntro },
      { label: "Help me choose a sofa", onSelect: showSofaIntro },
      { label: "Contact Information", onSelect: showContact },
      { label: "Frequently Asked Questions", onSelect: showFaq },
    ];
  }

  function backToMenu() {
    say("Back to menu", MAIN_MENU_PROMPT, mainMenuOptions());
  }

  function showAboutBusiness() {
    say(
      "About Damask Textile",
      "Damask Textile Pakistan, managed by Azeem, is a premium wholesale fabric supplier — not a small retail shop. We supply premium interior fabrics for curtains, upholstery, drapery and designer interiors to showrooms, interior shops, designers and professional buyers across Pakistan.",
      [
        {
          label: "Do you deliver across Pakistan?",
          onSelect: () =>
            say(
              "Do you deliver across Pakistan?",
              `Yes — ${site.deliveryStatement} We supply showrooms, retailers and professional buyers nationwide.`,
              [
                { label: "Browse Our Fabric Catalogs", onSelect: showCatalogInfo },
                { label: "Book a Consultation", onSelect: showBooking },
                { label: "⟵ Back to Menu", onSelect: backToMenu },
              ]
            ),
        },
        { label: "Browse Our Fabric Catalogs", onSelect: showCatalogInfo },
        { label: "Book a Consultation", onSelect: showBooking },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showCatalogInfo() {
    say(
      "Browse Our Fabric Catalogs",
      "We carry a full range of fabric catalogs — Almas Collection, Damask Classic, Blackout Fabric, Linen Sofa, New Arrivals and Water Repellent Fabric. Each catalog opens as a flipbook with its cover, numbered fabric samples and full specification sheets, covering curtains, upholstery, drapery and jacquard designer fabrics.",
      [
        {
          label: "Open Catalogs Page",
          onSelect: () => {
            setOpen(false);
            router.push("/catalogs");
          },
        },
        { label: "Book a Consultation For Pricing", onSelect: showBooking },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showBooking() {
    say(
      "Book a Consultation",
      "Great choice! You can book a free consultation in whichever way suits you best.",
      [
        {
          label: "Open Consultation Form",
          onSelect: () => {
            setOpen(false);
            router.push("/#contact");
          },
        },
        {
          label: "Chat With Us on WhatsApp",
          onSelect: () => window.open(site.whatsappWithMessage, "_blank"),
        },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showCurtainIntro() {
    say("Help me choose curtains", "What kind of look are you going for?", [
      {
        label: "Modern & Minimal",
        onSelect: () =>
          say(
            "Modern & Minimal",
            "For a clean, contemporary look we'd recommend our Modern, Eyelet or Roller Blind styles — simple lines that suit minimal interiors.",
            curtainFollowUp()
          ),
      },
      {
        label: "Classic & Traditional",
        onSelect: () =>
          say(
            "Classic & Traditional",
            "Classic spaces shine with our Classic, Pleated or Rod Pocket curtains — timeless folds with a tailored finish.",
            curtainFollowUp()
          ),
      },
      {
        label: "Luxury Hotel-Style",
        onSelect: () =>
          say(
            "Luxury Hotel-Style",
            "For that five-star feel, our Luxury Hotel-Style Curtains and Luxury Drapes in velvet or silk are the perfect statement piece.",
            curtainFollowUp()
          ),
      },
      {
        label: "Show me everything",
        onSelect: () =>
          say(
            "Show me everything",
            "We have over 50 curtain styles across Window, Door and Special categories — velvet, silk, blackout, motorized and more.",
            curtainFollowUp()
          ),
      },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ]);
  }

  function curtainFollowUp(): QuickReply[] {
    return [
      {
        label: "View Curtain Collection",
        onSelect: () => {
          setOpen(false);
          router.push("/curtains");
        },
      },
      { label: "Book a Consultation", onSelect: showBooking },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ];
  }

  function showSofaIntro() {
    say("Help me choose a sofa", "What matters most to you in a sofa?", [
      {
        label: "Space-saving for a smaller room",
        onSelect: () =>
          say(
            "Space-saving for a smaller room",
            "Our L Shape and Minimalist Sofas are great space-efficient options that still feel luxurious.",
            sofaFollowUp()
          ),
      },
      {
        label: "Classic, elegant look",
        onSelect: () =>
          say(
            "Classic, elegant look",
            "The Chesterfield and Classic Sofa styles bring timeless, tailored elegance to any living room.",
            sofaFollowUp()
          ),
      },
      {
        label: "Modern family living",
        onSelect: () =>
          say(
            "Modern family living",
            "Our Sectional and Modern Sofas are built for family living and entertaining, with plenty of seating.",
            sofaFollowUp()
          ),
      },
      {
        label: "Fully custom design",
        onSelect: () =>
          say(
            "Fully custom design",
            "Our Custom Designer Sofa service tailors everything — fabric, color and dimensions — to your exact space.",
            sofaFollowUp()
          ),
      },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ]);
  }

  function sofaFollowUp(): QuickReply[] {
    return [
      {
        label: "View Sofa Collection",
        onSelect: () => {
          setOpen(false);
          router.push("/sofas");
        },
      },
      { label: "Book a Consultation", onSelect: showBooking },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ];
  }

  function showContact() {
    say(
      "Contact Information",
      `Here's how to reach us:\n🚚 ${site.deliveryStatement}\n📞 ${site.phonePrimary} / ${site.phoneSecondary}\n✉️ ${site.email}`,
      [
        {
          label: "Chat With Us on WhatsApp",
          onSelect: () => window.open(site.whatsapp, "_blank"),
        },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showFaq() {
    say("Frequently Asked Questions", "Here are a few things buyers often ask:", [
      {
        label: "Are you wholesale or retail?",
        onSelect: () =>
          say(
            "Are you wholesale or retail?",
            "We're a wholesale fabric supplier. Damask Textile Pakistan supplies premium interior fabrics to showrooms, interior shops, designers and other professional buyers — we're not a small retail counter.",
            faqFollowUp()
          ),
      },
      {
        label: "Do you offer a free consultation?",
        onSelect: () =>
          say(
            "Do you offer a free consultation?",
            "Yes — your first consultation with our team is completely free, in person or over WhatsApp.",
            faqFollowUp()
          ),
      },
      {
        label: "What fabrics do you offer?",
        onSelect: () =>
          say(
            "What fabrics do you offer?",
            "Curtains, upholstery, drapery, jacquard and blackout fabrics, plus designer textiles — all organized into catalogs you can browse online.",
            faqFollowUp()
          ),
      },
      {
        label: "Do you supply across Pakistan?",
        onSelect: () =>
          say("Do you supply across Pakistan?", site.deliveryStatement, faqFollowUp()),
      },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ]);
  }

  function faqFollowUp(): QuickReply[] {
    return [
      { label: "Ask another question", onSelect: showFaq },
      { label: "Book a Consultation", onSelect: showBooking },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ];
  }

  function handleFreeText(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    setInputValue("");
    say(
      text,
      "Thanks for your message! For a detailed answer, our design team is best placed to help directly.",
      [
        {
          label: "Chat With Us on WhatsApp",
          onSelect: () => window.open(site.whatsappWithMessage, "_blank"),
        },
        { label: "Book a Consultation", onSelect: showBooking },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  return (
    <>
      <button
        className="ai-assistant-float"
        aria-label={open ? "Close design assistant" : "Open design assistant"}
        onClick={() => setOpen((v) => !v)}
      >
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-comment-dots"}`} />
      </button>

      {open && (
        <div className="ai-assistant-panel" ref={panelRef}>
          <div className="ai-assistant-header">
            <div className="ai-assistant-identity">
              <Logo size={36} />
              <div>
                <strong>Damask AI Assistant</strong>
                <span>Usually replies instantly</span>
              </div>
            </div>
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="ai-assistant-thread" ref={threadRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg ai-msg-${m.role}`}>
                {m.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ))}
            {typing && (
              <div className="ai-msg ai-msg-bot ai-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {options.length > 0 && (
              <div className="ai-options">
                {options.map((opt) => (
                  <button key={opt.label} onClick={opt.onSelect}>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="ai-assistant-input" onSubmit={handleFreeText}>
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" aria-label="Send">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
