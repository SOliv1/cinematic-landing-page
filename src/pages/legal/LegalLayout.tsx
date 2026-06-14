import LegalMicroFooter from "../../components/LegalMicroFooter";
import ReturnHomePill from "../../components/ReturnHomePill";

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
      </div>

      <header className="legal-page__hero">
        <p className="legal-page__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>For {eyebrow}</p>
      </header>

      <div className="legal-page__content">{children}</div>

      <LegalMicroFooter />
    </main>
  );
}
