import Footer from "@/layout/footer/Footer";
import "../styles/index.css";
import Header from "@/layout/headers/Header";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import DocumentArea from "@/components/common/DocumentArea";

const body = Outfit({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
});

const heading = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tg-heading-font-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Spunky SDX" />
        <link
          rel="icon"
          href="/assets/img/logo/SpunkySDX_Logo.svg"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={` ${body.variable} ${heading.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
