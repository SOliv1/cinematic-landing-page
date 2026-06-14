export default function LegalMicroFooter() {
  return (
    <footer className="legal-micro-footer">
      <a href="/" className="legal-return-home legal-return-home--bottom" aria-label="Return to Seasonal.Studio home">
        ← Return to Seasonal.Studio
      </a>
      <p>© {new Date().getFullYear()} Seasonal.Studio · All rights reserved</p>
    </footer>
  );
}
