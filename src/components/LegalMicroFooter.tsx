import { LegalSiblingNav } from '../pages/legal/LegalLayout';

export default function LegalMicroFooter({ currentTitle }: { currentTitle?: string }) {
  return (
    <footer className="legal-micro-footer">
      <LegalSiblingNav current={currentTitle ?? ''} />
      <a href="/" className="legal-return-btn" aria-label="Return to Seasonal.Studio home">
        ← Back to Seasonal.Studio
      </a>
      <p>© {new Date().getFullYear()} Seasonal.Studio · All rights reserved</p>
    </footer>
  );
}
