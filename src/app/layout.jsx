// app/layout.jsx

import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="page-wrapper">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
