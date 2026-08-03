import LegalMicroFooter from "../../components/LegalMicroFooter";
import ReturnHomePill from "../../components/ReturnHomePill";

const LEGAL_LINKS = [
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/terms',   label: 'Terms & Conditions' },
  { href: '/legal/cookies', label: 'Cookie Notice'  },
];

export function LegalSiblingNav({ current }: { current: string }) {
  return (
    <nav className="legal-sibling-nav" aria-label="Legal pages">
      {LEGAL_LINKS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`legal-sibling-link${label === current ? ' is-active' : ''}`}
          aria-current={label === current ? 'page' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default function LegalLayout({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page fade-in">
      <div className="legal-page__nav">
        <ReturnHomePill />
        <LegalSiblingNav current={title} />
      </div>

      <header className="legal-page__hero">
        <p className="legal-page__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>For {eyebrow}</p>
      </header>

      <div className="legal-page__content">{children}</div>

      <LegalMicroFooter currentTitle={title} />
    </main>
  );
}
