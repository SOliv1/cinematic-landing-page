import LegalLayout from "./LegalLayout";

export default function SeasonalPrivacy() {
    return (
        <LegalLayout title="Privacy Policy" eyebrow="Seasonal.Studio">
            <section className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                    Seasonal.Studio is a calm, creative space exploring atmospheric web
                    design and seasonal rhythm. This policy explains what information we
                    collect, how it is used, and your rights.
                </p>
            </section>

            <section className="legal-section">
                <h2>2. Information we collect</h2>
                <p>
                    Seasonal.Studio does not require accounts or logins. We collect only
                    minimal, anonymous analytics to understand general site usage.
                </p>
                <p>
                    If you contact us directly, we may receive your email address and any
                    information you choose to share.
                </p>
            </section>

            <section className="legal-section">
                <h2>3. How we use information</h2>
                <p>
                    We use analytics to understand how visitors interact with the site so
                    we can refine the experience. We do not sell or share your data.
                </p>
            </section>

            <section className="legal-section">
                <h2>4. Cookies</h2>
                <p>
                    Seasonal.Studio uses lightweight cookies only where necessary for
                    performance or analytics. You can disable cookies in your browser at
                    any time.
                </p>
            </section>

            <section className="legal-section">
                <h2>5. Your rights</h2>
                <p>
                    You may request deletion of any personal information you have shared
                    with us. Contact details are available on the site.
                </p>
            </section>

            <section className="legal-section">
                <h2>6. Updates</h2>
                <p>
                    This policy may be updated occasionally to reflect new features or
                    legal requirements.
                </p>
            </section>
        </LegalLayout>
    );
}
