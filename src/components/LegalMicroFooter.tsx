export default function LegalMicroFooter() {
  return (
    <footer className="legal-micro-footer">
      <a href="/" className="legal-return-btn" aria-label="Return to Seasonal.Studio home">
        ← Back to Seasonal.Studio
      </a>
      <p>© {new Date().getFullYear()} Seasonal.Studio · All rights reserved</p>
    </footer>
  );
}
