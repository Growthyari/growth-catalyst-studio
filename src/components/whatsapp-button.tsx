import { useState } from "react";

export function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="https://wa.me/919205122965"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center gap-3"
    >
      {hover ? (
        <span className="hidden md:inline-block rounded-sm bg-foreground px-3 py-2 text-xs text-background shadow-lg">
          Chat on WhatsApp
        </span>
      ) : null}
      <span
        className="flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform h-16 w-16 md:h-14 md:w-14"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8 md:h-7 md:w-7">
          <path d="M19.11 17.21c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.12.55 4.19 1.6 6.02L4 28l6.13-1.6a11.96 11.96 0 0 0 5.89 1.54h.01c6.62 0 12.02-5.39 12.02-12.02C28.05 9.32 22.64 4 16.02 4zm0 21.86h-.01a9.92 9.92 0 0 1-5.06-1.39l-.36-.22-3.64.95.97-3.55-.24-.37a9.93 9.93 0 0 1-1.52-5.27c0-5.49 4.47-9.95 9.96-9.95 2.66 0 5.16 1.04 7.04 2.92a9.88 9.88 0 0 1 2.92 7.04c-.01 5.49-4.47 9.84-9.96 9.84z"/>
        </svg>
      </span>
    </a>
  );
}