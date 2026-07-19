import { site, nav } from "@/lib/site";
import { Logo } from "@/components/ui/Icons";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-line-soft">
      <div className="container-page py-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5 text-white">
              <Logo className="h-5 w-5 text-accent-300" />
              <span className="font-display text-xl font-semibold tracking-tight">
                {site.wordmark}
                <span className="text-accent-400">.</span>
              </span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-white/50">
              {site.description}
            </p>
            <p className="mt-3 text-[14px] text-white/35">{site.location}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow mb-2.5">Sahifa</p>
            <ul className="flex flex-col gap-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-2.5">Aloqa</p>
            <ul className="flex flex-col gap-1.5 text-[15px]">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-white/55 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-line-soft pt-4 text-[13px] text-white/35 sm:flex-row">
          <p>
            © {year} {site.wordmark}. Barcha huquqlar himoyalangan.
          </p>
          <p>{site.role} · {site.location}</p>
        </div>
      </div>

      {/* Oversized wordmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="mask-fade-b -mb-6 bg-gradient-to-b from-white/[0.05] to-transparent bg-clip-text text-center font-display text-[22vw] font-bold leading-none text-transparent">
          {site.wordmark}
        </p>
      </div>
    </footer>
  );
}
