import { site, nav } from "@/lib/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative border-t border-line">
      <div className="container-page grid grid-cols-12 gap-y-10 py-16">
        {/* Brand */}
        <div className="col-span-12 md:col-span-5">
          <img src="/logo.svg" alt={site.name} className="h-6 w-auto" />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
            {site.description}
          </p>
          <p className="mt-4 text-[13px] text-muted/70">{site.location}</p>
        </div>

        {/* Nav */}
        <div className="col-span-6 md:col-span-3 md:col-start-7">
          <p className="eyebrow mb-4">Sahifa</p>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] text-muted transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-6 md:col-span-3">
          <p className="eyebrow mb-4">Aloqa</p>
          <ul className="flex flex-col gap-3 text-[15px]">
            <li>
              <a href={site.phoneHref} className="text-muted transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-white"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-[13px] text-muted/70 sm:flex-row sm:items-center">
          <p>© {year} {site.wordmark}. Barcha huquqlar himoyalangan.</p>
          <p>{site.role} · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
