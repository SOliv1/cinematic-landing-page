import LegalLayout from "./LegalLayout";

export default function SeasonalTerms() {
    return (
        <LegalLayout title="Terms of Use" eyebrow="Seasonal.Studio">
            <section className="legal-section">
                <h2>1. Who we are</h2>
                <p>
                    Seasonal.Studio is an independent creative space exploring atmospheric
                    web design, seasonal rhythm, and digital calm. These terms explain how
                    you may use the site and its content.
                </p>
            </section>

            <section className="legal-section">
                <h2>2. Using this website</h2>
                <p>
                    By visiting or browsing Seasonal.Studio, you agree to these terms.
                    They may be updated occasionally, so it is helpful to check back from time to time.
                </p>
                <p>
                    You agree not to misuse the site, attempt to interfere with its
                    security, or use any content without permission.
                </p>
            </section>

            <section className="legal-section">
                <h2>3. Creative content and ownership</h2>
                <p>
                    All visuals, layouts, writing, photography, animations, and design
                    systems on Seasonal.Studio are original works. They are protected by
                    copyright and may not be copied, reproduced, or redistributed without
                    written permission.
                </p>
                <p>
                    You are welcome to browse, read, and be inspired, but not to reuse
                    the content commercially or claim it as your own.
                </p>
            </section>

            <section className="legal-section">
                <h2>4. Accuracy and updates</h2>
                <p>
                    Seasonal.Studio is a living project. Content may evolve, be refined,
                    or be archived over time. While we aim for clarity and accuracy, we
                    cannot guarantee that everything will always be up to date.
                </p>
                <p>
                    If you notice something that feels incorrect or unclear, you are
                    welcome to get in touch.
                </p>
            </section>

            <section className="legal-section">
                <h2>5. External links</h2>
                <p>
                    Seasonal.Studio may include links to external websites or tools.
                    These are provided for context or inspiration, but we are not
                    responsible for their content, policies, or availability.
                </p>
            </section>

            <section className="legal-section">
                <h2>6. Limitation of liability</h2>
                <p>
                    Seasonal.Studio is offered as a calm, creative resource. We are not
                    liable for any loss, interruption, or damage arising from your use of
                    the site.
                </p>
                <p>
                    You use the site at your own discretion and are responsible for
                    ensuring your device and connection are secure.
                </p>
            </section>

            <section className="legal-section">
                <h2>7. Privacy</h2>
                <p>
                    For information on how we handle data, please refer to the Seasonal.Studio{' '}
                    <a href="/legal/privacy">Privacy Policy</a>.
                </p>
            </section>

            <section className="legal-section">
                <h2>8. Changes to these terms</h2>
                <p>
                    We may update these terms occasionally to reflect new features,
                    design changes, or legal requirements. Continued use of the site
                    means you accept the updated terms.
                </p>
            </section>
        </LegalLayout>
    );
}
