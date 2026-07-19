import { cn } from "@/lib/utils";

/**
 * Flat, monochrome, blueprint-style hero illustration.
 * Fills: #191919 only · strokes: #F4F4F4 · details: #A8A8A8 · transparent bg.
 * A website panel with UI fragments, ascending modules (growth) and technical
 * annotations — no 3D, perspective, gradients, glow or shadows.
 */
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <style>{`.ha text{font-family:var(--font-geist-mono),ui-monospace,monospace;letter-spacing:1px}`}</style>
      <g className="ha">
        {/* corner registration marks */}
        <g stroke="#A8A8A8" strokeWidth="1">
          <path d="M40 52H60 M50 42V62" />
          <path d="M500 52H520 M510 42V62" />
          <path d="M40 548H60 M50 538V558" />
          <path d="M500 548H520 M510 538V558" />
        </g>

        {/* baseline */}
        <g stroke="#A8A8A8" strokeWidth="1">
          <path d="M84 502H476" />
          <path d="M132 502V510 M252 502V510 M372 502V510 M432 502V510" />
        </g>

        {/* left vertical dimension */}
        <g stroke="#A8A8A8" strokeWidth="1">
          <path d="M100 250V462" />
          <path d="M94 250H106 M94 462H106" />
        </g>

        {/* ascending modules (growth) */}
        <rect x="300" y="214" width="140" height="48" fill="#191919" stroke="#F4F4F4" strokeWidth="1.2" />
        <circle cx="314" cy="226" r="2.5" fill="#A8A8A8" />
        <circle cx="323" cy="226" r="2.5" fill="#A8A8A8" />
        <path d="M314 246H404" stroke="#A8A8A8" strokeWidth="1.5" />
        <rect x="326" y="166" width="126" height="40" stroke="#F4F4F4" strokeWidth="1" />
        <path d="M338 187H432" stroke="#A8A8A8" strokeWidth="1.5" />
        <rect x="350" y="122" width="112" height="36" stroke="#A8A8A8" strokeWidth="1" />
        <rect x="374" y="84" width="100" height="32" stroke="#A8A8A8" strokeWidth="1" />

        {/* main website panel */}
        <rect x="132" y="250" width="300" height="212" fill="#191919" stroke="#F4F4F4" strokeWidth="1.2" />
        <path d="M132 286H432" stroke="#F4F4F4" strokeWidth="1" />
        <g stroke="#A8A8A8" strokeWidth="1">
          <rect x="146" y="264" width="7" height="7" />
          <rect x="159" y="264" width="7" height="7" />
          <rect x="172" y="264" width="7" height="7" />
          <rect x="300" y="263" width="118" height="14" />
        </g>
        <path d="M152 312H364 M152 326H300" stroke="#A8A8A8" strokeWidth="2" />
        {/* card 1 */}
        <rect x="152" y="346" width="124" height="98" stroke="#A8A8A8" strokeWidth="1" />
        <rect x="164" y="360" width="22" height="22" stroke="#A8A8A8" strokeWidth="1" />
        <path d="M164 420H240 M164 432H212" stroke="#A8A8A8" strokeWidth="1.5" />
        {/* card 2 */}
        <rect x="288" y="346" width="124" height="98" stroke="#A8A8A8" strokeWidth="1" />
        <rect x="372" y="360" width="22" height="22" stroke="#A8A8A8" strokeWidth="1" />
        <path d="M300 372H392 M300 386H376 M300 400H388" stroke="#A8A8A8" strokeWidth="1.5" />

        {/* leaders + nodes */}
        <g stroke="#A8A8A8" strokeWidth="0.75">
          <path d="M443 238H470" />
          <path d="M465 140H472" />
          <path d="M424 82V62" />
        </g>
        <circle cx="440" cy="238" r="3" fill="#191919" stroke="#A8A8A8" strokeWidth="1" />
        <circle cx="462" cy="140" r="3" fill="#191919" stroke="#A8A8A8" strokeWidth="1" />
        <circle cx="424" cy="84" r="3" fill="#191919" stroke="#F4F4F4" strokeWidth="1" />

        {/* Qulaylik tag */}
        <rect x="108" y="232" width="92" height="24" fill="#191919" stroke="#A8A8A8" strokeWidth="1" />
        <text x="118" y="249" fill="#F4F4F4" fontSize="11">QULAYLIK</text>

        {/* labels */}
        <text x="474" y="242" fill="#A8A8A8" fontSize="12">SOTUV</text>
        <text x="476" y="144" fill="#A8A8A8" fontSize="12">FOYDA</text>
        <text x="392" y="56" fill="#F4F4F4" fontSize="13">O&apos;SISH</text>

        <g stroke="#A8A8A8" strokeWidth="1">
          <rect x="84" y="524" width="7" height="7" />
          <rect x="252" y="524" width="7" height="7" />
        </g>
        <text x="99" y="531" fill="#A8A8A8" fontSize="12">REJA</text>
        <text x="267" y="531" fill="#A8A8A8" fontSize="12">TEZLIK</text>
      </g>
    </svg>
  );
}
