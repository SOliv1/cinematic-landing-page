import LegalMicroFooter from "../../components/LegalMicroFooter";

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
