import LegalLayout from "./LegalLayout";

export default function SeasonalCookies() {
    return (
        <LegalLayout title="Cookie Notice" eyebrow="Seasonal.Studio">
            <section className="legal-section">
                <h2>1. What are cookies?</h2>
                <p>
                    Cookies are small text files stored on your device to help websites
                    function smoothly and understand general usage patterns.
                </p>
            </section>

            <section className="legal-section">
                <h2>2. How Seasonal.Studio uses cookies</h2>
                <p>
                    We use only minimal cookies for performance, analytics, and smooth
                    page transitions. We do not use advertising cookies.
                </p>
            </section>

            <section className="legal-section">
                <h2>3. Managing cookies</h2>
                <p>
                    You can disable cookies in your browser settings at any time. The site
                    will continue to function, though some animations or analytics may be
                    limited.
                </p>
            </section>
        </LegalLayout>
    );
}
