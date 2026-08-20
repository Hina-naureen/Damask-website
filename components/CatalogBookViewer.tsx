"use client";

import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import type { FabricSpec } from "@/lib/data/catalogs";

export type BookPage =
  | { type: "cover"; src: string; label: string }
  | { type: "fabric"; src: string; label: string }
  | { type: "detail"; label: string; fabricNumber: number; spec: FabricSpec };

const SPEC_ROWS: { key: keyof FabricSpec; label: string }[] = [
  { key: "catNo", label: "Catalog No." },
  { key: "serialNo", label: "Serial No." },
  { key: "composition", label: "Composition" },
  { key: "width", label: "Width" },
  { key: "weight", label: "Weight" },
  { key: "suitableFor", label: "Suitable For" },
  { key: "washingInstruction", label: "Care Instructions" },
  { key: "feature", label: "Feature" },
  { key: "note", label: "Note" },
];

const Page = React.forwardRef<HTMLDivElement, BookPage>((page, ref) => {
  if (page.type === "detail") {
    return (
      <div className="book-page book-page-detail" ref={ref}>
        <div className="book-spec-sheet">
          <p className="book-spec-eyebrow">Fabric Specification</p>
          <h4>Fabric {page.fabricNumber}</h4>
          <dl className="fabric-spec-list">
            {SPEC_ROWS.filter((row) => page.spec[row.key]).map((row) => (
              <div className="fabric-spec-row" key={row.key}>
                <dt>{row.label}</dt>
                <dd>{page.spec[row.key]}</dd>
              </div>
            ))}
          </dl>
        </div>
        <span className="book-page-label">{page.label}</span>
      </div>
    );
  }
  return (
    <div className={`book-page book-page-${page.type}`} ref={ref}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={page.src} alt={page.label} />
      <span className="book-page-label">{page.label}</span>
    </div>
  );
});
Page.displayName = "Page";

const CHROME_DESKTOP = 260; // nav buttons + gaps + stage padding reserved on wide screens
const CHROME_MOBILE = 70; // reduced chrome reserved on narrow screens
const MIN_PAGE_HEIGHT = 560; // enough vertical room for the densest spec sheet at any width
const MIN_SPREAD_PAGE_WIDTH = 220; // below this a single page is more readable than a cramped spread

export default function CatalogBookViewer({ pages, name }: { pages: BookPage[]; name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [book, setBook] = useState({ width: 340, height: 480, spread: true });

  useEffect(() => {
    function computeSize() {
      const stageWidth = stageRef.current?.clientWidth ?? window.innerWidth;
      // Spread into two pages whenever each page can be at least MIN_SPREAD_PAGE_WIDTH
      // wide — the spec sheet's height is fixed (MIN_PAGE_HEIGHT) regardless of width,
      // so a narrower spread just wraps more text rather than cropping it, letting
      // tablets (and phones in landscape) keep the real open-book layout too.
      const canSpread = stageWidth - CHROME_DESKTOP >= MIN_SPREAD_PAGE_WIDTH * 2;
      const chrome = canSpread ? CHROME_DESKTOP : CHROME_MOBILE;
      const available = Math.max(stageWidth - chrome, 200);

      if (canSpread) {
        const perPage = Math.min(Math.max(available / 2, MIN_SPREAD_PAGE_WIDTH), 380);
        setBook({ width: Math.round(perPage), height: MIN_PAGE_HEIGHT, spread: true });
      } else {
        const single = Math.min(Math.max(available, 220), 340);
        setBook({ width: Math.round(single), height: MIN_PAGE_HEIGHT, spread: false });
      }
    }
    computeSize();
    window.addEventListener("resize", computeSize);
    return () => window.removeEventListener("resize", computeSize);
  }, []);

  return (
    <div className="catalog-book-wrap">
      <div className="catalog-book-stage" ref={stageRef}>
        <button
          className="fabric-modal-nav catalog-book-prev"
          aria-label="Previous page"
          onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="catalog-book-frame">
          <div className={`catalog-book-spine${book.spread ? " is-visible" : ""}`} aria-hidden="true" />
          <HTMLFlipBook
            key={`${book.width}x${book.height}x${book.spread}`}
            width={book.width}
            height={book.height}
            minWidth={book.width}
            maxWidth={book.width}
            minHeight={book.height}
            maxHeight={book.height}
            size="fixed"
            startPage={0}
            drawShadow={false}
            flippingTime={700}
            usePortrait={!book.spread}
            startZIndex={10}
            autoSize={false}
            maxShadowOpacity={0}
            showCover
            mobileScrollSupport
            swipeDistance={30}
            clickEventForward
            useMouseEvents
            showPageCorners
            disableFlipByClick={false}
            className="catalog-flipbook"
            style={{}}
            ref={bookRef}
            onFlip={(e: { data: number }) => setPageIndex(e.data)}
          >
            {pages.map((p, i) => (
              <Page key={i} {...p} />
            ))}
          </HTMLFlipBook>
        </div>

        <button
          className="fabric-modal-nav catalog-book-next"
          aria-label="Next page"
          onClick={() => bookRef.current?.pageFlip()?.flipNext()}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
      <p className="catalog-book-count">
        {name}: Page {pageIndex + 1} of {pages.length}
      </p>
    </div>
  );
}
