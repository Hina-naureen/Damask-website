"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { site } from "@/lib/data/site";

type Message = {
  role: "bot" | "user";
  text: string;
};

type QuickReply = {
  label: string;
  onSelect: () => void;
};

const GREETING =
  "Assalam-o-Alaikum 👋\nWelcome to Damask Textile Pakistan.\nI hope you are doing well. How can I help you today?\n\nYou can ask me about our fabric collections, catalogs, sofa fabrics, curtains, blackout fabrics, outdoor fabrics, or any product details.";

const CONTACT_LINE = `For detailed pricing and fabric availability, you can contact our representative Azeem:\n📞 ${site.phonePrimary}`;

const EMOJI_PATTERN = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}]/gu;

export default function AIAssistant() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: GREETING }]);
  const [options, setOptions] = useState<QuickReply[]>(() => mainMenuOptions());
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  // --- Voice: speech-to-text (mic input) and text-to-speech (bot reads replies aloud)
  const [sttSupported, setSttSupported] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const recognitionRef = useRef<any>(null);
  const spokenCountRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setSttSupported(Boolean(SpeechRecognitionCtor));
    setTtsSupported("speechSynthesis" in window);
  }, []);

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

  // Speak newly-arrived bot messages when voice replies are enabled.
  useEffect(() => {
    if (!voiceOn || !ttsSupported || typing) return;
    if (messages.length <= spokenCountRef.current) return;
    spokenCountRef.current = messages.length;
    const last = messages[messages.length - 1];
    if (last.role !== "bot") return;

    const utterance = new SpeechSynthesisUtterance(last.text.replace(EMOJI_PATTERN, "").trim());
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [messages, typing, voiceOn, ttsSupported]);

  // Stop any speech when the panel closes or voice replies are turned off.
  useEffect(() => {
    if ((!open || !voiceOn) && ttsSupported) {
      window.speechSynthesis.cancel();
    }
  }, [open, voiceOn, ttsSupported]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (ttsSupported) window.speechSynthesis.cancel();
    };
  }, [ttsSupported]);

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
      { label: "Curtain Collection", onSelect: () => showCurtainIntro() },
      { label: "Sofa Collection", onSelect: () => showSofaIntro() },
      { label: "Outdoor Fabric Collection", onSelect: () => showOutdoorFabricIntro() },
      { label: "Fabric Collection", onSelect: () => showFabricCollectionIntro() },
      { label: "Blackout Collection", onSelect: () => showBlackoutIntro() },
      { label: "Browse Our Fabric Catalogs", onSelect: () => showCatalogInfo() },
      { label: "Book a Consultation", onSelect: () => showBooking() },
      { label: "Contact Information", onSelect: () => showContact() },
      { label: "Frequently Asked Questions", onSelect: () => showFaq() },
    ];
  }

  function backToMenu() {
    say(
      "Back to menu",
      "Sure — what would you like to explore next?",
      mainMenuOptions()
    );
  }

  function showAboutBusiness(label = "About Damask Textile") {
    say(
      label,
      "Damask Textile Pakistan, led by Azeem, is a premium wholesale fabric supplier — not a small retail shop. We supply premium interior fabrics for curtains, upholstery, drapery and designer interiors to showrooms, interior shops, designers and professional buyers across Pakistan.",
      [
        { label: "Browse Our Fabric Catalogs", onSelect: () => showCatalogInfo() },
        { label: "Book a Consultation", onSelect: () => showBooking() },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showCatalogInfo(label = "Browse Our Fabric Catalogs") {
    say(
      label,
      "We carry a full range of fabric catalogs — Almas Collection, Damask Classic, Blackout Fabric, Linen Sofa, New Arrivals and Water Repellent Fabric. Each catalog opens as a flipbook with its cover, numbered fabric samples and full specification sheets, covering curtains, upholstery, drapery and jacquard designer fabrics.",
      [
        {
          label: "Open Catalogs Page",
          onSelect: () => {
            setOpen(false);
            router.push("/catalogs");
          },
        },
        { label: "Book a Consultation For Pricing", onSelect: () => showBooking() },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showBooking(label = "Book a Consultation") {
    say(
      label,
      `Great choice! You can book a free consultation in whichever way suits you best.\n\n${CONTACT_LINE}`,
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

  function showCurtainIntro(label = "Show me curtains") {
    say(label, "What kind of look are you going for?", [
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
            "Our Curtain Collection covers Window, Door and Special categories — velvet, silk, blackout, sheer, motorized and more, plus a dedicated photo & video showcase.",
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
      { label: "Book a Consultation", onSelect: () => showBooking() },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ];
  }

  function showSofaIntro(label = "Show me sofa fabrics") {
    say(label, "What matters most to you in a sofa?", [
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
            "Our Custom Designer Sofa service tailors everything — fabric, colour and dimensions — to your exact space. Don't miss our Luxury Sofa photo & video showcase too.",
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
      { label: "Book a Consultation", onSelect: () => showBooking() },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ];
  }

  function showOutdoorFabricIntro(label = "Need outdoor fabric") {
    say(
      label,
      "Our Outdoor Fabric Collection is weather-resistant, fade-proof and built for patios, lounges, poolside furniture and al-fresco living — without compromising on luxury. It's mould & mildew resistant and easy to clean.",
      [
        {
          label: "View Outdoor Fabric Collection",
          onSelect: () => {
            setOpen(false);
            router.push("/outdoor-fabric");
          },
        },
        { label: "Book a Consultation", onSelect: () => showBooking() },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showBlackoutIntro(label = "Need blackout fabric") {
    say(
      label,
      "Our Blackout Collection is a 4-pass luxurious blackout fabric — 100% blackout with UV protection, heat insulation, sound-dampening and a washable, anti-sticking finish. Perfect for bedrooms, home theatres, hotels and offices.",
      [
        {
          label: "View Blackout Collection",
          onSelect: () => {
            setOpen(false);
            router.push("/catalogs/blackout-fabric");
          },
        },
        { label: "Book a Consultation", onSelect: () => showBooking() },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showFabricCollectionIntro(label = "Fabric Collection") {
    say(
      label,
      "Our general Fabric Collection covers velvet, leather, linen and jacquard damask — premium interior fabric for curtains, upholstery and custom projects.",
      [
        {
          label: "View Fabric Collection",
          onSelect: () => {
            setOpen(false);
            router.push("/fabrics");
          },
        },
        { label: "Book a Consultation", onSelect: () => showBooking() },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showContact(label = "Contact Information") {
    say(
      label,
      `Here's how to reach us:\n🚚 ${site.deliveryStatement}\n\n${CONTACT_LINE}\n✉️ ${site.email}`,
      [
        {
          label: "Chat With Us on WhatsApp",
          onSelect: () => window.open(site.whatsapp, "_blank"),
        },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function showFaq(label = "Frequently Asked Questions") {
    say(label, "Here are a few things buyers often ask:", [
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
            "Curtains, sofa upholstery, outdoor fabric, blackout fabric, and general fabrics — velvet, leather, linen, jacquard and more — all organized into catalogs you can browse online.",
            faqFollowUp()
          ),
      },
      {
        label: "Do you supply across Pakistan?",
        onSelect: () => say("Do you supply across Pakistan?", site.deliveryStatement, faqFollowUp()),
      },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ]);
  }

  function faqFollowUp(): QuickReply[] {
    return [
      { label: "Ask another question", onSelect: () => showFaq() },
      { label: "Book a Consultation", onSelect: () => showBooking() },
      { label: "⟵ Back to Menu", onSelect: backToMenu },
    ];
  }

  function submitText(text: string) {
    if (!text.trim()) return;
    const q = text.toLowerCase();

    if (/blackout/.test(q)) return showBlackoutIntro(text);
    if (/outdoor/.test(q)) return showOutdoorFabricIntro(text);
    if (/curtain|drape|drapery|blind/.test(q)) return showCurtainIntro(text);
    if (/sofa|couch|upholst/.test(q)) return showSofaIntro(text);
    if (/fabric collection|velvet|linen|jacquard/.test(q)) return showFabricCollectionIntro(text);
    if (/catalog/.test(q)) return showCatalogInfo(text);
    if (/contact|phone|whatsapp|number|azeem/.test(q)) return showContact(text);
    if (/consult|book|appointment|price|pricing|quote|sample/.test(q)) return showBooking(text);
    if (/about|wholesale|who are you/.test(q)) return showAboutBusiness(text);
    if (/faq|question/.test(q)) return showFaq(text);

    say(
      text,
      `Thanks for your message! For a detailed answer, our design team is best placed to help directly.\n\nYou can also ask me about curtains, sofas, blackout fabric, outdoor fabric, or our catalogs.\n\n${CONTACT_LINE}`,
      [
        {
          label: "Chat With Us on WhatsApp",
          onSelect: () => window.open(site.whatsappWithMessage, "_blank"),
        },
        { label: "Book a Consultation", onSelect: () => showBooking() },
        { label: "⟵ Back to Menu", onSelect: backToMenu },
      ]
    );
  }

  function handleFreeText(e: React.FormEvent) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    setInputValue("");
    submitText(text);
  }

  function toggleListening() {
    if (typeof window === "undefined" || !sttSupported) return;

    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInputValue(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
      setInputValue((current) => {
        const text = current.trim();
        if (text) submitText(text);
        return "";
      });
    };

    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }

  function toggleVoiceReplies() {
    if (!ttsSupported) return;
    setVoiceOn((v) => {
      if (v) window.speechSynthesis.cancel();
      return !v;
    });
  }

  return (
    <>
      <button
        className="ai-assistant-float"
        aria-label={open ? "Close AI sales assistant" : "Open AI sales assistant"}
        onClick={() => setOpen((v) => !v)}
      >
        {!open && <span className="ai-assistant-badge">AI</span>}
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-comments"}`} />
      </button>

      {open && (
        <div className="ai-assistant-panel" ref={panelRef}>
          <div className="ai-assistant-header">
            <div className="ai-assistant-identity">
              <div className="ai-assistant-avatar">
                <i className="fa-solid fa-user-tie" />
              </div>
              <div>
                <strong>Damask AI Sales Assistant</strong>
                <span>Online • Your Textile Showroom Guide</span>
              </div>
            </div>
            <div className="ai-assistant-header-actions">
              {ttsSupported && (
                <button
                  type="button"
                  aria-label={voiceOn ? "Turn off voice replies" : "Turn on voice replies"}
                  aria-pressed={voiceOn}
                  className={voiceOn ? "ai-voice-toggle-on" : ""}
                  onClick={toggleVoiceReplies}
                  title={voiceOn ? "Voice replies on" : "Voice replies off"}
                >
                  <i className={`fa-solid ${voiceOn ? "fa-volume-high" : "fa-volume-xmark"}`} />
                </button>
              )}
              <button aria-label="Close" onClick={() => setOpen(false)}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
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
            {sttSupported && (
              <button
                type="button"
                className={listening ? "ai-mic-btn ai-mic-listening" : "ai-mic-btn"}
                aria-label={listening ? "Stop voice input" : "Speak your question"}
                aria-pressed={listening}
                onClick={toggleListening}
                title={listening ? "Listening… tap to stop" : "Tap to speak"}
              >
                <i className="fa-solid fa-microphone" />
              </button>
            )}
            <input
              type="text"
              placeholder={listening ? "Listening…" : "Ask about curtains, sofas, blackout fabric..."}
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
